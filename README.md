# BoldBI Embedded SDK
This project includes the Embedded SDK, which can be installed in web apps like `Angular` and `React` as an NPM package.

# Prerequisites

The project requires the following items to run.

   * [Node.js](https://nodejs.org/en/) - Above version 9.11.1
   * [Visual Studio Code](https://code.visualstudio.com/download)

# Steps to run the embed SDK project

To embed the dashboard in view or edit mode in an Angular or React application, we use this embed SDK as an NPM package. If the embed SDK need to be modify or improved, we can use this repository. The actions that must be taken are outlined below.

1. Pull the [source code](https://github.com/bold-bi/boldbi-sdk/tree/development) in your machine.

2. Use the command below to install the dependent packages and make your project runnable.
    ```
    npm install
    ```

3. If you want to make any changes in source, make changes in `index.ts` file otherwise, you can skip this step.

    ![boldbi-sdk-typescript](https://user-images.githubusercontent.com/92370364/229046454-2d08008f-7542-497a-95a3-26063b3af20a.png)

4. Before running the typescript command, ensure that typescript is installed on your machine. If it is, you can verify it by running the below command to check the typescript version.
    ```
    tsc -v
    ```

5. If typescript is not installed, please run this command to install it.
    ```
    npm install -g typescript
    ```

6. Run the below command to convert the TS file to a JS file. 
    ```
    tsc
    ```

# Steps to use the compiled Embedded SDK source with Angular application

You can use this as an local NPM package in the Angular Sample to embed a dashboard You can check out the `Angular` sample from [here](https://github.com/boldbi/angular-with-aspnet-core-sample).  

## Using the Angular with ASP.NET Core sample

1. Pull the `angular` sample [here](https://github.com/boldbi/angular-with-aspnet-core-sample) in your machine.

2.	Use the command below to install the dependent packages and make your project runnable.
    ```
    npm install
    ```

3. If Angular CLI 14 is already installed on your machine, you can verify it by executing the following command to check the Angular version. Otherwise, you must install it to start the Angular application.
    ```
    ng --version
    ```

4. If angular CLI 14 is not installed, please run this command to install it on your machine.
    ```
    npm i @angular/cli@14.0.6
    ```

5. Follow the [steps](https://help.boldbi.com/embedded-bi/javascript-based/samples/v3.3.40-or-later/angular-with-javascript/) to configure the Embed details in both Backend(ASP.NET core) and Frontend (Angular).

6. To install the Bold BI Embedded SDK package, use the following command from the pulled location of the `BoldBI-SDK` repository.
    ```
    npm install {src directory}\boldbi-sdk

    Example of my pulled location:  D:\sdkrepository\boldbi-sdk
    ```

7. After installing the NPM package, check the node_modules folder in that `@boldbi` folder  will be created, which contains your local embed SDK.

8. To run the angular sample, use the below command.
    ```
    npm start
    ```

> **NOTE:** You can also run the react sample by using this Embed SDK as NPM package refer and get the sample [here](https://github.com/boldbi/react-with-aspnet-core-sample).

