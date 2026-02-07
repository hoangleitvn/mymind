---
title: Top Serverless Plugins We Are Using
type: article
status: imported
author: Hoang Le
source: innomize-cms
source_id: 11
slug: top-serverless-plugins-we-are-using
url: "https://innomizetech.com/blog/top-serverless-plugins-we-are-using"
created: 2023-06-20
published: 2019-11-06
locale: en
excerpt: A list of popular Serverless plugins we have been using for a couple of years and built a lot of serverless applications.
---

# Top Serverless Plugins We Are Using

We are using the  [Serverless](https://serverless.com/) framework for a couple of years and building a lot of applications. So I wanted to summarize and provide a brief description of some plugins that our team is using every day. I am not sure it is good for you, if you have any recommendations, just let us know.

If you haven’t yet checked out this [list of Serverless Framework plugins](https://github.com/serverless/plugins), you’re missing out. Or you can read this post for a short version.

> Don’t Reinvent The Wheel

Don’t build it again if someone else already built it and open-sourced it for you. It’s free to use and the community support revolves around building, fixing, and maintenance.

[serverless-offline](https://www.npmjs.com/package/serverless-offline)

I believe this is the most popular plugin, almost [Serverless](https://serverless.com/) developers have used it at least once. This Serverless plugin emulates the AWS Lambda function and API Gateway on your local machine to speed up your development cycles.

Along with using [serverless-offline](https://www.npmjs.com/package/serverless-offline), our team also uses some plugins that support emulating cloud services on our local machine such as:

*   [serverless-dynamodb-local](https://github.com/99xt/serverless-dynamodb-local)
*   [serverless-step-functions-offline](https://www.npmjs.com/package/serverless-step-functions-offline)
*   [serverless-s3-local](https://github.com/ar90n/serverless-s3-local)

[serverless-webpack](https://github.com/serverless-heaven/serverless-webpack) and [serverless-plugin-typescript](https://github.com/prisma-labs/serverless-plugin-typescript)

It is easy to get started with zero-config by using [serverless-plugin-typescript](https://github.com/prisma-labs/serverless-plugin-typescript) plugin for small projects. But for large-scale projects, we are using the [serverless-webpack](https://github.com/serverless-heaven/serverless-webpack) plugin that allows us to define our [webpack](https://webpack.js.org/) configuration for bundling TypeScript code.

> If you are using _paths_ configuration in the tsconfig.json file, then you might need to use [tsconfig-paths-webpack-plugin](https://www.npmjs.com/package/tsconfig-paths-webpack-plugin) plugin to automatically load modules based on the location specified in the _paths_ config

[serverless-iam-roles-per-function](https://www.npmjs.com/package/serverless-iam-roles-per-function)

This plugin allows us to define the IAM roles per function instead of using a single IAM role for all Lambda functions. [Yan Cui](https://twitter.com/theburningmonk) has listed this plugin as 2nd serverless best practice on [this post](https://www.datree.io/resources/serverless-best-practices)

[serverless-domain-manager](https://github.com/amplify-education/serverless-domain-manager)

We use this plugin to create custom domains for API Gateway.

[serverless-plugin-split-stacks](https://github.com/dougmoscrop/serverless-plugin-split-stacks)

To avoid reaching the [200 resources limit our CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html) error, we use this plugin to split the main stack into multiple stacks.

[serverless-plugin-warmup](https://www.npmjs.com/package/serverless-plugin-warmup)

How to reduce cost starts for Lambda functions? The question that a lot of developers are asking and trying to reduce cost starts. There are more solutions but one of them is using this plugin. It solved the cost starts by using a scheduled task that will invoke selected functions in a configurable interval (default is 5 mins, but we almost use 45 mins as the average interval that the Lambda function keep-alive)

[serverless-plugin-aws-alerts](https://github.com/ACloudGuru/serverless-plugin-aws-alerts)

We use this plugin to define CloudWatch alarms for Lambda functions by using default definitions or adding log metric filters to log groups.

[serverless-secrets-plugin](https://github.com/serverless/serverless-secrets-plugin)

Store some environment variables that we can commit to source control and share across teams. But for storing sensitive information, we use [@middy/ssm](https://www.npmjs.com/package/@middy/ssm) middleware to fetch SSM parameters.

[serverless-vpc-plugin](https://github.com/smoketurner/)

If you want to run your Lambda functions under your private VPC and want to define a new VPC when deploying serverless, then use this plugin. You also can use [serverless-vpc-discovery](https://www.npmjs.com/package/serverless-vpc-discovery) plugin to retrieve an existing VPC from your AWS account.

[serverless-mysql](https://github.com/jeremydaly/serverless-mysql)

Use this plugin to manage MYSQL connections at scale.

[serverless-apigateway-service-proxy](https://github.com/horike37/serverless-apigateway-service-proxy)

If you want to expose API for SNS, SQS, S3, and Kinesis Streams, then you can use this plugin without Lambda, also AWS resources will be created by that plugin.

And a few more as below:

[serverless-plugin-canary-deployments](https://github.com/davidgf/serverless-plugin-canary-deployments) this plugin supports Blue/green deployment for your Lambda.  
[serverless-pseudo-parameters](https://www.npmjs.com/package/serverless-pseudo-parameters) this plugin allows using [CloudFormation Pseudo Parameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/pseudo-parameter-reference.html) in your `serverless.yml`  
[serverless-s3-deploy](https://www.npmjs.com/package/serverless-s3-deploy) use this plugin to sync your directory to a S3 bucket, we have used it for deploying our static website.  
[serverless-api-stage](https://www.npmjs.com/package/serverless-api-stage)  support defining stage variables, logging configuration (for AWS provider)  
[serverless-aws-alias](https://github.com/serverless-heaven/serverless-aws-alias) this plugin enables the use of AWS aliases on Lambda functions, for an example you can use this plugin to deploy multiple environments for different VCS branches.  
[serverless-s3-remover](https://github.com/sinofseven/serverless-s3-remover) you cannot delete an S3 bucket with data, right? This plugin will solve that problem. It will prompt you to remove its data before removing the Cloud Formation stack.  
[serverless-ses-template](https://github.com/haftahave/serverless-ses-template) if you are using SES Template, right now AWS doesn’t provide UI to upload or edit templates on the Console Management, you can only use API to upload template. This plugin will do that for you, it automatically creates, update, and removes AWS SES Templates using a configuration and keeps your AWS SES Templates synced with your configuration file.