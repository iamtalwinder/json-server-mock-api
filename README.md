# json-server-mock-api

[Blog Post](https://talwinder.tech/blog/building-mock-api-with-json-server)

## Table of Contents
- [JSON server mock API](#json-server-mock-api)
    - [Overview](#overview)
    - [Features](#features)
    - [Project Structure](#project-structure)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Seeding the Database](#seeding-the-database)
    - [API Endpoints](#api-endpoints)
    - [Running with docker](#running-with-docker)
    - [Contributing](#contributing)
    - [Contact](#contact)


## Overview
`json-server-mock-api` is a demonstration project that provides a practical example of integrating authentication into a JSON Server mock API. This project not only illustrates how to secure mock API routes but also demonstrates best practices for setting up a mock server and generating dynamic, realistic data using Faker.

## Features
- **Authentication Integration**: Implement authentication in JSON Server to protect API routes.
- **Best Practices for Mocking**: Structured approach to setting up a mock API server.
- **Data Generation with Faker**: Use Faker to generate dynamic, realistic data for the mock API.


## Project Structure

```bash
    src
      - db
         -- db.json
         -- index.js
         -- seed-data.js
      - middleware
         -- authenticate.js
      - routes
         -- auth.js
      - config.js
      - server.js
```

**Explanation:**

- **`/src` Directory**: The main source code of the project.

  - **`/db`**: Contains files related to the mock database.
    - `db.json`: The mock database file, which JSON Server uses to create the API.
    - `index.js`: Central file for database configurations or exports.
    - `seed-data.js`: A script to generate and populate `db.json` with dynamic data using Faker.

  - **`/middleware`**: Holds middleware functions.
    - `authenticate.js`: The authentication middleware to protect certain API routes.

  - **`/routes`**: Contains files defining various API routes.
    - `auth.js`: Manages authentication-related routes, like login and token validation.

  - `config.js`: A configuration file for the project, possibly including settings like database paths, API keys, or environment-specific configurations.

  - `server.js`: The main server file where JSON Server is configured and started. This file integrates all the routes, middleware, and database configurations.

## Prerequisites
Before starting, ensure you have the following installed:
- Node.js
- npm
- docker - if running with docker

## Installation
To set up the project on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/iamtalwinder/json-server-mock-api.git
   ```

2. Change directory to the project folder:
    ```bash
    cd json-server-mock-api
    ```

3. Install the required npm packages:
    ```bash
    npm install
    ```

## Seeding the Database

The project uses Faker to generate mock data:

1. Run the seeding script to generate `db.json` with fake data:
    ```bash
    npm run seed:data
    ```
2. Running the Server

To start the mock API server:

```bash
npm start
```

The server will run on http://localhost:3000.

## API Endpoints

- /login: For handling authentication requests.
- /register: For creating user

- Protected routes db.json:
  - /users: Access user data.
  - /posts: Retrieve posts data.
  - /comments: Fetch comments data.

- /protected: A custom route demonstrating protected data access.

## Running with docker

1. Clone the repository:
   ```bash
   git clone https://github.com/iamtalwinder/json-server-mock-api.git
   ```

2. Change directory to the project folder:
    ```bash
    cd json-server-mock-api
    ```

3. Build the image
    ```bash
    docker build -t json-server-mock-api .
    ```

4. Run project
    ```bash
    docker run -p 3000:3000 json-server-mock-api
    ```

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact
Talwinder Singh - [Email](mailto:singhtalwinder790@gmail.com)
