---
title: 07 Best Practices When Using AWS SSM Parameter Store
type: article
status: imported
author: Hoang Le
source: innomize-cms
source_id: 20
slug: 07-best-practices-when-using-aws-ssm-parameter-store
url: "https://innomizetech.com/blog/07-best-practices-when-using-aws-ssm-parameter-store"
created: 2023-06-20
published: 2019-11-19
locale: en
excerpt: Discovering best practices and tips when working with AWS SSM Parameter Store to secure your cloud application.
---

# 07 Best Practices When Using AWS SSM Parameter Store

![](https://res.cloudinary.com/innomizetech/image/upload/v1687234970/production/07_best_practices_d7b6b3ca9c.jpg) 

[Cloud Encryption](https://blog.hubstor.net/cloud-storage-and-data-encryption-how-businesses-can-protect-information-in-the-cloud)

**Security** is one of 5 pillars of the Well-Architected framework, it can archive by applying best practices and principles in **IAM**, **Encryption**, **Complician**, and **Governance**. Of course, best practices aren’t enough, you need to learn more. In this post, I only share our best practices and tip when working with AWS SSM Parameter Store. By sharing our best practices, my hope is to encourage you to build and deploy secure and reliable applications and also give us your feedback.

As you know, AWS Lambda supports native environment variables, you can easy to define and add any environment variables you want during deployment or change on the AWS Console Management. But using native environment variables contains some disadvantages:

*   It stores plain-text variables which easy to see its value. You had the option to encrypt variables in the console using KMS, but it still fetching per innovation causing an increase in your bill.
*   Hard to share across projects and teams that add complexity to your applications and services. More complexity requires more time to operate and increases the cost, therefore, you won’t need the conditional for the **Operational Excellence** pillar of the Well-Architected framework.
*   As per Yan Cui, it is hard for implementing fine-grained access to sensitive data.

#### **What is AWS Systems Manager Parameter Store (aka SSM Parameter Store)?**

> AWS Systems Manager Parameter Store provides secure, hierarchical storage for configuration data management and secrets management. You can store data such as passwords, database strings, and license codes as parameter values. You can store values as plain text or encrypted data. You can then reference values by using the unique name that you specified when you created the parameter. Highly scalable, available, and durable, Parameter Store is backed by the AWS Cloud. ~[AWS](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html)

#### What are the benefits?

There are a lot of benefits when using AWS SSM Parameter Store, I just copied those from the AWS documentation:

*   Use a secure, scalable, hosted secrets management service with no servers to manage.
*   Improve your security posture by separating your data from your code.
*   Store configuration data and secure strings in hierarchies and track versions.
*   Control and audit access at granular levels.
*   Configure change notifications and trigger automated actions for both parameters and parameter policies.
*   Tag parameters individually, and then secure access from different levels, including operational, parameter, Amazon EC2 tag, and path levels.
*   Reference AWS Secrets Manager secrets by using Parameter Store parameters.
*   Use Parameter Store parameters with other Systems Manager capabilities and AWS services to retrieve secrets and configuration data from a central store.
*   Configure integration with the AWS services for encryption, notification, monitoring, and auditing.

* * *

So now you understand what the SSM parameter store is and its challenges, let's talk about how we use it by reviewing the following best practices and tips:

#### #1 – Organizing parameters into hierarchies

AWS provides detailed [instructions](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-su-organize.html) on how to organize your SSM **Parameter Store** to define and manage parameters easily. Following its best practices can help you and make your life easier. Below are a couple of formats/conventions that our team normally uses:

*   `/environment/service-name/type/application-name/parameter\_name` i.e. _/prod/billing/databases/invoicing-portal/db\_connection\_string_
*   You also can add your department name as well i.e. _/prod/human-resource/employee/user\_list_

#### #2 – Consistent naming convention

Using a **well-defined** hierarchy helps you to manage and retrieve parameters more efficiently, but you also need to use a consistent [naming convention](https://en.wikipedia.org/wiki/Naming_convention_(programming)) across your AWS account, your departments, and your teams.

Archiving this best practice reduces your reviewing efforts by focusing on critical business logic rather than syntax and naming standards and then increases your productivity and quality which can increase your customer satisfaction.

#### #3 – Restrict IAM permission

AWS SSM Parameter Store normally keeps your sensitive information, so restrict permissions are required to improve the security of the application. Each Parameter Store has a unique Resource ARN per account and region, so you can easier to define roles and policies based on the hierarchy of the parameter store.

Below is a sample code from the AWS official document that shows how to define a policy to restrict access to the Parameter Store

```yaml
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ssm:*"
            ],
            "Resource": "arn:aws:ssm:us-east-2::parameter/*"
        },
        {
            "Effect": "Deny",
            "Action": [
                "ssm:GetParametersByPath"
            ],
            "Condition": {
                "StringEquals": {
                    "ssm:Recursive": [
                        "true"
                    ]
                }
            },
            "Resource": "arn:aws:ssm:us-east-2:123456789012:parameter/Dev/ERP/Oracle/*"
        },
        {
            "Effect": "Deny",
            "Action": [
                "ssm:PutParameter"
            ],
            "Condition": {
                "StringEquals": {
                    "ssm:Overwrite": [
                        "false"
                    ]
                }
            },
            "Resource": "arn:aws:ssm:us-east-2:123456789012:parameter/*"
        }
    ]
}
```
#### #4 – Combine into a single parameter like database connection string and keep it all together (co-location)

By using consistency hierarchies and naming conventions you can archive this idea. Keeping all related parameters together makes it easy to find and retrieve. Using fewer parameters can reduce your bills.

Instead of using 4 separated parameters for the database connection string as below:

```txt
/{env}/{service}/databases/master/host = db.domain.com
                                 /user = username
                                 /password = password
                                 /port = 3306
```

We combine into a single parameter using a standard connection string format:

```txt
/{env}/{service}/databases/master/db_connection = jdbc://username:password@db_host:port/database_name
```

Using a community library such as _connection-string-parser_, you can easy to parse the parameter values and use them to open a connection, see below code snippet:

```yaml
import { createConnection as createConnectionPromise, Connection } from 'promise-mysql';
import { ConnectionStringParser } from 'connection-string-parser';

const parseConnectionString = (dialect: string, connectionUri: string) => {
  const connectionParser = new ConnectionStringParser({
    scheme: dialect || 'mysql',
    hosts: []
  });
  const connectionStrParams = connectionParser.parse(connectionUri);

  return {
    host: connectionStrParams.hosts[0].host,
    port: connectionStrParams.hosts[0].port || 3306,
    database: connectionStrParams.endpoint,
    user: connectionStrParams.username,
    password: connectionStrParams.password
  };
};

export const createConnection = (connectionUri: string): Promise => {
  return createConnectionPromise(parseConnectionString('mysql', connectionUri));
};

```
#### #5 – Use tool/library to fetch, cache, and export to environment variables at runtime

You are charged for API integration to SSM parameters, every time you retrieve your parameter from the store, you will increase your bill. What could you do to reduce your billing?

By default, **max throughput (transactions per second) to retrieve parameter via API is 1000**, how do you manage and avoid exceed throughput error?

[@Yan Cui](https://twitter.com/theburningmonk) wrote an [article](https://hackernoon.com/you-should-use-ssm-parameter-store-over-lambda-env-variables-5197fc6ea45b) describes reasons why you should use AWS SSM Parameter Store over Lambda environment variables, he also mentioned approaches for caching and cache expiration using his custom client library.

Our team is using [middy](https://github.com/middyjs/middy) middleware to deal with some cross-cutting concerns outside business logic, like input parsing and validation, output serialization, and error handling. Application configuration is also an aspect that every developer needs to work out and manage to run business logic. Out of the box, middy provides [ssm](https://github.com/middyjs/middy/blob/master/docs/middlewares.md#ssm) middleware support fetch and cache parameters from the AWS SSM Parameter Store, it also supports assigning parameter values to environment variables.

Here is a sample code on how to use middy to fetch and cache parameter store

```yaml
const middy = require('middy');
const { ssm } = require('middy/middlewares');

export const handler = middy((event, context, cb) => {
  // You can access the parameter value inside function handler
  console.log(process.env.HARVESTAR_PCMSS_DB_CONNECTION);

  // Your business logic here
}).use(
  ssm({
    cache: true,
    names: {
      // Should have a prefix that include this micro service i.e. pcmss
      HARVESTAR_PCMSS_DB_CONNECTION: '/dev/harvestar/pcmss/db_connection'
    }
  })
);

```
There are some alternative open-sourced libraries out there:

*   [aws-parameter-cache](https://www.npmjs.com/package/aws-parameter-cache)

*   [ssm-cache-python](https://github.com/alexcasalboni/ssm-cache-python)

**Do you really trust the community package?**

I heard from some people, basically, they don’t want to assign variables into environment variables (i.e. variables you can access through the _process.env_ global object in Node.js runtime). If you do so, I have some advice below:

*   Instead of assigning variables to _environment variables_, you also have another option to assign the _context_ object of the AWS Lambda when using **middy/ssm** middleware.
*   To avoid sending your sensitive information such as data credentials, accessing to the _/tmp_ directory, or running a child process when executing your serverless functions. You can use [@puresec/function-shield](https://www.npmjs.com/package/@puresec/function-shield) library. We are also using it in our production environment.

> **TIPS – Avoid fetching parameters at build/deploy time, fetch it at runtime instead. If you do so, you have to redeploy each time the parameter changed.**

#### #6 – Using hardcoded environment variables for your local development

Do you need to run your function locally that fetches AWS SSM Parameter Store directly? The answer is it is optional, for your local environment, you might not need to use AWS SSM Parameter Store, you can use a ._env_ file to keep your local variables. Below are some approaches you can use to archive that idea, note you still need to test your function with your desired approach on the AWS environment:

*   Use the [env-cmd](https://www.npmjs.com/package/env-cmd) library to load, extract and assign to _process.env_ global object. By running the _**env-cmd serverless offline**_ command, you can access all variables defined in your .env file.
*   Using the [serverless-secrets-plugin](https://github.com/serverless/serverless-secrets-plugin) to define the environment variable in a secured manner, you can easier to share across the team and commit the encrypted file.

Using the same code as below with a modification, you can skip fetching parameter store from AWS and reduce your bill:

```yaml
const middy = require('middy');
const { ssm } = require('middy/middlewares');

const isLocalEnv = process.env.IS_OFFLINE || process.env.IS_LOCAL;

export const handler = middy((event, context, cb) => {
  // You can access the parameter value inside function handler
  console.log(process.env.HARVESTAR_PCMSS_DB_CONNECTION);

  // Your business logic here
}).use(
  ssm({
    cache: true,
    // By setting the paramsLoaded, you tell the middleware to
    // not fetch it from AWS SSM
    paramsLoaded: isLocalEnv,
    names: {
      // Should have a prefix that includes this microservice i.e. pcmss
      HARVESTAR_PCMSS_DB_CONNECTION: '/dev/harvestar/pcmss/db_connection'
    }
  })
);

```
#### #7 – Pay attention to services limits

Like other AWS services, AWS SSM Parameter Store also has some limits, such as the maximum number of parameters per account and region, max param value size, and max history. Understanding its limits helps us design and build applications with high reliability. For example, avoid storing large items in the SSM parameter because of size limits (4KB for the standard and 8KB for the advanced parameter). Refer to [AWS service limits documentation](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html) for more others.

#### Resources

*   [You should use SSM Parameter Store over Lambda env variables](https://hackernoon.com/you-should-use-ssm-parameter-store-over-lambda-env-variables-5197fc6ea45b)
*   [Sharing Secrets with AWS Lambda Using AWS Systems Manager Parameter Store](http://Sharing Secrets with AWS Lambda Using AWS Systems Manager Parameter Store)
*   [Managing Secrets Using AWS Systems Manager Parameter Store and IAM Roles](https://velotio.com/blog/2018/9/2/managing-secrets-using-aws-systems-manager-parameter-store)

#### Conclusion

By applying best practices, you can implement your applications more **reliable**, **secure**, **efficient, and cost-effective** software on the cloud.

I hope this post brings some ideas to you and saves you time. There are more interesting and useful articles, so find and read them to get more information. Feel free to let me know your recommendations or suggestions by adding comments below.

Thank you for reading!