---
title: How To Apply Liquibase To AWS Serverless Applications With NX Dev Tools On A Monorepo
type: article
status: imported
author: Hiep Dinh
source: innomize-cms
source_id: 23
slug: how-to-apply-liquibase-to-aws-serverless-applications-with-nx-dev-tools-on-a-monorepo
url: "https://innomizetech.com/blog/how-to-apply-liquibase-to-aws-serverless-applications-with-nx-dev-tools-on-a-monorepo"
created: 2023-06-20
published: 2019-12-17
locale: en
excerpt: Step-by-step on how to apply Liquibase to Serverless projects for database management with version control, especially to a Microservice project 
---

# How To Apply Liquibase To AWS Serverless Applications With NX Dev Tools On A Monorepo

Keeping track of your application’s database is not an easy task. Database schemas tend to mismatch in different environments, data in one of the databases may miss some crucial pieces of data. Such occasions can be irritating, especially when caught in production.

The situation gets worse when the project is developed based on the microservice pattern. In this case, each of your services has its own database instance whose structure may differ from others. So keeping track of your service’s databases can become a nightmare (See [6 Reasons to Version Control Your Database](https://dzone.com/articles/six-reasons-to-version-control-your-database)). Therefore, it is useful if we can use database version control in the project.

In the previous article, I introduced [Building AWS Serverless applications with NX Dev Tools on a monorepo](https://blog.innomizetech.com/2019/11/19/build-aws-serverless-application-with-nx-monorepo/) and the advances of Monorepo. In this article, I will step by step apply Liquibase (database version control) to an AWS Serveless application.

#### Workspace structure

Based on the structure of Building AWS Serverless applications with NX Dev Tools on a Monorepo, I add a new service.

```
ng g @nx/node:application learning-app
```

To apply Liquibase, I add some directories and the workspace structure as below.

```yaml
    Workspace
    ├── angular.json
    ├── apps
    │   ├── greeting-app
    │   │   ├── jest.config.js
    │   │   ├── liquibase # This is database management for the greeting app
    │   │   │   ├── changelog-master.xml
    │   │   │   ├── liquibase.properties
    │   │   │   ├── orders.csv # Import data file
    │   │   │   └── package.json # Use to manage version and scripts
    │   │   ├── serverless.yml
    │   │   ├── src
    │   │   │   └── functions
    │   │   │       └── greeting
    │   │   │           ├── greeting.handler.ts
    │   │   │           ├── greeting.yml
    │   │   │           └── index.ts
    │   │   ├── tsconfig.app.json
    │   │   ├── tsconfig.json
    │   │   ├── tsconfig.spec.json
    │   │   └── tslint.json
    │   ├── hello-app
    │   │   ├── jest.config.js
    │   │   ├── liquibase # This is database management for the greeting app
    │   │   │   ├── changelog-master.xml
    │   │   │   ├── liquibase.properties
    │   │   │   ├── package.json # Use to manage version and scripts
    │   │   │   └── users.csv # Import data file
    │   │   ├── serverless.yml
    │   │   ├── src
    │   │   │   └── functions
    │   │   │       └── hello
    │   │   │           ├── hello.handler.ts
    │   │   │           ├── hello.yml
    │   │   │           └── index.ts
    │   │   ├── tsconfig.app.json
    │   │   ├── tsconfig.json
    │   │   ├── tsconfig.spec.json
    │   │   └── tslint.json
    │   └── learning-app
    │       ├── jest.config.js
    │       ├── serverless.yml
    │       ├── src
    │       │   └── functions
    │       │       └── learning
    │       │           ├── index.ts
    │       │           ├── learning.handler.ts
    │       │           └── learning.yml
    │       ├── tsconfig.app.json
    │       ├── tsconfig.json
    │       ├── tsconfig.spec.json
    │       └── tslint.json
    ├── jest.config.js
    ├── libs
    │   └── common-util
    │       ├── jest.config.js
    │       ├── README.md
    │       ├── src
    │       │   ├── index.ts
    │       │   └── lib
    │       │       └── common-util.ts
    │       ├── tsconfig.json
    │       ├── tsconfig.lib.json
    │       ├── tsconfig.spec.json
    │       └── tslint.json
    ├── nx.json
    ├── package.json
    ├── package-lock.json
    ├── README.md
    ├── tools
    │   ├── libs # libs for liquibase
    │   │   ├── liquibase-core-3.5.4.jar
    │   │   └── mysql-connector-java-8.0.18.jar
    │   ├── schematics
    │   └── tsconfig.tools.json
    ├── tsconfig.json
    ├── tslint.json
    └── webpack.config.js
```
In this structure, I only use database version control for two services, hello-app, and greeting-app. Each service has a different structure of the database (sometimes the database is located on a different host).

#### Applying Liquibase

To apply Liquibase, I update the content of changelog-master.xml, liquibase.properties, package.json, and orders.csv in the greeting app Liquibase directory.

```yaml 
// package.json
{
  "name": "nx-lambda-liquibase-greeting-db",
  "version": "1.0.0",
  "license": "MIT",
  "scripts": {
    "dropAll": "java -jar ../../../tools/libs/liquibase-core-3.5.4.jar dropAll",
    "update": "java -jar ../../../tools/libs/liquibase-core-3.5.4.jar update",
    "init": "npm run dropAll && npm run update"
  }
}
  
// liquibase.properties
classpath=../../../tools/libs/mysql-connector-java-8.0.18.jar
driver=com.mysql.cj.jdbc.Driver
changeLogFile=changelog-master.xml
url=jdbc:mysql://db.example.com:3306/hiep_greeting?useSSL=false
username=root
password=password

// changelog-master.xml

  
    Initialize the Liquibase setup for greeting app
  

  
    Create orders table
    
      
        
      
      
    
  

  
    Load test data for orders table
    
      
    
  

  ```  
  
  
And update greeting.handler.ts of the greeting function to use MySql.

```yaml
import { Handler, Context } from 'aws-lambda';
import * as serverlessMysql from 'serverless-mysql';

const mysql: serverlessMysql.ServerlessMysql = serverlessMysql({
  config: {
    host: 'db.example.com',
    database: 'hiep_greeting',
    user: 'root',
    password: 'password'
  }
});

export const handler: Handler = async (event: any, context: Context) => {
   // Run your query
   const results = await mysql.query('SELECT * FROM orders')

   // Run clean up function
   await mysql.end()

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(results)
  };
};
    
```
Similar to the hello-app service. You can see it [here](https://github.com/hiepinnomizetech/nx-lambda-liquibase).

To run Liquibase CLI for each service, you only navigate the command line to the Liquibase directory on this service and run the command (see more [here](https://www.liquibase.org/documentation/index.html)).

 ```sh
npm run dropAll # Drop all tables in the database
npm run update # Update database with new changeset
```

But from that, we can use Liquibase as a separate project with the same result for database management. Why do we need to apply it in this project? Because I want to use the advances of the Monorepo and apply triggers before deploying the AWS Serverless application to run database migration. This will benefit DevOps.
#### Integrate the database migration before deploying AWS Serverless application

To run a database migration script in a Serverless application, you need to install

```sh
npm install --save-dev serverless-scriptable-plugin
```

And update serverless.yml in the greeting-app service. Similar to the hello-app service.

```yaml
// Add this code to the custom section
custom:
  scriptHooks:
    before:package:cleanup: cd apps/greeting-app/liquibase && npm run update
```

With `before:package:cleanup` is an event in the Serverless lifecycle (see more [here](https://gist.github.com/HyperBrain/50d38027a8f57778d5b0f135d80ea406))

#### Deploying and Testing

I deploy three services and test them.

```sh
sls deploy --config apps/greeting-app/serverless.yml
sls deploy --config apps/hello-app/serverless.yml
sls deploy --config apps/learning-app/serverless.yml
```

Database result:
 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689086886/production/database_screenshot_4cead430d9.png) 

AWS Lambda result:

Greeting API call
 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689086972/production/greeting_postman_call_8f7ed5dcac.png) 

Hello API call
 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689087034/production/hello_postman_call_01ff077c4a.png) 

Learning API call  
![](https://res.cloudinary.com/innomizetech/image/upload/v1689087034/production/learning_postman_call_132e83a049.webp) 

#### Conclusion

By applying Liquibase to AWS Serverless applications with NX Dev Tools on a Monorepo, we can use advances of the Monorepo and database version management and constrain the database migration process that must run before deploying the application.

You can see the full source code [here](https://github.com/hiepinnomizetech/nx-lambda-liquibase).