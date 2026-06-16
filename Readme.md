
<img width="1917" height="1026" alt="image" src="https://github.com/user-attachments/assets/76fbb9f7-027d-4831-b658-842fd86c98ba" />

<img width="1918" height="1017" alt="image" src="https://github.com/user-attachments/assets/a2ba84a9-8139-49f5-924c-211eb2aaef5e" />

<img width="1917" height="1023" alt="image" src="https://github.com/user-attachments/assets/f1544bd0-f917-44bd-93f7-032fbb7cd172" />


Advanced E-Commerce RESTful API

A highly structured, secure, and scalable E-Commerce Backend RESTful API built with Node.js, Express.js, and MongoDB. This project follows industry best practices, implementing a modular architecture (Separation of Concerns), robust security mechanisms, and comprehensive error handling.

🌟 Key Features

1. Product & Catalog Management

Full CRUD Operations: Specialized endpoints for managing products, categories, subcategories, and brands.

SEO-Friendly URLs: Automatic generation of slugified URLs (e.g., /products/nike-air-max) using slugify.

Advanced Querying: Supporting future implementation of filtering, sorting, pagination, and search.

2. Ratings & Reviews System

User Reviews: Allows authenticated users to leave reviews and star ratings for products.

Dynamic Calculations: Automatically computes and updates the product's ratingsAverage and ratingsQuantity upon adding, updating, or deleting reviews.

3. User & Authentication (JWT)

Secure Auth: User registration and login utilizing secure JSON Web Tokens (JWT) for session control.

Password Hashing: Utilizing bcryptjs for strong one-way hashing of user passwords before saving them to the database.

Role-Based Access Control (RBAC): Restricting sensitive endpoints (like adding/modifying products) to administrative users (Admin / Manager).

4. Wishlist & Cart Management

Wishlist: Enables users to add/remove products to/from their personal favorites list.

Shopping Cart (Pipeline): Robust logic to manage cart items, calculate totals, and prepare checkouts.

5. Media Uploads & Image Processing

Multer Integration: Standardized file uploading for product image galleries and user profiles.

Image Preprocessing (Sharp/Multer-based): Auto-resizing and quality-optimizing of uploaded images to reduce storage size and guarantee fast page load times.

🛠️ Tech Stack & Tools

Runtime Environment: Node.js

Backend Framework: Express.js

Database: MongoDB (using Mongoose as Object Data Modeling - ODM)

Security & Hashing: JWT (jsonwebtoken) & bcryptjs

File Uploads: Multer

Validation: Express-Validator

📂 Project Architecture

The project follows a clean MVC-like (Modular) Architecture separating concerns logically:

├── config/              # Application configuration files
├── controllers/         # Business logic for route handling (e.g., productController.js)
├── middlewares/         # Express middlewares (auth, validation, global error handling)
├── models/              # Mongoose Schemas and Models (User, Product, Review, etc.)
├── routes/              # Express Router files (productRoutes.js, authRoutes.js)
├── utils/               # Utility functions and helper classes (catchAsync.js)
├── app.js               # Express application initialization and config setup
├── database.js          # Database connection module
├── variables.env        # Environment variables configuration (ignored in git)
└── package.json         # Project dependencies and script scripts


🚀 Getting Started

Prerequisites

Make sure you have Node.js and MongoDB installed on your local machine.

Installation

Clone the Repository:

git clone https://github.com/YoussefMDev/E-Commerce-API.git
cd E-Commerce-API


Install Dependencies:

npm install


Configure Environment Variables:
Create a file named variables.env in the root directory and add the following:

DATABASE_URL=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_super_secure_jwt_secret_key
JWT_EXPIRES_IN=90d


Run the Server:

For Development (with live-reload):

npm run dev


For Production:

npm start


🔗 Key API Endpoints (Quick Reference)

Method

Endpoint

Description

Access

GET

/api/products

Retrieve all products (populated with categories/reviews)

Public

POST

/api/products

Create a new product

Admin / Manager

GET

/api/products/:id

Get details of a single product

Public

PATCH

/api/products/:id

Update product details

Admin / Manager

DELETE

/api/products/:id

Remove a product

Admin

🛡️ Error Handling Strategy

The application features a centralized global error-handling middleware. Using the custom catchAsync utility wrapper, all asynchronous controller errors are safely caught and forwarded to the central error handler, preventing unhandled promise rejections and keeping the application running robustly.

👨‍💻 Author

Youssef - Backend Developer

GitHub: @YoussefMDev
