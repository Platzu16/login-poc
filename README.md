SAIMS
------------

This project is a web application built with Angular 17 for the frontend and Node.js with Express for the backend. The frontend and backend communicate over REST APIs to provide a seamless user experience.

Table of Contents
-----------------
- Prerequisites
- Project Structure
- Setup and Installation
- Running the Application
- Available Scripts
- Contributing
- License

Prerequisites
-------------
- Node.js (v20 or above)
- npm (Node Package Manager)
- Angular CLI (v17 not standalone)

Project Structure
-----------------
The project has two main directories:
- /frontend: Contains the Angular 17 application.
- /backend: Contains the Node.js/Express API.

Setup and Installation
----------------------

1. Clone the repository:

   git clone git@github.com:Platzu16/login-poc.git
   cd <project-name>

2. Install dependencies:

   - Install backend dependencies:

     cd backend
     npm install

   - Install frontend dependencies:

     cd ../frontend
     npm install

Running the Application
-----------------------

1. Start the Backend Server:

   - Navigate to the backend directory and start the server:

     cd backend
     npm start

   - The backend server will start on http://localhost:5000 (or any configured port).

2. Start the Frontend Server:

   - Open a new terminal, navigate to the frontend directory, and start the Angular development server:

     cd frontend
     ng serve

   - The frontend server will start on http://localhost:4200.

3. Access the Application:

   - Open your browser and navigate to http://localhost:4200 to view the application.

Available Scripts
-----------------

Backend (Express)
- npm start: Starts the Node.js/Express server.
- npm run dev: Starts the server in development mode with hot-reloading (if configured).
- node server.js

Frontend (Angular)
- ng serve: Compiles and serves the Angular application with live reloading.
- ng build: Builds the Angular application for production in the /dist directory.
- ng test: Runs unit tests for the Angular app.

API Endpoints
-------------
- POST /api/auth/login.
- POST /api/auth/register.

  > Add further details of your endpoints as needed.

Contributing
------------
If you would like to contribute, please fork the repository and use a feature branch. Pull requests are welcome.

License
-------
This project is licensed under the MIT License.
