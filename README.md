# brainwired_assigment

This project is a full-stack web application built with React, Node.js, Express, and MongoDB. It allows you to register users and displays a list of registered users and CURD Operations.

## Deployment link : https://brainwired.vercel.app/
## Api Route to acces the routes : https://brinewried.onrender.com
## github repo link : https://github.com/krishna8464/brainwired_assigment
## Post man folder for the Api Testing folder  link : https://planetary-desert-450468.postman.co/workspace/My-Workspace~37337c76-27f3-4ef9-8778-cf9e0e56a65f/collection/24255887-3690a959-f3ea-45fe-bb3b-d5a39ad9653a?action=share&creator=24255887 

## Prerequisites

Before you can run this project, make sure you have the following software installed on your machine:

- Node.js

## Installation

1. Clone the repository to your local machine: 

- git clone https://github.com/krishna8464/brainwired_assigment.git


2. Change into `backend` directory and install the dependencies for the server:

- cd backend
- npm install


4. Change into the `frontend` directory and install the dependencies for the client:

- cd ..
- cd brainwaired
- npm install


## Configuration

1. Create a `.env` file in the root directory of the project.

2. In the `.env` file, add the following environment variables:

mongoURL=mongodb+srv://vamshi:vamshi@cluster0.bz4jnb0.mongodb.net/Brainwired?retryWrites=true&w=majority
port=5000

## Running the Application

1. Start the backend server by changing into `backend` directory:

- npm run server


The server will run on http://localhost:5000.

2. In a new terminal, change into the `frontend` directory and start the client server:

- npm start


The client will run on http://localhost:5000 and open automatically in your browser.

## Usage

- Access the application by visiting https://brainwired.vercel.app/ in your browser.
- The server API endpoints are accessible at https://brinewried.onrender.com.

## Backend API Endpoints

- **POST /users/create**: Register a new user. Requires the following JSON payload:
```json
{
 "firstname": "vamshi",
 "lastname": "ashish@example.com",
 "dob": "2001-05-26",
"address" : "hyd
}
```

- **GET /user/get**: Get all users
```
[
  {
      "_id": "1"
     "firstname": "vamshi",
 "lastname": "ashish@example.com",
 "dob": "2001-05-26",
"address" : "hyd
  }
]
```
- **GET /user/get/id**: Get a user By the id:
```json
{
 "id":1
 "firstname": "vamshi",
 "lastname": "ashish@example.com",
 "dob": "2001-05-26",
"address" : "hyd
}
```
- **PATCH /user/update/id**: To Update a User. Requires the following JSON payload:
```json
{
 "firstname": "vamshi",
 "lastname": "ashish@example.com"
}
```
- **Delete /user/delete/id**: To delete a User. Requires the following JSON payload:
```json
{
 "suc":"User deleted successfully"
}
```




