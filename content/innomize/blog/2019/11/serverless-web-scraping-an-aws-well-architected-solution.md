---
title: Long-running Serverless Web Scraping – An AWS Well-architected Solution
type: article
status: imported
author: Hoang Le
source: innomize-cms
source_id: 18
slug: serverless-web-scraping-an-aws-well-architected-solution
url: "https://innomizetech.com/blog/serverless-web-scraping-an-aws-well-architected-solution"
created: 2023-06-20
published: 2019-11-18
locale: en
excerpt: Nowadays, there are many tools that can help you implement the web scraping solution. But crawling websites with a large dataset and complex sitemap take longer and require servers to run the scraping
---

# Long-running Serverless Web Scraping – An AWS Well-architected Solution

#### What does this AWS Solution do?

Many people want to crawl data from public websites for many purposes. Nowadays, there are many tools that can help you implement the web scraping solution. However, crawling websites with a large dataset and complex sitemap takes longer and requires servers to run the scraping process.

With web scraping, you won’t need the workload 24/7, and data storage is not a critical aspect. Running web scraping on a dedicated server/virtual machine requires your administrator to manage and monitor servers. Also, when running web scraping, you also need to deal with and avoid blocking your process from the site in many ways such as dynamic IP address allocation each time the process runs. This process can be difficult to manage cause time delays, and increase compute costs.

To help you archive and overcome those challenges, decrease the cost of web scraping. We provide the **Long-running Serverless Web Scraping** solution that provides an **open-source** web scraping solution with Puppeteer to enable cost-effective solutions on the AWS Cloud. This solution also provides automation deployment and configures a serverless architecture that is optimized for web scrapping and uses the AWS CDK framework to deploy. Running on a serverless environment also reduces and provides **operational excellence** objectives that automate your deployment process as code and other pillars of the **AWS Well-Architected** framework.

#### AWS solution overview

The below diagram presents the **Long-running** **Serverless Web Scraping** architecture you can deploy in minutes using the **AWS CDK** framework.

 ![Serverless Web Scraping](https://res.cloudinary.com/innomizetech/image/upload/v1687234941/production/puppeteer_on_aws_fargate_47e27760bd.png) 

**AWS CloudWatch** triggers and starts **ECS Fargate Task(s)**, the number of tasks depends on the total of web scraping specification. You can start hundreds of tasks parallelly at scale. The ECS task runs a Docker container which starts a Puppeteer process in headless mode and starts scraping data from the websites. The solution generates a S3 bucket in order to archive web scraping output. Archive to the database is optional and we won’t address details on how to do that in this solution.

Additionally, using AWS CDK also deploys and configures an AWS ECS Fargate cluster, ECR repository builds and pushes the docker image to the ECR repository.

#### Features

*   Automatically build a serverless architecture that is optimized for serverless web scraping process on the AWS Cloud.
*   Web scraping using the Puppeteer
*   Automatically archive web scrapping output to an S3 bucket or database such as MySQL.

#### Cost

When running the AWS services on your AWS account, you are responsible for the cost of this solution. As the default of our open-source code:

*   Run 1000 ECS tasks with 1GB of RAM and 1 vCPU.
*   The duration of each task is around 3 minutes (average).
*   1GB S3 storage.
*   1GB data transfer, with the default setting in the US East 2 (Ohio) Region.

The estimated cost for running this solution is as shown in the table below:

AWS Service

Total Cost

Amazon ECS Fargate

$2.25

If you choose to deploy to your VP and run under a Private subnet. You are responsible for the incurred variable charges from VPC service. For full details, see the pricing webpage for each AWS service you will be using in this solution.

#### Implement Consideration

The Serverless Web Scraping solution provides an important parameter: **useDefaultVpc** that allows you to determine whether you want to run ECS tasks under your default VPC in the public subnet, or you want to create a new VPC, select subnet type (private or public) to run your ECS task. Be careful before deploying and running tasks to avoid adding your AWS bill such as NAT instance hourly charge.

This solution is designed to run web scraping in a serverless environment to reduce infrastructure and operation costs for a **long-running** web scraping process, a long-running process means you cannot break into multiple shorter processes. If your web scraping process can take shorter than **15 minutes**, you can use another approach which is to run your web scraping on the **AWS Lambda**.

#### Template

This solution uses the AWS CDK framework to automate the deployment of the Serverless Web Scraping solution on the AWS Cloud. It includes an AWS CDK construct, which you can clone and customize before deployment:

*   [puppeteer-crawler-fargate-stack.ts](https://github.com/innomizetech/ecs-puppeteer-crawler-example/blob/master/infra/lib/puppeteer-crawler-fargate-stack.ts) use this construct to deploy the Serverless Web Scraping process and all associated components. The default construct template deploys AWS ECS Cluster, Task Definition, AWS ECR Repository, AWS VPC, Amazon S3 Bucket, and AWS CloudWatch EventRule and CloudWatch Log Group, you also can customize based on your specific requirements.

#### Deployment

Follow the step-by-step guide in this section to configure and deploy the Serverless Web Scraping into your AWS account.

**Time to deploy:** 10 minutes

**Prerequisites**

Before continuing, you need an AWS account. If you do not already have an AWS account, you can utilize their [free-tier accounts](https://portal.aws.amazon.com/billing/signup).

*   Prepare your [AWS credentials](https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/setup-credentials.html) to interest with AWS API via CLI.
*   Install [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) and [Docker](https://docs.docker.com/v17.12/install/) on your machine.

#### The Steps

See the [implementation guide](https://blog.innomizetech.com/2019/11/01/building-serverless-web-crawler-with-puppeteer-on-aws-fargate/) for detailed steps

#### Security

According to the [AWS Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/), security responsibilities are shared between you and AWS. In the architect diagram, if you use it to connect to your database for archiving output data, we suggest using the AWS Parameter Store to configure and retrieve your credentials at runtime.

#### Resources

**AWS services**: this solution is built based on the following AWS services:

*   [AWS Fargate](https://aws.amazon.com/fargate/)
*   [AWS Elastic Container Service](https://aws.amazon.com/ecs/)
*   [AWS VPC](https://aws.amazon.com/vpc/)
*   [AWS CloudFormation](https://aws.amazon.com/cloudformation/)
*   [Amazon S3](https://aws.amazon.com/s3/)
*   [AWS Identity and Access Management](https://aws.amazon.com/iam/)

**Web Scraping**

*   [Puppeteer](https://developers.google.com/web/tools/puppeteer)

#### Source Code

You can visit our [Github repository](https://github.com/innomizetech/ecs-puppeteer-crawler-example) to clone or download the project setup, and scripts. You are free to share with others and customize based on your needs.

#### Q&A

**Can I deploy the Serverless Web Scraping in any AWS Region?**

Yes, you can deploy this solution in any AWS region that supports AWS Fargate.

**Can I run the AWS ECS Fargate task under my existing VPC?**

Yes, you can run your AWS ECS task within any existing VPC on your AWS accounts, you can also use the default VPC when you create a new one.

**Can I run the AWS ECS Fargate task under a public subnet?**

Yes, by default, to avoid adding cost, we recommend you run ECS tasks under a public subnet for the workload that doesn’t contain any sensitive information. If your workload contains sensitive information, you should run under a private subnet.

**Can I change the web scraping tool used in this solution to another one?**

Yes, you can run any web scraping tool that supports headless mode and can run on a docker container environment.