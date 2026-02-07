---
title: "Exploring Serverless Billing Management: Architecture and Cost"
type: article
status: imported
author: Hoang Le
source: innomize-cms
source_id: 46
slug: exploring-serverless-billing-management-architecture-and-cost
url: "https://innomizetech.com/blog/exploring-serverless-billing-management-architecture-and-cost"
created: 2023-11-07
published: 2023-11-07
locale: en
excerpt: Discover the Serverless Billing Management System, INNOMIZE's expertise in cloud solutions, and embark on your digital transformation journey today!
---

# Exploring Serverless Billing Management: Architecture and Cost

Over the past five years, as we've developed and managed a serverless system, we've gained valuable insights into design considerations and cost optimization. In this article, we aim to share our expertise, offering businesses a blueprint for addressing similar challenges efficiently. Our primary focus is on cost reduction while ensuring the key aspects of **high availability, scalability, security, extensibility, and ease of development**. It's important to note that while this architecture can offer significant benefits, it may not be a universal solution. It's vital to thoroughly evaluate and adapt it to your specific requirements.

If you're new to the concept of [Serverless Architecture](https://innomizetech.com/blog/demystifying-serverless-architecture-the-future-of-cloud-computing), we recommend familiarizing yourself with it before embarking on this architectural journey.

## Overview of the System

