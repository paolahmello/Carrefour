
# Carrefour Project

## Overview

This project is a full-stack application that includes a frontend built with React and a backend built with Node.js, Express, and Sequelize. The application provides user and address management functionalities.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Structure](#project-structure)
3. [Setting Up the Project](#setting-up-the-project)
4. [Running the Project](#running-the-project)
5. [API Endpoints](#api-endpoints)
6. [Frontend Features](#frontend-features)
7. [Troubleshooting](#troubleshooting)

## Prerequisites

- Docker
- Docker Compose

## Project Structure

\`\`\`
carrefour
├── backend
│   ├── config
│   │   └── config.json
│   ├── migrations
│   │   └── first_migration.js
│   ├── models
│   │   ├── address.js
│   │   ├── index.js
│   │   └── user.js
│   ├── src
│   │   ├── controllers
│   │   │   ├── addressController.js
│   │   │   └── userController.js
│   │   ├── routes
│   │   │   ├── address.js
│   │   │   └── user.js
│   │   ├── app.js
│   │   └── models
│   │       ├── address.js
│   │       ├── index.js
│   │       └── user.js
│   ├── .env
│   ├── .dockerignore
│   ├── Dockerfile
│   ├── package.json
│   └── wait-for-db.sh
├── frontend
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src
│   │   ├── components
│   │   │   ├── AddressForm.js
│   │   │   ├── UserEdit.js
│   │   │   ├── UserForm.js
│   │   │   ├── UserList.js
│   │   ├── pages
│   │   │   ├── Home.js
│   │   │   ├── UserPage.js
│   │   ├── api.js
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│   │   ├── routes.js
│   │   └── setupTests.js
│   ├── Dockerfile
│   ├── package.json
│   └── README.md
├── docker-compose.yml
└── package.json
\`\`\`

## Setting Up the Project

### Backend

1. Navigate to the backend directory:
    \`\`\`sh
    cd carrefour/backend
    \`\`\`

2. Install dependencies:
    \`\`\`sh
    npm install
    \`\`\`

3. Set up environment variables in the \`.env\` file (if not already present):
    \`\`\`
    DB_USER=user
    DB_PASSWORD=pass
    DB_NAME=dbpost
    DB_HOST=db
    DB_DIALECT=postgres
    \`\`\`

4. Run database migrations:
    \`\`\`sh
    npx sequelize-cli db:migrate
    \`\`\`

### Frontend

1. Navigate to the frontend directory:
    \`\`\`sh
    cd carrefour/frontend
    \`\`\`

2. Install dependencies:
    \`\`\`sh
    npm install
    \`\`\`

## Running the Project

### Using Docker Compose

1. Navigate to the root directory of the project where \`docker-compose.yml\` is located.
2. Start the project using Docker Compose:
    \`\`\`sh
    docker-compose up
    \`\`\`

### Without Docker Compose

#### Backend

1. Navigate to the backend directory:
    \`\`\`sh
    cd carrefour/backend
    \`\`\`

2. Start the backend server:
    \`\`\`sh
    npm start
    \`\`\`

#### Frontend

1. Navigate to the frontend directory:
    \`\`\`sh
    cd carrefour/frontend
    \`\`\`

2. Start the frontend server:
    \`\`\`sh
    npm start
    \`\`\`

## API Endpoints

### Users

- \`GET /api/users\` - Get all users
- \`GET /api/users/:id\` - Get user by ID
- \`POST /api/users\` - Create a new user
- \`PUT /api/users/:id\` - Update user by ID
- \`DELETE /api/users/:id\` - Delete user by ID

### Addresses

- \`GET /api/addresses\` - Get all addresses
- \`GET /api/addresses/:id\` - Get address by ID
- \`POST /api/addresses\` - Create a new address
- \`PUT /api/addresses/:id\` - Update address by ID
- \`DELETE /api/addresses/:id\` - Delete address by ID

## Frontend Features

- **Home Page**: Displays a welcome message.
- **User Management**: List, create, edit, and delete users.
- **Address Management**: List, create, edit, and delete addresses.

## Troubleshooting

- Ensure all dependencies are installed by running \`npm install\` in both the backend and frontend directories.
- Verify the \`.env\` file contains correct database credentials.
- Check the Docker containers are running and healthy using \`docker ps\`.
- If there are CORS issues, ensure the backend allows requests from the frontend's origin.
