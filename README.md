Candidate Search Application
This application allows users to search for candidates based on location and job role, as well as add new candidates to the database.

Technologies Used
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB (assumed based on the usage of Mongoose in the backend)
Setup Instructions
Prerequisites
Node.js and npm installed on your machine
MongoDB installed and running (if using MongoDB as the database)
Backend Setup
Clone the repository:

bash
Copy code
git clone <repository-url>
cd <repository-folder>
Navigate to the backend folder:

bash
Copy code
cd backend
Install dependencies:

Copy code
npm install
Set environment variables:

Create a .env file in the backend directory.
Define the following variables in the .env file:
makefile
Copy code
PORT=5000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
Start the backend server:

sql
Copy code
npm start
This will start the Express server at http://localhost:5000.

Frontend Setup
Navigate back to the root folder (if you are in the backend folder):

bash
Copy code
cd ..
Install frontend dependencies:

Copy code
npm install
Start the React development server:

sql
Copy code
npm start
This will start the React development server at http://localhost:3000.

Usage
Search Candidates: Enter a location and job role in the search form and click "Search". Matching candidates will be displayed below.
Add Candidate: Enter the candidate's name, location, and job role in the add candidate form and click "Add Candidate". The candidate will be added to the database and displayed in the list of candidates.
API Documentation
GET /api/candidates: Retrieves candidates based on location and job role.

Parameters:
location (String): Location of the candidate.
jobRole (String): Job role of the candidate.
Headers:
x-auth-token (String): JWT token for authentication.
Response:
Returns an array of candidate objects matching the search criteria.
POST /api/candidates: Adds a new candidate to the database.

Body:
name (String): Name of the candidate.
location (String): Location of the candidate.
jobRole (String): Job role of the candidate.
Headers:
x-auth-token (String): JWT token for authentication.
Response:
Returns the newly created candidate object.
Folder Structure
/backend: Contains the Express.js backend server code.
/frontend: Contains the React.js frontend code.
Additional Notes
Make sure MongoDB is properly configured and running before starting the backend server.
Ensure all dependencies are installed by running npm install in both the backend and root directories.