We were approached by a US-based client whose Billing Department grappled with the task of generating, managing, and collaborating with their legal team to send invoices to clients. The existing process involved producing **paper invoices**, manually sending them to attorneys for review, and often **taking more than a month** to complete a monthly billing cycle. With approximately **2,000 invoices** to review and process each month, the manual nature of this process was not only **time-consuming** but also **resource-intensive**.

 ![Human with papers](https://res.cloudinary.com/innomizetech/image/upload/v1699331993/production/human_with_papers_cover_9280134003.jpg) 

Additionally, the billing team had the arduous task of uploading **LEDES** files to over **20 carrier sites**. Each upload required **repetitive manual steps**, such as logging in to the carrier site and verifying the results either on the site or via email. 

> Imagine how boring it is for users that they have to upload around 2000 files to various sites every month, how much effort is consumed?

Calculating this is straightforward. Let's assume that it takes a user roughly **3 minutes** to log in, upload a file, check the results, and update the internal system for each file. So, with **2000 files**, the total time required amounts to approximately **6,000 minutes** (equivalent to 100 hours). In continuous operation, this task could span an entire month for a single person to complete. However, in reality, it may necessitate the effort of at least **two full-time individuals** over the course of a month to accomplish this job. For US workers, how much does it cost for labor expenses?

To address these challenges, we analyzed the client's requirements and developed a solution that streamlined the invoicing process. This solution allowed users to effortlessly view, track, and review assigned invoices while automating various steps in the process. This **digital transformation** not only reduced **manual efforts** but also significantly **improved productivity**.

## System Architecture

After discussing the client's specific needs, which included a relatively small user base (around 150 users including Billing users and Attorneys) and the absence of in-house IT resources for system management, we opted for a **serverless architecture**. This choice allowed the client to focus on the features they needed while **minimizing operational overhead**.

 ![Serverless Billing Management System](https://res.cloudinary.com/innomizetech/image/upload/v1699340144/production/Serverless_Billing_Management_Architecture_c056e68a30.jpg) 
*Serverless Architecture for Billing Management System*

The Serverless Billing Management System comprises the following key components:

### Serverless Compute Services with Lambda, API Gateway

The backend system uses [AWS Lambda](https://aws.amazon.com/lambda/) integrated with [API Gateway REST APIs](https://aws.amazon.com/api-gateway/) to handle HTTP requests from clients, including both a web-based application and a mobile application.

We leveraged the [Serverless Framework](https://www.serverless.com/) for building, testing, and deploying Lambda functions to AWS. The stack included Node.js, TypeScript, [serverless-webpack](https://www.serverless.com/plugins/serverless-webpack), and [serverless-offline](https://www.serverless.com/plugins/serverless-offline) plugins, which allowed us to simulate HTTP APIs locally and streamline the deployment of TypeScript code.

### Datastore with Amazon RDS MySQL and S3

While we initially considered [Amazon DynamoDB](https://aws.amazon.com/dynamodb/) for our database needs, we ultimately selected [Amazon RDS MySQL](https://aws.amazon.com/rds/mysql/) due to our specific schema and query requirements. We managed database changes through [Liquibase](https://www.liquibase.org/), which tracked database schema and data changes via changesets. Our data access layer was implemented using [sequelize-typescript](https://www.npmjs.com/package/sequelize-typescript), and for more complex queries and reporting, we used [serverless-mysql](https://www.npmjs.com/package/serverless-mysql) and [knex](https://knexjs.org/) as a query builder.

[S3](https://aws.amazon.com/s3/) played a dual role, serving as the platform for our Angular-based billing portal and facilitating data replication from on-premises to AWS. The integration involved Node.js, S3, and Lambda to automate the process of capturing changes from a legacy system and synchronizing them with our database.

### Authentication with Amazon Cognito

Security being a paramount concern, we selected [Amazon Cognito](https://aws.amazon.com/cognito/) as the user directory. It integrated seamlessly with other AWS services and provided a secure mechanism for protecting the backend services running on Lambda. We initiated user migration from ADFS using Cognito triggers and then disabled ADFS once all users had transitioned.

### Event Sources with S3 and HTTPS Requests from API Gateway

Our primary event sources were triggered by Lambda from API Gateway and data replication. APIs were secured using TLS/SSL and Cognito Authorizer.

### Billing Portal with Angular, S3, and CloudFront

We used Angular to develop a Single Page Application (SPA) for user interfaces, enabling smooth collaboration and review of invoices. Static assets and the website were deployed to an S3 bucket with [CloudFront](https://aws.amazon.com/cloudfront/) distribution.

### Mobile Application with React Native

A mobile application was developed to enable users to view and book timesheets against Matter records. This app was created using [React Native](https://reactnative.dev/) and seamlessly replicated all time entries back to the Case Management System running on-premise servers.

### Headless Automation for LEDES Uploads with CDK, AWS Fargate, Selenium, and Protractor

To automate the time-consuming process of manually uploading invoices to carrier sites, we employed headless automation with technologies such as Selenium and Protractor. Given the potentially lengthy execution time, [AWS Fargate (ECS Fargate)](https://aws.amazon.com/fargate/) was used to handle the automation. We used [AWS CDK](https://aws.amazon.com/cdk/) to build and deploy ECS Fargate tasks and services, which were triggered by Lambda functions when invoices were ready for upload.

### Monitoring and Logging with AWS CloudWatch, Sentry

We initially relied on third-party monitoring but later transitioned to [CloudWatch](https://aws.amazon.com/cloudwatch/) for log and alert management. [Sentry](https://sentry.io/) is used for error reporting and integrated with Lambda functions. Additionally, Slack was connected to Sentry to receive alerts on new errors.

[SNS](https://aws.amazon.com/sns/) and [SES](https://aws.amazon.com/ses/) were used for alerting and email notifications.

### IaC with Serverless Framework and AWS CDK

The development process was facilitated by the [Serverless Framework](https://www.serverless.com/) for building, testing, and deploying Lambda functions. In the absence of native support for certain functionalities, we utilized the following plugins:

- [serverless-secrets-plugin](https://github.com/trek10inc/serverless-secrets-plugin): For encrypting and decrypting secret files, allowing secure storage in source control.
- [serverless-split-stacks](https://github.com/jeremydaly/serverless-plugin-split-stacks): To mitigate CloudFormation stack resource limits by splitting resources per Lambda function.
- [serverless-domain-manager](https://github.com/amplify-education/serverless-domain-manager): For creating custom domains for API Gateway.
- [serverless-plugin-warmup](https://github.com/FidelLimited/serverless-plugin-warmup): A custom plugin to warm up Lambda functions with CloudWatch schedules.
- [serverless-s3-sync](https://github.com/k1LoW/serverless-s3-sync): Used to deploy the Angular application to an S3 bucket.

[Amazon Web Services Cloud Development Kit (AWS CDK)](https://aws.amazon.com/cdk/) was instrumental in building, testing, and deploying the automated processes with ECS Fargate. Its abstraction design allowed easy creation of a headless stack and integration with CI/CD pipelines. Jenkins was used for CI/CD, with the ability to manage multiple environments and deploy changes to AWS environments in minutes. Checkout the [Long-running Serverless Web Scraping – An AWS Well-architected Solution](https://innomizetech.com/blog/serverless-web-scraping-an-aws-well-architected-solution) for more details on how you can build, test and deploy automated headless process with CDK, ECS Fargate.

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1699331755/production/Jenkins_CI_CD_Server_ee69ab8128.png) 
*Jenkins CI/CD Pipeline*

For designing and building IaC, we recommend separating the core infrastructure components such as networking, databases, and Cognito user pools into separate services with their CI/CD pipelines. Depending on your tech team's preference, either [AWS CDK](https://aws.amazon.com/cdk/) or [Terraform](https://www.terraform.io/) can be used to provision and configure the infrastructure. For service components, co-locating them with the service repository streamlines build, test, and deployment processes. In the case of this solution, a single repository housed around 25 functions, each providing CRUD APIs for relevant entities/tables, and some functions for reporting, data replication, and Cognito user pool triggers. For systems with fewer services, consider using [NX DevTool](https://nx.dev/) to build, test, and deploy Serverless services in a [monorepo](https://monorepo.tools/). You can also employ [vendia/serverless-express](https://github.com/vendia/serverless-express), [Middy](https://github.com/middyjs/middy), and [Nest.js](https://nestjs.com/) for deploying scalable REST APIs running on Lambda.

> You might observe a significant aspect in our setup: the utilization of a Site-to-Site VPN. Initially, we employed this method to establish connectivity between AWS and our on-premise infrastructure. It served the purpose of creating a linked server for our MS SQL Database to communicate with the RDS MySQL instance on AWS. However, as time progressed, we encountered operational challenges that demanded a more stable connection. In response, we decided to revamp our approach for the data replication component, which ran on our on-premise servers. Instead of relying on VPN, we pivoted towards exposing REST APIs. To enhance security, we implemented IP address whitelisting and introduced basic authentication protocols.

## Cost Breakdown

Now, let's delve into the cost breakdown of the architecture. Here's a snapshot of the AWS bills from the last six months:

 ![AWS Billing](https://res.cloudinary.com/innomizetech/image/upload/v1699330541/production/AWS_Bills_Billing_System_a49a27b782.png) 

### Database Costs

The most substantial portion of the expenditure is attributed to the database. Our choice of an [AWS RDS MySQL](https://aws.amazon.com/rds/mysql/) database in a fully managed capacity amounted to approximately $184 per month over the last six months. Notably, we opted not to utilize [Multi-AZs](https://aws.amazon.com/rds/features/multi-az/). This decision was grounded in the understanding that our system did not necessitate a fully highly available configuration, aligning with our goal to optimize costs efficiently.

### Lambda Costs

Lambda services, constituting the backbone for handling HTTP requests and powering custom integration services for data replication, emerged as the second most significant cost factor. The monthly expenditure hovered around $57. The uniqueness of Lambda lies in its adaptability to fluctuating workloads. While the volume of HTTP requests can be predicted, Lambda execution for data replication is less predictable. In the recent bills, the total amount of Lambda function was reduced a lot (around $20 per month), mostly because the amount of data that needs to be replicated is reduced. Lambda's scalability feature allowed us to dynamically respond to the varying data replication needs without the overhead of infrastructure management.

### ECS (Fargate) Costs

ECS (Elastic Container Service) claimed the third spot in the list of expenses, accounting for around $29 per month. ECS served as a vital component for our headless automation processes. The system's scalability directly corresponded to the number of invoices requiring upload each month. ECS Fargate afforded us the flexibility to efficiently run these automation tasks, eliminating the need for the laborious setup and management of virtual machines, which would have been the case with a traditional architectural approach.

### API Gateway Costs

Our system efficiently managed around 800,000 monthly requests. API Gateway's pricing structure is tiered, with the first 333 million requests billed at a rate of $3.5 per million, resulting in our average cost for API Gateway being $3.2 per month.

### Other Services Costs

Beyond these major cost components, several other services contributed to the overall monthly expense. These included S3, KMS (Key Management Service), CloudFront, SES (Simple Email Service), and SNS (Simple Notification Service). Their collective costs amounted to roughly $5 per month.

### Total Monthly Cost

When considering the combined expenses of all these components, the total monthly cost of operating the entire system averaged around $280. This cost-effective solution provided scalability and security while significantly reducing the operational burden for the client. This architecture allowed the client to focus on feature development, thus streamlining their operations and cutting down on operational expenses. 

The cost breakdown presented focuses on the **production environment**. If you're curious about expenses in other settings like **Staging** or **Development**, here's the good news – in **non-production environments**, additional costs are minimal, and you can rest assured that these expenses won't be a significant concern. These environments typically handle low volumes of requests and user interactions. Furthermore, the database is shared among these instances for specific purposes. This showcases the efficiency of serverless architecture in meeting non-production needs while still adhering to the system's non-functional requirements. Now, the question that arises is: How can you achieve similar results with a traditional architecture while ensuring all non-functional prerequisites are met?

### Optimizing Costs

You might see that based on the billing that we have captured here, we can do some actions to save costs, but, this is not the high priority that our team can focus on right now to save a few dollars. We still have a lot of feature development that we should focus on which increases ROI for the client. However, there are some tips or best practices we have applied according to our article [Mastering AWS Cost Optimization with Best Practices and Hidden Costs](https://innomizetech.com/blog/mastering-aws-cost-optimization-with-best-practices-and-hidden-costs) as below:

- **VPC S3 Gateway Endpoint**: For processing files on Lambda from a private subnet, establishing a VPC S3 gateway endpoint is highly recommended to mitigate potential cost overheads.
- **Lifecycle Policies for S3**: Implementing lifecycle policies to automatically delete processed files from S3 after a specified time period is a cost-effective measure.
- **Right Retention for CloudWatch Logs**: Configuring appropriate retention settings for CloudWatch log groups ensures efficient use of resources.
- **Lambda Power Tuning**: Leveraging Lambda Power Tuning assists in identifying the optimal resource allocation (CPU and Memory) for Lambda functions, thus achieving cost savings while maintaining performance.

## Summary

In conclusion, AWS Serverless services have proven to be a game-changer, especially for businesses seeking [custom software solutions](https://innomizetech.com/services/custom-software-development). By combining popular serverless services like **Lambda, API Gateway, and DynamoDB**, businesses can design, build, and deploy well-architected solutions that deliver a substantial [return on investment (ROI)](https://www.forbes.com/advisor/investing/roi-return-on-investment/).

**Cost optimization, designing serverless application architectures, DevOps, and digital transformation** are all key elements of this success story. This architecture not only streamlines complex processes but also reduces operational burdens, allowing businesses to focus on delivering core features while leaving the infrastructure management to the cloud provider. It's worth noting that while [serverless architecture](https://innomizetech.com/blog/demystifying-serverless-architecture-the-future-of-cloud-computing) offers numerous advantages, it may involve vendor lock-in and reduced control over underlying infrastructure, aspects that organizations should carefully consider.

At **INNOMIZE**, our proficiency in **cloud computing**, **digital transformation**, and **serverless development services** has enabled us to craft a solution that not only streamlines billing processes but also paves the way for future scalability and innovation. Our track record of over five years of seamless operation stands as a testament to our commitment to excellence. We understand that every business is unique, and our tailored solutions reflect this understanding.

If you're grappling with similar challenges or seeking to embark on a digital transformation journey, INNOMIZE is here to help. Our team of experts is ready to collaborate with you, analyze your specific needs, and deliver solutions that not only solve your problems but also position your business for a dynamic, cloud-native future.

### Ready to Embrace Digital Transformation? Contact INNOMIZE Today!

Your journey toward a more agile, cost-effective, and innovative future begins here. Don't hesitate to [get in touch](https://innomizetech.com/contact-us) with INNOMIZE and unlock the power of cloud computing and serverless solutions.