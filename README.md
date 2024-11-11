# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Table of Contents
[Overview](#overview)
[Features](#features)
[Project_Structure](#project-structure)
[Installation](#installation)
[Usage](#usage)
[API_Endpoints](#API-endpoints)
[Technologies](#technologies)
[Contributing](#contributing)
[Pizza_API](#Pizza-API)
[License](#license)

---

## Overview

This is a web-based pizza ordering application that enables users to browse a menu, add items to a cart, delete items from cart, empty cart, create new orders, and view the status of their placed orders. The app is built using React with React Router for routing, and leverages server-side API endpoints to manage menu data and order processing. Error handling is also integrated to manage unexpected issues.

---

## Features

    . Browse Menu: View available pizzas and details such as ingredients, pricing, and availability.
    . Add to Cart: Select menu items to add to a shopping cart.
    . Place an Order: Create a new order by entering contact and address details.
    . Order Tracking: View order details and track order status by order ID.
    . Error Handling: Graceful error messages for improved user experience.

---

## Project Structure

    ├── features
    │ ├── menu # Menu listing and loading logic
    │ ├── cart # Cart handling and display logic
    │ ├── order # Order creation, viewing, and updating logic
    │ ├── user # User creation, viewing, and updating logic
    ├── ui
    │ ├── Home.jsx # Home page layout
    │ ├── Error.jsx # Error page layout
    │ ├── Button.jsx # Custom Button component
    │ ├── LinkButton.jsx # Custom Link Button component for page navigation
    │ ├── Loader.jsx # Loader function layout
    │ ├── Header.jsx # Header page layout
    │ ├── AppLayout.jsx # Main layout component for the app
    ├── services
    │ ├── apiGeocoding.js # Fetches a user longitude and latitude for precise location/address
    │ ├── apiRestaurant.js # Makes multiple requests(GET, POST, PATCH)
    ├── utilities
    │ ├── helpers.js # Date, Time and Currency Fomatter
    ├── App.jsx # Main application file with router configuration
    └── README.md # Project documentation

---

## Installation

        - Prerequisites
            . Node.js
            . npm or yarn
            . React
            . Tailwind
            . vite

      Steps to clone the repository:
      - bash
      - git clone https://github.com/bryt11/fast-pizza-ordering-app.git
      - cd fast-pizza-ordering-app
      - Install dependencies:
            - bash
            - npm install
      - Start the development server:
            - npm start
      - Access the application at http://localhost:${YOUR_PORT}.

---

## Usage

    . Home: Navigate to the home page for an introduction.
    . Menu: View all pizzas available, with detailed descriptions.
    . Cart: After adding items, proceed to view the cart.
    . Create Order: Enter order details and place an order.
    . Order Tracking: After placing an order, navigate to /order/:orderId to view the order details.

---

## API Endpoints

    . GET /api/menu: Fetches the pizza menu.
    . POST /api/order: Creates a new order.
    . GET /api/order/:orderId
        : Retrieves details of a specific order by ID.
    . PATCH /api/order/:orderId
        : Updates an existing order by ID.

---

## Technologies

    . Frontend: React, React Router, JSX, CSS, Tailwind CSS
    . Data Management: JSON-based data handling for menu and orders
    . Other Libraries: React Router DOM for client-side routing, environment configurations, etc.

---

## Contributing

    - Contributions are welcome! Please follow these steps:
    - Fork the repository.
        * Create a new feature branch (git checkout -b feature-branch).
        * Commit changes (git commit -m 'Add new feature').
        * Push to your branch (git push origin feature-branch).
        * Open a Pull Request.

---

## Pizza API

    - Access the application at https://github.com/bryt11/pizza-api.git.

---

## License

This project is licensed under the MIT License. See the LICENSE file for more
[LICENSE](LICENSE)details.
