---
title: How To Build Serverless Cursor-based Pagination Service On The AWS Cloud
type: article
status: imported
author: Tuan Nguyen
source: innomize-cms
source_id: 21
slug: how-to-build-serverless-cursor-based-pagination-service-on-the-aws-cloud
url: "https://innomizetech.com/blog/how-to-build-serverless-cursor-based-pagination-service-on-the-aws-cloud"
created: 2023-06-20
published: 2019-11-20
locale: en
excerpt: A guide on how to build an API with AWS Lambda and API Gateway to paginate data using the Serverless framework. 
---

# How To Build Serverless Cursor-based Pagination Service On The AWS Cloud

![](https://res.cloudinary.com/innomizetech/image/upload/v1687234972/production/build_serverless_cursor_based_42119322ec.png) 

In this post, I’ll be guiding you on how to build an API with AWS Lambda and API Gateway to paginate data using the [Serverless](https://serverless.com/) framework.

#### Technologies stack

*   [**AWS Lambda**](https://aws.amazon.com/lambda/) for running code without provisioning or managing servers. You can utilize free-tier to run your service with **zero** cost.
*   [**AWS API Gateway**](https://aws.amazon.com/api-gateway/) to create, publish, and secure Rest APIs.
*   **[Serverless](https://serverless.com/framework/docs/providers/aws/guide/intro/)** framework to build and deploy your backend services on the cloud, you can build and deploy a serverless function in minutes.

#### Prerequisites

*   An AWS account:[https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)
*   Have some experience with AWS Cloud computing and the Serverless framework.

* * *

#### Cursor-based Pagination

Have you ever heard of this concept, it is just simple a pagination technique but it does not work the same as the classic pagination. Yes, the classic pagination you must be familiar with, it works based on the **offset-limit** concept. An offset is a number that specifies the number of rows to skip before starting to return rows from the query. For simplicity, you want to see the data on page 3 with a page size of 10, just skip 20 rows and return the next 10 rows as the result.

**Offset-limit** is one of the most commonly used techniques for data paging. However, there are several drawbacks to using this approach:

*   With a database that has large datasets, the offset clause makes slower querying as the number of records increases because the database still read up all records before skipping with offset records and returning it.
*   In datasets that change frequently, the paged data becomes **unreliable** and possibility returns **duplicate** results.

**Cursor-based pagination** (aka keyset pagination**)** works based on a **cursor** that is a unique identifier for a specific record in datasets. We will deal with the cursor as the pointer of the next record that we will receive on the next page. And on subsequent requests, the server returns the cursor until there is no record on the next page.

There are a couple of approaches to implementing cursor-based pagination, below are some interesting articles that I think you should take a look at to get more details:

*   [Evolving API Pagination at Slack](https://www.sitepoint.com/paginating-real-time-data-cursor-based-pagination/)
*   [“Cursor Pagination” Profile](https://jsonapi.org/profiles/ethanresnick/cursor-pagination/)
*   [Evolving API Pagination at Slack](https://slack.engineering/evolving-api-pagination-at-slack-1c1f644f8e12)

**Advantages**:

*   Prevent many of the drawbacks of classic pagination that I have mentioned above.
*   Scale well with large datasets.

**Disadvantages**:

*   The end-user cannot see the total number of items in the list.
*   The end-user cannot jump to a specific page or back to the previous page.

With the above benefits, I chose **cursor-based pagination** for this implementation.

In this demo, I will show you how to implement cursor-based pagination using a unique and sequential column of the table (i.e. auto-increment column). Yeah, it is pretty simple and easy to understand.

* * *

#### Serverless

> The Serverless Framework helps you develop and deploy your AWS Lambda functions, along with the AWS infrastructure resources they require. It’s a CLI that offers structure, automation, and best practices out-of-the-box, allowing you to focus on building sophisticated, event-driven, serverless architectures, comprised of [Functions](https://serverless.com/framework/docs/providers/aws/guide/intro/#functions) and [Events](https://serverless.com/framework/docs/providers/aws/guide/intro/#events).

There are ways to create and deploy an AWS Lambda function by using AWS Cloudformation or AWS Console. But I chose serverless because of its convenience, automation, and the ability to increase development time.

One of my favorite Serverless features is the [plugin](https://serverless.com/plugins/), some of the plugins I recommend use in this [article](https://innomizetech.com/blog/top-serverless-plugins-we-are-using). In this guide, I will use [serverless-plugin-typescript](https://github.com/prisma-labs/serverless-plugin-typescript) and [serverless-offline](https://github.com/dherault/serverless-offline) for building Serverless applications.

*   [**serverless-plugin-typescript**](https://github.com/prisma-labs/serverless-plugin-typescript)**:** This plugin helps us to compile typescript during development and deployment. I like this plugin in usage with zero configuration but there is an issue that I can’t solve during using this plugin [**path resolver**](https://www.typescriptlang.org/docs/handbook/module-resolution.html). You have to use relative import and make your code becomes lacking in aesthetics. To use non-relative import you can use another option such as [https://github.com/serverless-heaven/serverless-webpack](https://github.com/serverless-heaven/serverless-webpack).
*   [**serverless-offline**](https://github.com/dherault/serverless-offline)**:** emulates [AWS Lambda](https://aws.amazon.com/lambda/) and [API Gateway](https://aws.amazon.com/api-gateway) on your local machine to speed up your development cycles. If you are using serverless this plugin be indispensable during testing on local.

With the serverless application, we must define a template file for the definition of your AWS resources, configurations, list of plugins, etc.

```yml
service: pagination-serverless-api
frameworkVersion: '>=1.1.0  {
  let cursorId;
  let selectQuery = select().from(options.table);

  if (options.cursor) {
    try {
      let decodedCursor = decode(options.cursor);

      cursorId = decodedCursor.split(':')[1];
    } catch {
      throw new Error('Invalid cursor');
    }

    selectQuery = selectQuery.where(`id >= ${cursorId}`);
  }

  selectQuery = selectQuery.limit(+(options.limit || 50) + 1);
  selectQuery = selectQuery.order('id', true);

  return selectQuery.toString();
};
```

As you see above code, I use the [squel](https://hiddentao.github.io/squel/index.html) to build the query string, you also manually build the raw query. But I recommend you to use the **squel** by its benefits like:

*   Supports parameterized queries for safe value escaping.
*   Supports Non-standard SQL.
*   Uses method chaining for ease of use.

Finally, implement code for the function as below:

```yaml
import { Handler, Context } from 'aws-lambda';

import { mysql, getQueryParams, encode, buildCursorPaginationQuery } from '../../helpers';

export const handler: Handler = async (event: any, context: Context) => {
  const query: any = getQueryParams(event);
  const pagingQuery: string = buildCursorPaginationQuery({
    table: 'person',
    limit: query.limit,
    cursor: query.cursor
  });

  console.log(pagingQuery);

  const results: any[] = (await mysql.query(pagingQuery)) || [];
  // Calculate next cursor
  let nextCursor = '';

  if (results.length > query.limit) {
    const lastEle = results.pop();

    nextCursor = encode(`person:${lastEle.id}`);
  }

  const response = {
    success: true,
    data: results,
    response_metadata: {
      next_cursor: nextCursor
    }
  };

  // Run clean up function
  await mysql.end();

  return {
    statusCode: 200,
    body: JSON.stringify(response)
  };
};
```

The API we develop accepts two params:

*   limit: a number value to limit records that return from the server.
*   cursor: a base64 string that is returned from the previous request. It indicates the starting point to retrieve data for the next page.

For testing, I will run the following command to start API locally:

```sh
sls offline
```

Let’s explore our work. Using the **Postman**, we can easier invoke API

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689088064/production/pagination_postman_call_d9b5c00ecc.png) 

Test API with Postman

#### **Deploy**

Deployment is much easier with the **Serverless** framework and can be done with one single command. So let’s deploy and see results by running the below command:

```sh
sls deploy --stage \[your-stage\] --region \[your-region\]
```

Feel free to check out your deployment and try to invoke API Gateway on the AWS and compare results. I hope it works for you. If not, please let me know.

The source code is available on our [Github](https://github.com/innomizetech/pagination-serverless)

* * *

Conclusion
==========

I hope this guide will be helpful and bring you some ideas to help build your services with cost optimization, security, flexibility, and high availability.

In this guide, I only write a simple code to show how to build and deploy. You are free to extend this project with some additional features as below:

*   Supports more param options such as _fields_, _sort by_ …
*   Implementing classic pagination (offset-limit pagination).
*   Implementing the error handler for handling such as **InvalidCursorError** or **UnexpectedError**.
*   Uses other databases such as [Amazon DynamoDB](https://aws.amazon.com/dynamodb/) is a great option.