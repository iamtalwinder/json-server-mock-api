# json-server-mock-api

## Overview
`json-server-mock-api` is a demonstration project that provides a practical example of integrating authentication into a JSON Server mock API. This project not only illustrates how to secure mock API routes but also demonstrates best practices for setting up a mock server and generating dynamic, realistic data using Faker.

## Features
- **Authentication Integration**: Implement authentication in JSON Server to protect API routes.
- **Best Practices for Mocking**: Structured approach to setting up a mock API server.
- **Data Generation with Faker**: Use Faker to generate dynamic, realistic data for the mock API.

## Prerequisites
Before starting, ensure you have the following installed:
- Node.js (Recommended version X or higher)
- npm (Recommended version X or higher)

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

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact
Talwinder Singh - [Email](mailto:singhtalwinder790@gmail.com)
