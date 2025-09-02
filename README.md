# 🛍️ MERN E-Commerce Website

A full-stack **E-Commerce application** built with the **MERN stack (MongoDB, Express, React, Node.js)**.  
This project is designed as a practice project to learn how to build scalable web applications with authentication, product listings, cart functionality, and payment integration.

---

## 🚀 Features

- 🔑 User authentication (Register / Login with JWT)
- 👕 Product listing, search, and categories
- 🛒 Shopping cart & checkout
- 💳 Payment integration (Razorpay / Stripe)
- 📦 Order history
- 🖥️ Admin panel for managing products & orders
- 📱 Responsive UI with React + Tailwind

---

## 🏗️ Tech Stack

**Frontend**

- React (Vite or CRA)
- React Router
- Context API / Redux (state management)
- TailwindCSS

**Backend**

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt.js (password hashing)

**Other Tools**

- Nodemon (for hot reloading backend)
- Axios (API requests)
- Razorpay / Stripe SDK (for payments)

---

## 📂 Project Structure

mern-ecommerce/
│ README.md
│ package.json
│ server.js
│
├───backend
│ └───src
│ ├───config
│ ├───controllers
│ ├───models
│ ├───routes
│ ├───middleware
│ └───utils
│
└───client
└───src
├───components
├───pages
├───context
├───hooks
└───services
