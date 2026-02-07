---
title: Quickly Installing And Running Neo4j Using Ansible On AWS Cloud
type: article
status: imported
author: Hoang Le
source: innomize-cms
source_id: 8
slug: quickly-installing-and-running-neo4j-using-ansible-on-aws-cloud
url: "https://innomizetech.com/blog/quickly-installing-and-running-neo4j-using-ansible-on-aws-cloud"
created: 2023-06-20
published: 2019-10-31
locale: en
excerpt: How to provision, configure and start Neo4j single node with Ansible and AWS Cloud
---

# Quickly Installing And Running Neo4j Using Ansible On AWS Cloud

Recently, we have worked on a project that uses Neo4j to store and process large graph data for our client. Our client has been asked for a solution to launch, install and configure a **Neo4j single node** (for the development environment and **High Availability** **Neo4j cluster** (for the production environment). Our team has selected [Ansible](https://www.ansible.com/) to implement this requirement, if you wanted to know why we selected **Ansible**, check out [this article](https://blog.innomizetech.com/2019/10/24/continuous-deployment%e2%80%8a-%e2%80%8adeploying-a-node-js-app-to-aws-ec2-using-ansible/) for more details. If you wanted to know why we selected **Ansible**, check out [this article](https://blog.innomizetech.com/2019/10/24/continuous-deployment%e2%80%8a-%e2%80%8adeploying-a-node-js-app-to-aws-ec2-using-ansible/).

Before getting started, I just wanted to give you a note that there are a couple of options to deploy **Neo4j** on **AWS**, so you might take a look before looking for details or select the best option that works for you:

*   [Neo4j Community AWS Marketplace](https://aws.amazon.com/marketplace/pp/B071P26C9D?qid=1530283441386&sr=0-1&ref_=srh_res_product_title), easy to launch instances and configure networking such as VPCs, storage.
*   [Neo4j Enterprise Causal Cluster](https://aws.amazon.com/marketplace/pp/B07D441G55?qid=1530283441386&sr=0-2&ref_=srh_res_product_title), which deploys multi-node causal clusters.

This article provides a step-by-step guild on how to launch, install and configure high availability Neo4j cluster (aka HA cluster) using Ansible on AWS. We use **[AWS](https://aws.amazon.com/)** for demonstration, but you are able to custom the playbooks and configurations for other cloud vendors such as **Google Cloud**, **Azure**.

## Pre-requisites

In order to use this Ansible playbook on AWS, the following is needed:

*   An **[AWS](https://aws.amazon.com/)** account with a user’s access key and secret key.
*   An IAM policy attached to the above user that allows the launching of new EC2 instances, authorizes ports in security groups.
*   An EC2 Key-Pair to allow SSH to EC2 instances.
*   [](https://git-scm.com/)[](https://git-scm.com/)git installed on your machine

## The steps

To deploy Neo4j, are we going to build the following deployment flow:

1.  Setup security groups and authorize ports communication
2.  Launch EC2 instance(s) – Optional
3.  Update OS
4.  Install Neo4j Enterprise on EC2 instance(s)
5.  Install [HAProxy](http://www.haproxy.org/) and configure HA cluster on EC2 instance(s) – only required for HA cluster

## Getting started

Before deploying, a security group needs to be created that the Neo4j cluster/instance will use. In fact, you can create multiple security groups for different purposes such as allowing SSH to instance, allow Neo4j communication between each other. But to simplify the process, we will use one security groups that allow the following ports:

*   22 (SSH)
*   Neo4j Ports listed on this [page](https://neo4j.com/docs/operations-manual/current/configuration/ports/)
*   8000 – HA admin port for HA cluster deployment

Login to [AWS Console Management](http://console.aws.amazon.com/) portal and create a security group and open the above ports like the below screenshot:

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689263761/production/security_group_configs_344f1a638b.webp) 

#### Project structure

A well-defined _project structure_ will help us easy to understand each part of the solution, allow reuse, and be customizable. If you have experience in working with Ansible, you should know how to organize the Ansible project. I followed the alternative approach mentioned in [this](https://docs.ansible.com/ansible/latest/user_guide/playbooks_best_practices.html#directory-layout) article, feel free to select your own approach.

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689263783/production/code_structure_ansible_neo4j_d52f93bab7.webp) 

The above project structure contains the following:

*   _extension/setup_: contain scripts to install **Ansible** and required python packages
*   _inventories/\[env\]_: define all variables for playbooks that allow us custom for each environment
*   _roles:_ predefined and reusable roles for our playbooks. In this solution, we use the following roles:
    *   _common_: the common role to install a common package or update the latest OS version.
    *   _haproxy_: the role to install and configure HAProxy.
    *   _launch-ec2_: the role to launch EC2 instances in multiple AZ.
    *   _neo4j_: install and configure Neo4j on a single instance.
*   _templates:_ template files for configuring Neo4j instances as well as HAProxy config files
*   There are two main playbooks:
    *   _neo4j.single.yml:_ the playbook to launch and install a single Neo4j node.
    *   neo4j.cluster.yml: the playbook to launch and install an HA Neo4j cluster.

## Preparation

**Step 1 – Clone/download source code from Github using GIT**

```sh
sh clone https://github.com/innomizetech/neo4j-ansible.git
```

change the directory into the newly created directory

```sh
cd neo4j-ansible
```

**Step 2 – Install Ansible and required Python packages**

```sh
chmod +x extension/setup/setup.sh
./extension/setup/setup.sh
```

**Step 3 – Decrypt [Ansible Vault](https://docs.ansible.com/ansible/latest/user_guide/vault.html) file**

A vault file contains sensitive information so we shouldn’t commit to source control in plaintext. So we need to encrypt it before committing to source control. Using [Ansible vault](https://docs.ansible.com/ansible/latest/user_guide/vault.html#decrypting-encrypted-files) so this problem. In this repo, we committed the password file for demo purposes, **please note that you should not commit the password file into Source control.**

Run the below command to decrypt the _vault.yml_ file in the inventory directory:

```sh
ansible-vault decrypt inventories/dev/group_vars/vault.yml --vault-password-file ansible-vault.pass
```

**Step 4 – Update vault.yml file**

```yaml
---
# Sensitive variables here are applicable to deploy the application

aws_access_key: >
aws_secret_key: >

# The security group id to be attached to new instance
security_group: >
# An Amazone Linux image
image: >
# The first subnet to launch instance, it should be public subnet if you allowed public access
vpc_az1_subnet_id: >
# The second subnet to launch instance, it should be public subnet if you allowed public access
vpc_az2_subnet_id: >

# Set initial password for Neo instances
initial_password: >

# HAProxy configuration (requires for cluster mode with HAProxy)
stats_user: >
stats_pass: >
```

## Deploy a single Neo4j Node

**Step 1 – Update groups variables**

Review and update variables in the _inventory\\dev\\group\_vars\\neo4j-single.yml_ file, below are some important variables:

*   _region_: an AWS region to launch and deploy Neo4j
*   _keypair_: an existing key-pair on the above region
*   _other variables_: feel free to update according to your requirement

**Step 2- Run Ansible playbook**

Run the below command to deploy a single Neo4j instance for `dev` environment. Replace `dev` with any existing inventory in the `inventories` directory (i.e. staging, prod)

```sh
ansible-playbook neo4j.single.yml -e env=dev --vault-password-file ansible-vault.pass

#  or we can use -b -K to enter SUDO password (sudo su)
ansible-playbook neo4j.single.yml -e env=dev --vault-password-file ansible-vault.pass -b -K
```

Wait until the command finished and access to Neo4j browser at [](http://public-ip:7474)[http://public-ip:7474](http://public-ip:7474)

**Deploy an HA Neo4j cluster**

Execute the same steps above with

*   _neo4j-cluster.yml_ group variables file
*   _neo4j.single.yml_ the Ansible playbook

The source code can be found on [Github](https://github.com/innomizetech/neo4j-ansible). If you have any issues when practicing this instruction, feel free to let us know by giving us our comments.

Thank you for reading my article.