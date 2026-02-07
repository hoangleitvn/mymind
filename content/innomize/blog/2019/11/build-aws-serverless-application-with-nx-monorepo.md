---
title: Building AWS Serverless Applications With NX DEV Tools On A Monorepo
type: article
status: imported
author: Hiep Dinh
source: innomize-cms
source_id: 19
slug: build-aws-serverless-application-with-nx-monorepo
url: "https://innomizetech.com/blog/build-aws-serverless-application-with-nx-monorepo"
created: 2023-06-20
published: 2019-11-19
locale: en
excerpt: This article provides detailed instruction on how to use NX Dev Tool to build, test, and deploy AWS Serverless Application on a Monorepo
---

# Building AWS Serverless Applications With NX DEV Tools On A Monorepo

![](https://res.cloudinary.com/innomizetech/image/upload/v1687234968/production/build_aws_serverless_app_0fe5d53b53.png) 

[A monorepo](https://en.wikipedia.org/wiki/Monorepo) can be described as a repository that contains more than one logical project. These projects can be unrelated, loosely coupled, or connected by dependency management tools, they are usually large in size, branches, commits, and working developers.

Serverless computing such as [AWS Serverless](https://aws.amazon.com/serverless/) offers a number of advantages over traditional cloud-based or server-centric infrastructure. For many developers, serverless architectures offer greater scalability, more flexibility, and quicker time to release, all at a reduced cost. With serverless architectures, developers do not need to worry about purchasing, provisioning, and managing backend servers.

This article will guide you on how to build AWS Serverless Application using [Nx Dev Tool Extension](https://nx.dev/) and [Serverless Framework](https://serverless.com/).

#### Creating Workspace and Library with Nx

Command to create a workspace.

```sh
npm init nx-workspace myworkspace
```

In this example, I use the empty workspace and Angular CLI (If you use VSCode, you can use the Angular Console plugin to generate apps, libs,…).

With an empty Nx workspace, there are no applications to build, serve, and test. Command add node application capabilities to the workspace.

```sh
cd myworkspace && npm install --save-dev @nx/node
```
After the capability is added, I create two applications.

```sh
ng g @nx/node:application hello-app
ng g @nx/node:application greeting-app
```

And a library.

```sh
ng g @nx/workspace:lib common-util
```

#### Applying the Serverless framework to the workspace

To build AWS Serverless Application with Serverless Framework, the application needs a _serverless.yml_ file.

In _hello-app_ directory, Adding _serverless.yml_ file with the content.

```yaml
service: hello-app
provider:
  name: aws
  runtime: nodejs10.x
  stage: dev
  region: us-east-1
  webpack:
    webpackConfig: 'webpack.config.js'
    includeModules: true
    packager: 'npm'
    packExternalModulesMaxBuffer: 204800 
functions:
  hello: ${file(apps/hello-app/src/functions/hello/hello.yml)}
plugins:
  - serverless-webpack
```

Similarly, add _serverless.yml_ to _greeting-app_ directory.

```yaml
// Update
service: greeting-app
...
functions:
  greeting: ${file(apps/greeting-app/src/functions/greeting/greeting.yml)}
```
Add libraries for AWS and Serverless.

npm install --save aws-lambda
npm install --save-dev serverless serverless-webpack tsconfig-paths-webpack-plugin

You can see more details about serverless plugin [here](https://blog.innomizetech.com/2019/11/06/top-serverless-plugins-we-are-using/). Then add a _webpack.config.js_ file at workspace root directory.
```yaml
const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  externals: [nodeExternals()],
  devtool: 'source-map',
  entry: slsw.lib.entries,
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
    plugins: [
      new TsconfigPathsPlugin()
    ]
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  plugins: [],
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  stats: 'minimal', // errors-only, minimal, none, normal, verbose
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, '.webpack'),
    filename: '[name].js'
  }
};
```
See [serverless-webpack](https://github.com/serverless-heaven/serverless-webpack) for more details.

The workspace structure.

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689089111/production/workspace_structure_nx_6eaa7905a2.png) 
To illustrate how useful libraries can be. Updating _common-util.ts_ file in the _common-util_ library.

```typescript
export const getMessage = () => {
  return 'This is a message from workspace library';
};
```

Add _hello.handler.ts_, _hello.yml_, and _index.ts_ file to _functions/hello_ directory and also refer to the _common-util_ library, see below code snippet:

```yaml
//hello.handler.ts
import { Handler, Context } from 'aws-lambda';
import { getMessage } from '@myworkspace/common-util';

export const handler: Handler = async (event: any, context: Context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: getMessage() })
  };
};

//hello.yml
handler: apps/hello-app/src/functions/hello/index.handler
description: A function for Hello Application
events:
  - http:
      path: /hello
      method: get

//index.ts
export * from './hello.handler';
```
Similarly, Add _greeting.handler.ts_, _greeting.yml_, and _index.ts_ file to _functions/greeting_ directory with content as _hello.handler.ts_, _hello.yml_.

#### Deploying

To deploy AWS Serverless Application with Serverless Framework you need to install AWS CLI and config [AWS Credential](https://serverless.com/framework/docs/providers/aws/cli-reference/config-credentials/). Because every application is separated, so I can deploy separately for every application.

```sh
sls deploy --config apps/hello-app/serverless.yml
sls deploy --config apps/greeting-app/serverless.yml
```

Result:

Hello API call
 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689089210/production/postman_hello_api_b9649ad645.png) 

Greeting API call  
![](https://res.cloudinary.com/innomizetech/image/upload/v1689089230/production/postman_greeting_api_call_cd109654c7.webp) 

#### Conclusion

In this guide, AWS Serverless Application is built with awesome tools and patterns that will make our life as developers pretty enjoyable.