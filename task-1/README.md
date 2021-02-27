# Task-1 | Pricing calculator

## Description

It's a pricing calculator react app that will calculate the total price based on the feature you select on this app. There is a bunch of website feature listed on the app and you can choose them using checkbox and slider. Also, there is a user form in the first section that any user can fill-up submit, After submitting the form an email will be sent to that user and save the user data to the database

## Installation

* You need to install Node.js in order to install and run this project on your system 

### Step-1: Navigate to `/brainekt-assignment/task-1/client`

### Step-2: Open your terminal/CMD in the navigated directory and run
    $ npm install
  * It will install necessary dependency for the client react-app

### Step-3: Navigate back to task-1 directory `/brainekt-assignment/task-1` and run
    $ npm install
  * It will install necessary dependency for the server
### Step-4: Configuring config.env Variables
  * You don't need configure it. I already put it there for the sake of simplicity
  * And, Yeah I know it's not a good a idea to push .env or environment variable files in the repository. But I'm just doing this for the sake of simplicity 

## Usage / Run project
### Step-1: Make sure you are on `/brainekt-assignment/task-1` directory
### Step-2: Open your terminal/CMD in `/brainekt-assignment/task-1` directory and run
    $ npm run dev
* This above command will run both backend and frontend
<!-- - ### Run only server with `nodemon`
      $ npm run server

- ### Run only server without `nodemon`
      $ npm start
- ### Run only client (React-app)
      $ npm run client -->

### Step-3: Open your browser and goto [http://localhost:3000/](http://localhost:3000/)

## Directory Structure (root only)
`/brainekt-assignment/task-1`
- client
- config
  - config.env
  - db.json
- controllers
  - emailSenderController.js
- models
  - UserModel.js
- routes
  - emailSenderRoutes.js
- utils
  - sendEmail.js
- package-lock.json
- package.json
- README.md
- server.js