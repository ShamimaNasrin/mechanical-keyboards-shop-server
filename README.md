# KeyClicks

### Live URL: &nbsp; &nbsp; [keyclicks.vercel.app](https://mechanical-keyboards-server.vercel.app)

## Introduction

KeyClicks is a backend server application for an e-commerce platform dedicated to mechanical keyboard enthusiasts. Designed to support a smooth and enjoyable shopping experience, this server handles the heavy lifting of data management, user authentication, and API interactions, providing a solid foundation for the client-side application.

## Project Overview

KeyClicks' server-side application is built with Node.js and Express, powered by a MongoDB database for robust data storage. It provides the essential APIs for managing products, user data, shopping carts, and orders. This backend application is designed to be highly scalable, offering efficient data retrieval and secure operations to meet the demands of a modern e-commerce platform.

## Key Features

- **Product Management**: APIs for CRUD operations on mechanical keyboard products.
- **User Management**: Endpoints for managing user data and authentication.
- **Cart & Checkout**: Backend logic for managing shopping carts and processing orders.
- **Inventory Management**: Tools for tracking product availability and updating stock levels.
- **Validation**: Strong schema validation using Zod to ensure data integrity.

## Technology Stack

- **Backend**: Node.js, Express, MongoDB, Mongoose, Zod
- **State Management**: Redux Toolkit and RTK Query
<!-- - **Authentication**: JWT-based authentication -->
- **Validation**: Zod for data validation and schema enforcement

## Installation Instructions

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v22.1.0 or higher)
- npm (v10.7.0 or higher)

### Setup and Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/ShamimaNasrin/mechanical-keyboards-shop-server.git
   cd mechanical-keyboards-shop-server
   ```

2. **Install Dependencies**:

   ```bash
   npm i
   ```

3. **Create and Configure Environment Variables**:

   Create a `.env` file in the root of the project and add the following environment variables:

   ```bash
   NODE_ENV=development
   PORT=5000
   DATABASE_URL=your-database-url
   ```

4. **Run the app**:

   ```bash
   npm run start:dev
   ```

## Usage

Once the server is running, it will expose various API endpoints to be consumed by the frontend application. These endpoints include routes for managing products, users, carts, and orders. You can interact with these endpoints using tools like Postman or through the frontend client.

### Example API Endpoints

- **GET /api/products**: Retrieve a list of all products.
- **POST /api/cart**: Add items to the user's cart.
- **POST /api/order**: Place an order with the items in the cart.

Make sure to replace `your-database-url` with the actual MongoDB connection string. The server listens on port `5000` by default but can be configured to use any available port via the `.env` file.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.
