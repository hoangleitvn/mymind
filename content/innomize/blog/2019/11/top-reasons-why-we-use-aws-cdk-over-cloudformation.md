---
title: Top Reasons Why We Use AWS CDK Over CloudFormation
type: article
status: imported
author: Hoang Le
source: innomize-cms
source_id: 14
slug: top-reasons-why-we-use-aws-cdk-over-cloudformation
url: "https://innomizetech.com/blog/top-reasons-why-we-use-aws-cdk-over-cloudformation"
created: 2023-06-20
published: 2019-11-11
locale: en
excerpt: Considering between CloudFormation or AWS CDK framework for your IaC implementation but you don't know yet which one to apply. This article will help you understand some reasons why we use AWS CDK ove
---

# Top Reasons Why We Use AWS CDK Over CloudFormation

If you’re working with **AWS Infrastructure**, you may know that currently there are some tools/frameworks support to implement your AWS infrastructure such as [CloudFormation](https://aws.amazon.com/cloudformation/), [Terraform](https://www.terraform.io/), [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/home.html). What is the best tool that your team can rely on and use? What is the best tool that can help you increase productivity and quality? Do you have the answer? If not, read this post, and I will give you our answer and reasons.

Our team has been working with **AWS** for a couple of years. We have designed and implemented infrastructure components including **networking**, **server**, **storage**, and other AWS services either **manually** or **automation**. Before using A**WS CDK**, we used **AWS CloudFormation**, but working with it is a challenge, hard to define and get an overview for a complex template in either **JSON** or **YAML** format.

In this post, I will not provide specific detail of **AWS CDK.** If you don’t know what it is, then check out the [AWS CDK home page](https://docs.aws.amazon.com/cdk/latest/guide/home.html) to get some overviews and see how it works.

 ![Sample AWS CDK Code](https://res.cloudinary.com/innomizetech/image/upload/v1689260154/production/sample_aws_cdk_code_f856f7e5df.webp) 

With just more than 10 lines of code, you can generate a standard VPC with all required subnets to run your workload, but with CloudFormation it will be more than 100 lines of code.

We select AWS CDK as the **primary** tool for our Infrastructure as Code (IaC) because of the following reasons:

## With AWS CDK we “WRITE LESS AND DO MORE“

We first impressed **AWS CDK**, when we try to find alternative ways to reduce complexity and overcome the challenges of using **CloudFormation**. For example, we have a CloudFormation template to define and configure networking resources including VPC, subnets, route tables, security groups, bastion hosts, integrate gateway, nat gateways, etc. We need to write around **1000 lines of code** in JSON format using CloudFormation. When we try with AWS CDK, we only need to write around **50 lines of code**. As you can see, **AWS CDK can do the same thing, even adding more features such as conditional number of NAT gateway, number of subnets, and availability zones.**

The following code will create all required resources that allow you to create a new VPC on AWS in minutes, you can then modify or add more resources depending on your requirements:

```typescript
import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';

export class NetworkStack extends cdk.Stack {
  public readonly vpc: ec2.Vpc;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.vpc = new ec2.Vpc(this, 'VPC', {
      cidr: '10.0.0.0/16',
      natGatewaySubnets: {
        subnetName: 'Public'
      },
      subnetConfiguration: [
        {
          cidrMask: 26,
          name: 'Public',
          subnetType: ec2.SubnetType.PUBLIC
        },
        {
          name: 'Application',
          subnetType: ec2.SubnetType.PRIVATE
        },
        {
          cidrMask: 27,
          name: 'Database',
          subnetType: ec2.SubnetType.ISOLATED
        }
      ]
    });

    const vpcSecurityGroup = new ec2.SecurityGroup(this, 'SecurityGroup', {
      vpc: this.vpc,
      description: 'Allow ssh access to ec2 instances',
      allowAllOutbound: true
    });

    vpcSecurityGroup.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(22),
      'allow ssh access from the world'
    );
  }
}
```
## Easy to share and reuse your infrastructure as a library

**Declarative infrastructure as code** tends to be in languages that we don’t use every day like HCL, YAML, or JSON. AWS CDK uses **object-oriented,** provides **abstraction** techniques to create a model of our system, we can define **modules** to **share across projects**. We can use built-in construct libraries or from the community that can increase our productivity.

## CDK is a developer-friendly version of Cloud Formation

AWS CDK is an **imperative** programming language, supporting Java, JavaScript, Python, TypeScript, and C#. We can utilize our developer programming skills to reduce the time for learning a new syntax like **Terraform**. Think about a project in that we use TypeScript as the primary programming language for Front-end, Back-end, CI/CD, and IoC.

## Easy to use logic (if statements, for-loops, etc) when defining your infrastructure

We know how to write an if or for-loops, right? How hard is it to write a **condition** when using CloudFormation? If you know the answer, then you will know why love AWS CDK.

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689260275/production/aws_cdk_vpc_example_2c56e928ec.png) 

As you can see we can write conditional logic to provision or skip resource provisioning, with CloudFormation it will be more complicated

## Easy to get and integrate with our coding review workflow

AWS CDK provides commands to generate the **CloudFormation** template, so we can still review the generated CloudFormation template before applying, it also can generate difs that make it easy to review and make the decision.

## Code completion within your IDE

Does anyone remember how to define a full detail of an AWS resource using CloudFormation? Is there any **schema** or **intelligent** for the CloudFormation template that you can use for **code completion** to speed up your coding time?

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689260332/production/aws_cdk_auto_complete_54dc1cdacf.webp) 

Code completion with AWS CDK

## Allow us to test our code

AWS CDK allows us to perform snapshot tests, and fine-grained assertions, helping us build reliable and testable code, [here is the post](https://aws.amazon.com/blogs/developer/testing-infrastructure-with-the-aws-cloud-development-kit-cdk/) that provides a step-by-step guide to writing and running unit tests using [Jest](https://jestjs.io/). With CloudFormation, you can also write some tests, but it requires another tool, check out [this post](https://aws.amazon.com/blogs/infrastructure-and-automation/up-your-aws-cloudformation-testing-game-using-taskcat/) for more details.

## Easy to integrate with our CI/CD process

Deployment can be done with one single command requiring installing any additional tool. We also use AWS CDK to define our CI/CD pipeline using AWS DevOps tools such as CodeBuild, and CodeDeploy, which is much better than writing a lot of CloudFormation code.

The A**WS CDK** just a high level of **CloudFormation**, so if you want to know how exactly it works, my suggestion is to have a try with **CloudFormation**, do some works around it, then try to convert it into AWS CDK, you will find out whether you will continue with CloudFormation or change to use AWS, or maybe you can change to other tools such as Terraform.

**Nothing is the best, it depends on your requirement, team, project, and company**. **Have a nice coding!**