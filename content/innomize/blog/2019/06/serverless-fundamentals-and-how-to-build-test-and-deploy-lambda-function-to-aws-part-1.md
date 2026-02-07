---
title: Serverless Fundamentals And How To Build, Test And Deploy Lambda Function To AWS – Part 1
type: article
status: imported
author: Hoang Le
source: innomize-cms
source_id: 4
slug: serverless-fundamentals-and-how-to-build-test-and-deploy-lambda-function-to-aws-part-1
url: "https://innomizetech.com/blog/serverless-fundamentals-and-how-to-build-test-and-deploy-lambda-function-to-aws-part-1"
created: 2023-06-20
published: 2019-06-25
locale: en
excerpt: Since November 2014 when AWS introduced AWS Lambda, the term “serverless” is becoming more popular, a lot of people are talking about serverless and how to apply it to your software development. This 
---

# Serverless Fundamentals And How To Build, Test And Deploy Lambda Function To AWS – Part 1

Since **November 2014** when AWS introduced AWS Lambda, the term “**serverless”** is becoming more popular, a lot of people are talking about serverless and how to apply it to your software development.

I’ve been working with AWS for a couple of years and successfully delivered a couple of serverless projects for our customers including backend services, complex web apps, microservice, data processing, and event streaming. I think **serverless** will be one of the trends in software development trends in 2019 in relation to microservice and automation.

This article will help you understand some fundamentals of **serverless** and the steps of how to build, test, and deploy your code automatically.

*   [Part 2 – Build, test, and deploy Lambda functions](/blog/serverless-fundamentals-and-how-to-build-test-and-deploy-lambda-function-to-aws-part-2)

## **What is serverless?**

> **Serverless computing** _is a_ [cloud-computing](https://en.wikipedia.org/wiki/Cloud-computing) [execution model](https://en.wikipedia.org/wiki/Execution_model) _in which the cloud provider runs the server, and dynamically manages the allocation of machine resources. Pricing is based on the actual amount of resources consumed by an application, rather than on pre-purchased units of capacity._[\[1\]](https://en.wikipedia.org/wiki/Serverless_computing#cite_note-techcrunch-lambda-1) _It can be a form of_ [utility computing](https://en.wikipedia.org/wiki/Utility_computing)_._

The suffix “**less”** doesn’t mean your code can run without a server. Serverless is a methodology for planning, building, and deploying software that maximizes value by minimizing operation tasks such as provisioning servers, OS updates, and software patches.

If you wanted to know more details about serverless, [this article](https://hackernoon.com/what-is-serverless-architecture-what-are-its-pros-and-cons-cc4b804022e9) will help you.

## **Serverless use cases**

So we know what is serverless, but do we know when we should use serverless? From my experience, there are some use cases in that we can use serverless:

**Web applications:** You can use **serverless** to build your static websites or even complex web apps. For example, you can use AWS S3 to host your static websites that will connect to your backend services running on API Gateway that integrate with your Lambda function.

**Backends:** run you can your backend services (machine-to-machine service, SAP APIs, or for your mobile services). With AWS you can run the Lambda function using API Gateway, or integrate with your existing Application Load Balancer.

**Event / Data processing**

*   **Event streaming:** Serverless functions can be triggered by the public/subscribe topics, from the logs such as CloudWatch events. It gives you elastic, scalable event pipelines without the maintenance of complicated clusters.

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689407724/production/aws_simple_diagram_1aba21203b.png) 

[Event Handling in AWS using SNS, SQS, and Lambda](https://dev.to/frosnerd/event-handling-in-aws-using-sns-sqs-and-lambda-2ng)

*   **Cron jobs:** You can run custom scheduled jobs without having to run and maintain a server.

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689407758/production/sls_cron_job_pattern_fa3c5d768f.png) 

CloudWatch Event Rules  
  
*   **Image and video manipulation:** You can use serverless to do things like dynamically resizing images or changing the video encoding.  
    MapReduce, Batch processes, workflow (i.e. StepFunction), ETL/ELT process.

**Chatbots / IoT:** You can use the Lambda functions to power chatbot logic or voice-enabled app.

**DevOps / IT automation**

*   **Extending AWS services:** You can use the Lambda function to implement your custom CloudFormation resource, Cognito triggers, etc.
*   **Infrastructure management (CI/CD)**: you can use serverless to integrate and automate the CI/CD pipelines, it allows you to ship your code incrementally, bug-free, and increase your productivity. For example, we can use the Lambda function to implement your approval ChatOps process, Lambda function is triggered when code is pushed to source control (directly or via PRs), it sends an approval request to Slack, then send back an approval response from Slack channel back to Lambda, and then kick off/reject deployment process.

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689408439/production/sls_chat_bot_pattern_01a406012a.webp) 

[Use Slack ChatOps to Deploy Your Code — How to Integrate Your Pipeline in AWS CodePipeline with Your Slack Channel](https://aws.amazon.com/blogs/devops/use-slack-chatops-to-deploy-your-code-how-to-integrate-your-pipeline-in-aws-codepipeline-with-your-slack-channel/)

The following articles provide detailed information that helps easy to understand each scenario and steps on how to implement it:

*   [4 Use Cases of Serverless Architecture](https://dzone.com/articles/4-use-cases-of-serverless-architecture)
*   [CloudWatch events](https://cloudaffaire.com/cloudwatch-events/)
*   [Resize Images on the Fly with Amazon S3, AWS Lambda, and Amazon API Gateway](https://aws.amazon.com/blogs/compute/resize-images-on-the-fly-with-amazon-s3-aws-lambda-and-amazon-api-gateway/)
*   [Activity Tracking with a Voice-Enabled Bot on AWS](https://aws.amazon.com/blogs/machine-learning/activity-tracking-with-a-voice-enabled-bot-on-aws/)

In the next post, I will describe how to build, run and deploy your Serverless functions using popular frameworks.

Thank you for reading my article. You can get in touch with me through my Twitter handle [@hoangleitvn](https://twitter.com/hoangleitvn)