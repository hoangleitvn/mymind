---
title: How To Create, Debug And Deploy AWS Serverless Application With Java Using Intellij Idea
type: article
status: imported
author: Hiep Dinh
source: innomize-cms
source_id: 16
slug: how-to-create-debug-and-deploy-aws-serverless-application-with-java-using-intellij-idea
url: "https://innomizetech.com/blog/how-to-create-debug-and-deploy-aws-serverless-application-with-java-using-intellij-idea"
created: 2023-06-20
published: 2019-11-13
locale: en
excerpt: This article will guide step by step from creating and debugging to deploying AWS Serverless Application. Requirements Before you can use IntelliJ IDEA to develop, test, analyze, debug, and deploy AWS
---

# How To Create, Debug And Deploy AWS Serverless Application With Java Using Intellij Idea

#### Introduction

IntelliJ IDEA is the most popular IDE for Java. So it’s useful if we can develop, debug, and deploy AWS Serverless Application with IntelliJ IDEA.  
This article will guide step by step from creating and debugging to deploying AWS Serverless Application.

#### Requirements

Before you can use IntelliJ IDEA to develop, test, analyze, debug, and deploy AWS Serverless Application, you must install the following tools:

*   [AWS Command Line Interface (AWS CLI)](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
*   [Docker](https://docs.docker.com/install/)
*   [AWS Serverless Application Model Command Line Interface (AWS SAM CLI)](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
*   [IntelliJ IDEA (2019.2)](https://www.jetbrains.com/idea/)
*   Plugin AWS Toolkit for IntelliJ IDEA

#### Creating an AWS Serverless Application

This is a step-by-step guide to creating a new AWS Serverless Application

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689089405/production/create_nx_workspace_97816dc211.webp) 

You can select which build tool for the project: Maven or Gradle

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689089446/production/configure_build_tool_67b0c725b5.webp) 

Project structure after creating successfully

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689089484/production/serverless_app_structure_294fa5485d.png) 

#### Debugging the Local Version of an AWS Lambda Function

You can debug by doing one of the following:  
1\. In the code file that contains the function handler choose the Lambda icon in the gutter next to the function handler. Choose Debug ‘\[Local\]’:

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689089604/production/local_debug_fe0f6e4e78.webp) 

2\. Open the project’s template.yaml file. Choose the Run icon in the gutter next to the function’s resource definition, and then choose Debug ‘\[Local\]’.

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689089604/production/local_debug_template_5593764cb7.webp) 

Finally, complete the Edit Configuration dialog box if it is displayed, and then choose Debug. Using API Gateway proxy event to test function.

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689089659/production/complete_edit_configuration_5c6bc5872a.webp) 

SAM will fetch `lambci/lambda:java8` Docker container image to run the function locally.

You can add a breakpoint to begin debugging the application.

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689089746/production/debugging_local_df8aa427ed.webp) 

#### Deploying an AWS Serverless Application

Select the AWS profile which you will use to deploy. Note: you can config the AWS profile by using [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html). Right-click the project’s `template.yaml` file. Then choose Deploy Serverless Application.

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689089804/production/deploy_serverless_app_1701468193.webp) 

Complete the Deploy Serverless Application dialog box, and then choose Deploy.

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689089835/production/deploy_sls_app_completed_c5bd2955d3.webp) 

After you deploy it, you can go to AWS Console to run/test the AWS Lambda function.

#### Conclusion

By using IntelliJ IDEA to create, debug and deploy AWS serverless applications, building AWS serverless applications will become easier and the time for troubleshooting issues will be reduced by debugging locally.