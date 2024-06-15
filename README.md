# Candidate Search Application

This is a full-stack web application built with React.js and Express.js that allows users to search for candidates based on location and job role, and add new candidates to the database.

Deploy Application :- https://willowy-maamoul-554c69.netlify.app/  <br>
Backend Deployed :- https://recruit-backend-gwku.onrender.com/

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (assumed based on the usage of Mongoose in the backend)

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running (if using MongoDB as the database)

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   cd backend
   npm install
   
2.Set environment variables:

Create a .env file in the backend directory.
Define the following variables in the .env file:

    PORT=5000
    MONGODB_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
Start the backend server:

      npm start
This will start the Express server at http://localhost:5000.

Frontend Setup
Navigate back to the root folder (if you are in the backend folder):


      cd ..
Install frontend dependencies:

      npm install
      
Start the React development server:

      npm start
This will start the React development server at http://localhost:3000.      
