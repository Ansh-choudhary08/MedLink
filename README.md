# 🩺 MedLink — AI-Powered Healthcare Assistant

MedLink is an AI-driven healthcare platform designed to make healthcare access simpler and more convenient. It helps users understand their symptoms, discover suitable doctors, and manage appointments through a modern and user-friendly interface.

The platform combines an AI-powered symptom checker with doctor discovery and appointment management to provide users with a centralized healthcare experience.

---

## 🚀 Features

### 🤖 AI Symptom Checker

* Users can describe their symptoms in natural language.
* Provides preliminary health-related guidance.
* Helps users understand possible conditions.
* Designed to assist users before consulting a healthcare professional.

### 👨‍⚕️ Doctor Discovery

* Search and discover doctors based on available information.
* Browse doctor profiles and relevant details.
* Uses healthcare/doctor datasets to support doctor discovery.

### 📅 Appointment Booking

* Users can find suitable doctors and book appointments.
* Appointment information can be managed through the platform.
* Provides a streamlined booking experience.

### 🔐 Authentication

* Secure user registration and login.
* Protected user functionality.
* Authentication-based access to personalized features.

### 📊 User Dashboard

* Centralized dashboard for accessing healthcare features.
* View relevant user information and appointments.
* Easy navigation between different sections of the platform.

### 🎨 Modern UI

* Responsive and clean interface.
* Built with React and Tailwind CSS.
* Consistent healthcare-focused design system.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* JavaScript
* HTML5
* CSS3

### Backend

* Node.js
* Express.js
* REST API

### Database

* MongoDB

### AI & Data

* AI-powered symptom analysis
* Doctor/healthcare datasets
* NHRR doctor dataset
* Kaggle healthcare datasets

### Tools

* Git
* GitHub
* Postman
* VS Code

---

## 🏗️ Project Architecture

```text
                    ┌─────────────────────┐
                    │      User           │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │  + Tailwind CSS     │
                    └──────────┬──────────┘
                               │
                         REST API Calls
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Node.js +         │
                    │   Express Backend   │
                    └──────────┬──────────┘
                         ┌─────┴─────┐
                         │           │
                         ▼           ▼
                ┌─────────────┐ ┌─────────────┐
                │  MongoDB    │ │ AI / Health │
                │  Database   │ │   Data      │
                └─────────────┘ └─────────────┘
```

---

## 📁 Project Structure

```text
MedLink/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── README.md
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_MEDLINK_REPOSITORY.git
```

### 2. Navigate to the Project

```bash
cd MedLink
```

### 3. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 4. Install Backend Dependencies

Open another terminal:

```bash
cd backend
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=your_frontend_url
```

Do not commit your `.env` file to GitHub.

Make sure `.env` is included in `.gitignore`:

```text
.env
node_modules
```

---

## ▶️ Running the Application

### Start Backend

```bash
cd backend
npm run dev
```

or:

```bash
npm start
```

Backend will run on:

```text
http://localhost:5000
```

### Start Frontend

```bash
cd frontend
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

## 🔄 Application Flow

```text
User
  │
  ▼
Login / Register
  │
  ▼
Dashboard
  │
  ├──────────────► AI Symptom Checker
  │                      │
  │                      ▼
  │                Symptom Analysis
  │
  ├──────────────► Doctor Discovery
  │                      │
  │                      ▼
  │                Doctor Profiles
  │                      │
  │                      ▼
  │                Book Appointment
  │
  └──────────────► Appointments
```

---

## 🧠 AI Symptom Checker

The symptom checker allows users to enter their symptoms using natural language.

The system processes the provided symptoms and generates preliminary information that can help users better understand their situation.

> **Disclaimer:** MedLink is intended for informational and educational purposes only. It does not provide a medical diagnosis and should not replace professional medical advice.

---

## 👨‍⚕️ Doctor Discovery

MedLink uses healthcare-related datasets to support doctor discovery.

The platform can provide information such as:

* Doctor name
* Medical specialization
* Location
* Hospital/clinic information
* Available doctor details

The project uses publicly available healthcare datasets, including the **NHRR doctor dataset** and relevant Kaggle datasets.

---

## 📅 Appointment Management

Users can:

1. Search for a suitable doctor.
2. View doctor information.
3. Select an appointment.
4. Submit booking details.
5. Manage their appointments through the platform.

---

## 🎨 Design System

MedLink follows a clean healthcare-oriented visual design.

### Color Palette

| Color           | Hex       |
| --------------- | --------- |
| White           | `#FFFFFF` |
| Mindaro         | `#E4EE79` |
| Dark Slate Gray | `#273B37` |
| Timberwolf      | `#CBD2CE` |

The interface uses these colors to maintain a professional, accessible, and modern healthcare experience.

---

## 🔒 Security

The application implements authentication and protected API functionality.

Security considerations include:

* Password protection
* JWT-based authentication
* Protected routes
* Environment variables for sensitive credentials
* MongoDB security
* CORS configuration
* `.env` excluded from version control

---

## 📱 Responsive Design

MedLink is designed to work across different screen sizes:

* 💻 Desktop
* 📱 Mobile
* 📟 Tablet

The UI is built using responsive Tailwind CSS utilities.

---

## 🌐 Deployment

The application can be deployed using platforms such as:

### Frontend

* Vercel
* Netlify

### Backend

* Render

### Database

* MongoDB Atlas

---

## 🔮 Future Improvements

* Real-time doctor availability
* Video consultation
* Online prescription management
* Medical report uploads
* Patient medical history
* Emergency healthcare assistance
* Improved AI symptom analysis
* Doctor reviews and ratings
* Email/SMS appointment reminders
* Advanced doctor filtering
* Location-based doctor recommendations

---

## 🎯 Project Goals

The primary goals of MedLink are to:

* Improve accessibility to healthcare information.
* Help users find suitable doctors more easily.
* Provide preliminary symptom-related guidance.
* Simplify appointment booking.
* Create a centralized digital healthcare experience.
* Demonstrate the practical use of AI and full-stack web development.

---

## 👨‍💻 Developer

**Ansh Choudhary**

B.Tech — Computer Science Engineering

### Technologies

```text
React.js
Tailwind CSS
Node.js
Express.js
MongoDB
REST APIs
AI Integration
Git & GitHub
```

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is developed for educational and demonstration purposes.
