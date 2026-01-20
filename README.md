## Aim of the Project
The aim of this project is to understand and implement state management in React using Context API and Redux Toolkit by building a role-based login and cart application.


# Context API & Redux Toolkit – Login and Cart Application
A React application demonstrating authentication using Context API and product/cart management using Redux Toolkit.


## Project Description

This project is a React-based web application developed to demonstrate the use of **Context API** and **Redux Toolkit** for state management.

Authentication-related state such as login status, user name, and role is managed using **React Context API**, while product and cart data is managed using **Redux Toolkit**.

The application supports role-based access where an **Admin user** can add and delete products with prices, and a **Normal user** can view products, add them to the cart, and see the total cart price. A profile page is also included to display logged-in user details.

The project focuses on understanding separation of concerns, scalable state management, and real-world React application structure.

## Features

- User Login and Logout functionality
- Authentication state managed using Context API
- Role-based access (Admin and User)
- Admin can add and delete products with price
- Users can view products and add them to cart
- Cart displays total price dynamically
- Profile page to display user information
- Clean and modular React component structure

  ## State Management Approach

- **Context API** is used for authentication-related state such as:
  - Login status
  - User name
  - User role (Admin / User)

- **Redux Toolkit** is used for application-wide data such as:
  - Product list
  - Cart items
  - Cart total price

This separation ensures clean architecture and better scalability.

## User Roles

### Admin
- Can add products with price
- Can delete products

### Normal User
- Can view products
- Can add products to cart
- Can view total cart price

## How to Test the Application

- Login as Admin to add and delete products
- Login as User to add products to cart
- Verify total price calculation in cart
- Check profile page for user details
 
<img width="1470" height="956" alt="Screenshot 2026-01-20 at 12 20 19 PM" src="https://github.com/user-attachments/assets/5e2fb9ae-40f0-40fd-93d3-f738d2dcc8cf" />
- Redux Toolkit used for product and cart management

Sreenshots
<img width="1470" height="956" alt="Screenshot 2026-01-20 at 12 20 19 PM" src="https://github.com/user-attachments/assets/574164da-70f5-4977-85a<img width="1470" height="956" alt="Screenshot 2026-01-20 at 12 21 53 PM" src="https://github.com/user-attachments/assets/7b120e58-9277-47ae-8664-85fbc2556df1" />
a-8238f1c50d4b" />

## Conclusion

This project successfully demonstrates the use of Context API and Redux Toolkit together in a React application. It helped in understanding scalable state management, component structure, and deployment workflow.

## Learning Outcomes

After completing this project, I was able to:
- Understand the difference between Context API and Redux Toolkit
- Manage authentication state using Context API
- Manage global product and cart state using Redux Toolkit
- Implement role-based access control
- Structure a scalable React application
- Deploy a React application using Netlify




