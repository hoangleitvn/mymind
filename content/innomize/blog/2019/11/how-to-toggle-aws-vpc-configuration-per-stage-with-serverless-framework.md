---
title: How To Toggle AWS VPC Configuration Per Stage With Serverless Framework
type: article
status: imported
author: Hoang Le
source: innomize-cms
source_id: 10
slug: how-to-toggle-aws-vpc-configuration-per-stage-with-serverless-framework
url: "https://innomizetech.com/blog/how-to-toggle-aws-vpc-configuration-per-stage-with-serverless-framework"
created: 2023-06-20
published: 2019-11-05
locale: en
excerpt: This article helps you how to define your Serverless configuration to manage and toggle VPC configuration per stage or environment.
---

# How To Toggle AWS VPC Configuration Per Stage With Serverless Framework

[This guy has asked the serverless forum](https://forum.serverless.com/t/exclude-vpc-config-for-different-enviornments/9756) for a solution to implement it. That is why I wanted to write this post to describe how to toggle **VPC** configuration per stage. I hope it can help you and save time 🙂

If you are working on the [Serverless](https://serverless.com/) framework to build your application on AWS. You possibly wanted to run your Lambda functions under your private Vpc to protect your functions and hide them from the world. But sometimes, you might want to run your function without **VPC** such as for non-production environments.

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689261370/production/toggle_vpc_serverless_5a1c670abc.webp) 

Vpc on AWS Lambda

Basically, we can disable **Vpc** configuration for the Lambda function by either:

*   Omit the **vpc** property in the **provider** configuration.
*   Or you can set both **securityGroupIds** and **subnetIds** as an empty array.

Based on the above logic, we can define a property in the **custom** prop as below:

```yaml
custom:
  vpc:
    dev:
      # If you don't want to run Lambda under a Vpc, then just give it an empty array
      securityGroupIds: []
      subnetIds: []

    # You can add more stages here

    prod:
      securityGroupIds:
        Fn::Split:
          - ','
          - ${file(secrets.${self:provider.stage}.yml):VPC_SECURITY_GROUP_IDS}
      subnetIds:
        Fn::Split:
          - ','
          - ${file(secrets.${self:provider.stage}.yml):VPC_SUBNET_IDS}
```

Then you can update the provider config like this:

```yaml
provider:
  name: aws
  ...
  vpc: ${self:custom.vpc.${self:provider.stage}}
```

With the above configurations, deploying to the **dev** stage will not add your lambda functions to a Vpc, but deploying to the **prod** stage will add your lambda functions to your desired Vpc.

You can refer to some plugins I added in the _serverless.yml_ file, it can be used to create your Vpc automatically or discover from the AWS account.

*   [serverless-vpc-plugin](https://www.npmjs.com/package/serverless-vpc-plugin)
*   [serverless-vpc-discovery](https://www.npmjs.com/package/serverless-vpc-discovery)

If you want to have a try, you can check out [our repo](https://github.com/hoang-innomizetech/serverless-toggle-vpc-example) on GitHub.

Should you run into issues while practicing the steps outlined in this article, I encourage you to reach out to me. You can get in touch with me through my Twitter handle [@hoangleitvn](https://twitter.com/hoangleitvn)