# MERN Stack Project Setup Guide

## Introduction

This guide will help you set up and run a basic MERN stack (MongoDB, Express.js, React, Node.js) project on your local system.

---

## Prerequisites

Before starting, ensure that you have the following installed:

1. **Node.js** - Download and install the latest version of Node.js from [Node.js official website](https://nodejs.org/).
2. **MongoDB** - Set up MongoDB locally or use MongoDB Atlas (cloud service).
3. **Git** - Ensure Git is installed for version control and repository cloning.

---

## Project Structure

- `backend/`: Contains the Node.js/Express API for the server.
- `frontend/`: Contains the React client for the frontend.
- `database`: Configuration for MongoDB.
  
---

## Steps to Start the Project

### 1. Clone the Repository

```bash
git clone <repository-url>
```

Navigate into the project directory:
```bash
cd <project-directory>
```

### 2. Install Dependencies

Navigate to the `backend` folder and install the backend dependencies:

```bash
cd backend
npm install
```

Now, do the same for the frontend folder:

```bash
cd ../frontend
npm install
```

### 3. Set Up MongoDB

Ensure MongoDB is running. If using MongoDB Atlas, update your connection string in the `.env` file of the `backend` folder.

For local MongoDB:

```bash
mongod
```

### 4. Configure Environment Variables

In the `backend` folder, create a `.env` file and define the following variables:

```
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
```

Make sure to replace `<your-mongodb-connection-string>` and `<your-secret-key>` with your actual values.

### 5. Start the Backend Server

In the `backend` folder, run:

```bash
npm start
```

This will start the backend on the specified port.

### 6. Start the Frontend Client

In the `frontend` folder, run:

```bash
npm start
```

This will start the React application. Open your browser and go to `http://localhost:3000` to access the frontend.

### 7. Testing

Ensure both frontend and backend are running properly. Check if the app communicates with the API, and if data is being fetched/stored from/to MongoDB.

---

## Additional Notes

- **Backend Port**: By default, the backend runs on port `5000`, and the frontend runs on `3000`. Adjust ports in `.env` if necessary.
- **MongoDB**: If using MongoDB locally, you can set up a database using `mongo` shell or a MongoDB GUI (like, MongoDB Compass).
- **Frontend Proxy**: The React frontend proxies API requests to the backend, ensuring proper communication between both sides.

---

