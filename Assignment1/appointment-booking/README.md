# Assignment 1

* *Date Created*: 03 06 2024
* *Last Modification Date*: 05 06 2024
* *Netlify URL*: <http://example.com/>
* *Git URL*: <https://git.cs.dal.ca/kurian/csci-5709-assignments>

## Authors

* [Judith Kurian](jd800733@dal.ca) - *(Owner)*

## Getting Started

See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To have a local copy of this lab / assingnment / project up and running on your local machine, you will first need to install the following software / libraries / plug-ins

```
Node.js
npm
Visual Studio
Bootstrap

```

### Installing

A step by step series of examples that tell you how to get a development env running


1. Install Create React App which is a tool that sets up a new React project with a sensible default configuration. You can install it globally using npm:

```
npm install -g create-react-app
```

2. Open Visual Studio
3. Open the terminal
4. Go to the directory where the app has to be created and use the Create React App command to create the project. 

```
npx create-react-app web-project
```

5. Once, the app is created go to the project directory where index.js is present and execute the below command to add the bootstrap library.

```
npm install bootstrap react-bootstrap
```

6. Now, execute the below command to run the app.

```
npm start
```

The app will start on the localhost on your web browser. The app will run in the development mode at [http://localhost:3000]

The tasks implemented can be seen on: 
[http://localhost:3000/booking] 
[http://localhost:3000/request-status] 

## Deployment

1. Push your app on your GitLab repository
2. Mirror the Gitlab repository to your GitHub
3. Open Netlify with your GitHub account
4. Follow the prompts to deploy

## Built With

* [React.js](https://react.dev/learn) - The web framework used