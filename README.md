# Employee Management System (GraphQL API)

## 📌 Project Overview
This project is a **GraphQL-based Employee Management System** backend developed using **Node.js, Express, GraphQL, and MongoDB**. It supports user authentication, employee management, and querying employee data.

## 🚀 Features
- User Signup & Login with JWT authentication
- CRUD operations for Employee management
- Query employees by ID, designation, or department
- Secure password encryption using bcryptjs
- Validation using express-validator
- Fully tested API with Postman & GraphiQL

## 🛠️ Technologies Used
- **Backend**: Node.js, Express.js, GraphQL, Apollo Server
- **Database**: MongoDB (Mongoose ORM)
- **Authentication**: JSON Web Token (JWT), bcryptjs
- **Validation**: express-validator
- **Version Control**: Git & GitHub


## 🔧 Setup & Installation

### **1. Clone the Repository**
```bash
git clone https://github.com/karnprajapati/COMP3133_101416014_Assignment1.git
cd COMP3133_101416014_Assignment1
```

### **2. Install Dependencies**
```bash
npm install
```


### **3. Start the Server**
```bash
node server.js
```
OR with **nodemon**:
```bash
npx nodemon server.js
```
Server should now be running on:
```
http://localhost:4000/graphql
```

## 📌 API Testing
You can test the API using **Postman** or **GraphQL Playground (GraphiQL)**.

### **Postman Testing**
1. Open Postman
2. Create a **New Request**
3. **Method:** `POST`
4. **URL:** `http://localhost:4000/graphql`
5. **Headers:**
   ```
   Content-Type: application/json
   ```
6. **Example Queries & Mutations**
   - **Signup User:**
     ```json
     {
       "query": "mutation { signup(username: \"karn\", email: \"karn@example.com\", password: \"password\") { token user { id username email } } }"
     }
     ```
   - **Login User:**
     ```json
     {
       "query": "mutation { login(email: \"karn@example.com\", password: \"password\") { token user { id username } } }"
     }
     ```

## 📸 Screenshots
### ✅ MongoDB Console Screenshots
- Screenshot of MongoDB database showing collections

### ✅ Postman API Testing Screenshots
- **Signup API Response**
- <img width="468" alt="image" src="https://github.com/user-attachments/assets/8bf355e4-c705-4310-a250-7cf6c0ee610d" />

- **Login API Response**
- <img width="468" alt="image" src="https://github.com/user-attachments/assets/f2beaa2e-ba6b-4832-bf07-a877249605af" />

- **Get Employees Query Response**
- <img width="468" alt="image" src="https://github.com/user-attachments/assets/1c1c6f66-65a7-46ec-84e8-68f9bae4485d" />

- **Create Employee Mutation Response**
- <img width="468" alt="image" src="https://github.com/user-attachments/assets/81f148ab-74ea-4cf5-91b4-7b1798ffaa3b" />

- **Update Employee Mutation Response**
- <img width="468" alt="image" src="https://github.com/user-attachments/assets/6dd24c0e-c408-4f9a-af63-09d39025bf75" />

- **Delete Employee Mutation Response**
<img width="468" alt="image" src="https://github.com/user-attachments/assets/8959e61e-f71a-4f44-a4d4-638268004cb1" />

### ✅ GraphQL Playground Screenshots
- Running queries & mutations in GraphiQL
<img width="1710" alt="Screenshot 2025-02-16 at 3 48 46 PM" src="https://github.com/user-attachments/assets/8436e7d4-35ef-4d9a-bfe2-8b5a9fe3a4cd" />

## 📤 Deployment
If hosted, provide the **URL to your deployed API** (e.g., on Render, Heroku, or Vercel).

## 🔗 GitHub Repository
[COMP3133_101416014_Assignment1](https://github.com/karnprajapati/COMP3133_101416014_Assignment1)


---
🎯 **Developed by Karn Prajapati** | **COMP3133 - Full Stack Development** | **George Brown College** 🚀

