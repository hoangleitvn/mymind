---
title: What is Node.js and why it becomes more popular?
type: article
status: imported
author: Hoang Le
source: innomize-cms
source_id: 2
slug: what-is-node-js-and-why-it-becomes-more-popular
url: "https://innomizetech.com/blog/what-is-node-js-and-why-it-becomes-more-popular"
created: 2023-06-20
published: 2018-06-07
locale: en
excerpt: Nowadays, many developers wanted to learn Node.js programming skills to match the current market and industry needs. Node.js became very popular over the past few years. We will give you a basic overv
---

# What is Node.js and why it becomes more popular?

![](https://res.cloudinary.com/innomizetech/image/upload/v1689409297/production/nodejs_statistic_be1a3a984c.webp) 

[A source from Node.js Foundation](https://foundation.nodejs.org/)

Nowadays, many developers wanted to learn Node.js programming skills to match the current market and industry needs.

Node.js became very popular over the past few years. According to the Node.js Foundation report, more than a billion downloads of Node.js. So what are the reasons that make many developers choose Node? In this article, I will give you a brief summary of Node, what it is, its key features, and how it works, and list out relevant keywords that I think we should take a look at and understand the big picture if you want to deeply explore Node and its architecture.

Whenever I learn a new thing, there are three questions I will try to get the answer:

*   **What** it is?
*   **How** does it work?
*   **When** do we use it?

Let’s begin…

**What is Node.js and how does it work?**

As per Wiki

> **Node.js** is an [open-source](https://en.wikipedia.org/wiki/Open-source_software), [cross-platform](https://en.wikipedia.org/wiki/Cross-platform) [JavaScript](https://en.wikipedia.org/wiki/JavaScript) [run-time environment](https://en.wikipedia.org/wiki/Runtime_system) that executes JavaScript code outside of a browser. Historically, JavaScript was used primarily for [client-side scripting](https://en.wikipedia.org/wiki/Client-side_scripting), in which scripts written in JavaScript are embedded in a webpage’s HTML and run client-side by a JavaScript engine in the user’s web browser.

Below are some main features of Node.js:

*   **Asynchronous and Event Driven:** Node doesn’t wait for results and doesn’t block other calls. Whenever it receives a request, it will immediately handle the request, after it finishes executing it will run a callback to notify the results of the execution. It’s running on a single thread with the event loop.
*   **High Scalability**: the events mechanism makes Node.js can be easily scalable.
*   **It’s very fast:** The non-blocking IO system makes Node.js blazing fast.
*   **Community**: the Node’s community is very active and always eager to help. With their support, the quality of the packages consistently improves.
*   **NPM**: Like Maven, NuGet, or Ruby Gems, it’s a tool that handles installing and updating reusable modules from the online collection. It manages the version and dependencies of the reusable modules that we are using for building our app.

## **How Node.js works?**

There are 3 key main features of Node.js architecture:

1.  **Single thread**: since it works with a single thread so for any application that requires a heavy CPU workload, Node.js may not be a good choice.
2.  **Even Loop**: It builds on top of “Libuv” which handles queueing and processing of asynchronous events.
3.  **Non-blocking I/O**: event loop works on a single thread, but all long-running tasks (network I/O, data access, etc.) are always executed asynchronously on top of the worker thread which returns results via a callback to the event loop thread. No wait, no blocking, this is the way of handling code execution.

So what are the differences between single-thread and multithreading? See some screenshots below:

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689409482/production/single_thread_61f0629952.png) 

[Image Source](https://strongloop.com/strongblog/node-js-is-faster-than-java/)

 ![](https://res.cloudinary.com/innomizetech/image/upload/v1689409483/production/multiple_threads_5b6314b6e9.png) 

[Image Source](https://strongloop.com/strongblog/node-js-is-faster-than-java/)

You can see with Node.js there is no waiting thread (non-blocking), which is why it’s very fast.

#### **When you should use Node.js?**

**Real-time applications**

Node.js is a good choice for applications that have to process a high volume of a short message requiring low latency. Such systems are called real-time applications (RTA). However, if you intend to build heavy real-time applications, I suggest having a try with [**Erlang**](https://www.erlang.org/).

**Data streaming**

Likes real-time applications, because of the asynchronous nature, it’s very good for handling real-time data streaming. It can be used to stream media, data from multiple streams, file upload, or it’s great for [WebSockets](https://www.merixstudio.com/development/websocket/) server

**API Server**

Because it can handle many concurrent connections at once, it’s suitable for API service. The JSON data is used naturally ob JavaScript, therefore you can easily convert JS objects into JSON format. It is a good choice to build backend services for [Single Page Application](https://en.wikipedia.org/wiki/Single-page_application)

**Microservices**

Node.js is well suited to act as the microservices. Because it’s fast and lightweight it can be used for writing microservices that easily scale. Almost our recent projects used AWS Lambda and API Gateway to build microservices, backend services for Single Page Applications, and more. With the [**Serverless**](https://serverless.com/) framework, we can easily build, deploy and enhance. It helps reduce cost, the services are running 24/7 but we only pay when it is used.

#### **When we shouldn’t use Node.js?**

We know the benefits of Node.js, and how fast it is, however, there are still some bad use cases when you shouldn’t consider using it.

**CPU-heavy jobs**

As I have mentioned above, Node.js is not a good choice for heavy jobs because it is bad on a single thread, non-blocking I/O model, but it only uses a single CPU core.

**CRUD**

If your application only performs CRUD operation, using Node.js would be superfluous for simple HTML, CRUD doesn’t require more traffic coming to your app.

**You have seen many benefits of Node.js, but does it have disadvantages?**

*   First of all, because of asynchronous and callback natures, it makes it a little difficult for the first time we learn Node.js. But don’t worry, I believe if you have a passion for learning new things, you will easily catch up and learn a lot.
*   Awful experience of the callback! Thanks to Promises and now async/await function expression, we can avoid [callback-hell](http://callbackhell.com/) and make your code cleaner and easily understand and maintain. I recently read an article about [converting long-chains of Promise.then() into async/await automatically](https://dev.to/ben/visual-studio-code-can-now-convert-your-long-chains-of-promisethens-into-asyncawait-automagically-1b1b). It’s really cool.
*   And the last one, of course, it is not working well for CPU-intensive tasks.

#### Summary

Node.js is growing quickly, and others also growing every day. I recommend you should not only focus on Node.js, but you should also look at others, find out the best one that appropriate for your solution, and don’t make Node.js is the only choice that you can suggest and apply to your projects.