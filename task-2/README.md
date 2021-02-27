# Task-2 | Shodhan API Dashboard

## Description

This is a simple Dashboard based on SHODAN REST API that shows some network or internet-related information and functionality Like
* Your IP information
* Request header
* Your [Shodan](https://developer.shodan.io/api) API status
* You can Resolve DNS
* And also Reverse DNS

## Installation

* You need to install Node.js in order to install and run this project on your system 

### Step-1: Navigate to `/brainekt-assignment/task-2` <br>
### Step-2: Open your terminal/CMD in the navigated directory and run
    $ npm install
### Step-3: Configuring .env Variables
  * You don't need configure it. I already put it there for the sake of simplicity
  * And, Yeah I know it's not a good a idea to push .env or environment variable files in the repository. But I'm just doing this for sake of simplicity 
## Usage / Run project
### Step-1: Navigate to `/brainekt-assignment/task-2`
### Step-2: Open your terminal/CMD in the navigated directory and run
    $ npm start

### Step-3: Open your browser and goto [http://localhost:3000/](http://localhost:3000/)

## Directory Structure
`/brainekt-assignment/task-2`
- public
- src
  - API
    - axiosConfig.js
    - ipInfoAPI.js
    - utilityAPI
  - components
    - common
      - ProgressBarCircle.js
      - Title.js
    - Dashboard
      - Dashboard.js
      - ListItems.js
    - APIStatus.js
    - DNSResolve.js
    - DNSReverse.js
    - HeaderInfo.js
    - IpInfo.js
  - redux
    - actions
      - ipAction.js
      - utilityAction.js
    - reducers
      - index.js
      - ipInfoReducer.js
      - utilityReducer.js
    - store.js
    - types.js
  - App.css
  - App.js
  - index.js
  - .env
  - package-lock.json
  - package.json
  - README.md 