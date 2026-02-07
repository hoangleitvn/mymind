---
title: How Do We Host Our Static Website
type: article
status: imported
author: Hoang Le
source: innomize-cms
source_id: 7
slug: how-do-we-host-a-static-website
url: "https://innomizetech.com/blog/how-do-we-host-a-static-website"
created: 2023-06-20
published: 2019-10-25
locale: en
excerpt: A simple way to build and deploy a static website to AWS Cloud with Serverless Component, AWS S3, and AWS CloudFront
---

# How Do We Host Our Static Website

You are building a static website and wanted to know how to host your site, but;

*   You don’t want to perform manual steps.
*   You want to host for multiple environments such as **Development**, **UAT**, **Staging**, **Production**.
*   You want to reduce cost, provide high levels of reliability, require almost no IT administration, and scale to handle enterprise-level traffic with no additional work.
*   You wanted to deliver HTML, JavaScript, images, video, and other files to your website visitors around the world with CDN.

In this article, I will show you how to host a static website in a few minutes without manual steps, you can define the CI/CD pipeline to automate your deployment process pretty easily. [Amazon Web Services](https://aws.amazon.com/getting-started/projects/host-static-website/) is the most popular public cloud vendor in the world, they provide services to simply making a website on their infrastructure around the world. Check out [this article](https://aws.amazon.com/getting-started/projects/host-static-website/) to know more details.

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689264036/production/AWS_Static_Website_Hosting_Architecture_8e1a3bf93e.webp) 

[Static website hosting architecture at AWS](https://aws.amazon.com/getting-started/projects/host-static-website/)

If you are new to AWS, you want to practice in order to know the steps to host a site on AWS, [this article](https://dev.to/arswaw/host-a-serverless-static-website-with-free-ssl-in-15-minutes-hd3) will help you.

**DevOps** at [INNOMIZE](https://www.innomizetech.com/) is the most important aspect of our solutions and is required for all our projects. Automation reduces time-to-market, the risk of human errors, and redundancy in the system while increasing the efficiency of the project delivery. To automate the static website deployment, there are a couple of ways:

*   Using [the AWS Amplify](https://aws-amplify.github.io/) framework.
*   Using the [Serverless](https://serverless.com) framework and define CloudFormation resources, then using the [serverless-s3-sync](https://www.npmjs.com/package/serverless-s3-sync) plugin to sync your static files to the S3 bucket.
*   Using the [Serverless Component](https://github.com/serverless/components), a new infrastructure provisioning technology to build, compose, and deploy apps in seconds.

## Let’s get started

Now, I will show steps to build and deploy a website using **Serverless Component.** Below are the reasons why I selected this approach:

*   It is pretty fast, in less minutes you will have a site up and running.
*   It is an easy way to apply to our [Monorepo](https://en.wikipedia.org/wiki/Monorepo) since we have multiple apps per repo.
*   For consistency with our backend framework, we use the **Serverless framework** to build backend services with **AWS Lambda**, **API Gateway**, **Cognito**, and other AWS services.

Follow [this guide](https://github.com/serverless/components/tree/master/templates/website), you will able to build and deploy your site, however, the **Serverless component** hasn’t provided a way to deploy to multiple environments/stages using the same serverless.yml (or serverless.js) file yet. I have raised [this issue](https://github.com/serverless/components/issues/481), check out this if you want to know more details.

_Note, I wrote this post based on suggestments and comments from the above Github issue._

Before getting started to deploy the site, if you haven’t had a domain registered, you might need to:

*   Check out [this article](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-register.html) to register a new domain.
*   Request a wildcard public cert by following [this article](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html).

After you had the SSL certificate and Route53 issued and registered, follow the following steps to compose and deploy your site:

*   Install Serverless

```sh
npm install serverless -g
```

*   Create a sample React application, you can skip this step if you already have your app.

```sh
npx create-react-app sls-dev-app
```

*   Install serverless component packages

```sh
npm install @serverless/core @serverless/template -D
```

*   Create _serverless.js_ file in the project root directory

```javascript
const { Component } = require('@serverless/core');

class Website extends Component {
  async default(inputs = { env: 'dev', name: 'my-site' }) {
    const template = await this.load('@serverless/template', inputs.env);

    const output = await template({
      template: {
        name: inputs.name,
        admin: {
          component: '@serverless/website@4.0.0',
          inputs: {
            code: {
              src: 'dist',
              root: './'
            },
            env: {},
            region: `us-east-2`,
            bucketName: `sls-${inputs.env}-domain-com`,
            domain: `sls-${inputs.env}.domain.com`
          }
        }
      }
    });

    return output;
  }

  async remove(inputs = { env: 'dev' }) {
    const website = await this.load('@serverless/template', inputs.env);

    await website.remove();

    return {};
  }
}

module.exports = Website;
```  

*   You can modify the serverless.js file based on your requirements. such as replace your domain name (i.e. change the _domain.com_ to your registered domain name). **Note, right now if you use the full domain name for the bucketName (i.e.** [**www.my-app.domain.com**](http://www.my-app.domain.com/)**), you will end up with an error related to CloudFront distribution, that is the reason why I used hyphens (-) instead of using dots (.) for bucket name.**

*   Deploy

```sh
# --env can be any value for your environment
sls --debug --env=dev

# then you can deploy to another environment
sls --debug --env=prod
```

In a few minutes (it depends on how fast the CloudFront distribution provision and register your site), you will have your site up and running.