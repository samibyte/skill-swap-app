<h1 align="center">
  <a href="#">SkillSwap</a>
</h1>

<h3 align="center">A modern platform to exchange skills and learn collaboratively 🌐</h3>

<p align="center">

  <img alt="Stars" src="https://img.shields.io/github/stars/samibyte/skillswap?style=social">

  <a href="https://github.com/adnanakanda">
    <img alt="made by samiByte" src="https://img.shields.io/badge/made%20by-samibyte-0a66c2">
  </a>
</p>

<h4 align="center"> 
	✅ Status: Finished & Deployed
</h4>

<p align="center">
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#how-it-works">How it works</a> • 
 <a href="#tech-stack">Tech Stack</a> •
 <a href="#installation">Installation</a>
</p>

---

## 🎥 Live Demo

🔗 **Check out the live project here:**  
👉 [https://skill-swap-here.web.app](https://skill-swap-here.web.app)

---

## 🧩 About

**SkillSwap** is a fully responsive, Firebase-powered React application designed to help users **exchange skills**. Whether you want to learn guitar, teach photography, or swap coding lessons — SkillSwap connects individuals through skill-sharing.

The app features **modern UI**, **authentication**, **theme toggling**, and **dynamic content rendering**, all built with a focus on clarity and minimalism.

---

## 🌟 Features

- [x] Firebase Authentication (Email/Password + Google Sign-In)
- [x] Protected private routes with smooth redirects
- [x] Persistent Dark/Light Theme Toggle
- [x] Global user state management using React Context API
- [x] Toast notifications for all key actions (sign-in, sign-out, etc.)
- [x] Route-based loader for enhanced UX
- [x] Modern and responsive design built with Tailwind CSS
- [x] Animated sections using AOS (Animate on Scroll)
- [x] Reusable, modular components with clean structure
- [x] JSON-based dynamic data (Recent Swaps, Community Stats)
- [x] Fully deployment-ready (Vercel / Netlify)

---

## ⚙️ How-it-works

SkillSwap consists of **authentication**, **public pages**, and **private pages** connected through route protection and dynamic UI interactions.

### 🏠 Home Page

- "Hero section"
- "How It Works" steps using a sticky step layout.
- "Community Stats"
- "Recent Swaps"
- Minimal call-to-action section.

### 👤 Authentication Pages

- **Login / Register** with Firebase integration.
- Secure user session persistence.
- Error handling and success feedback with toasts.

### ⚙️ Private Routes

- Auth-only pages accessible after login.
- Smooth redirection for unauthorized access.
- Persistent state across reloads.

### 🎨 Theme Toggle

- Interactive button in the navbar switches between light/dark modes.
- Saves theme preference locally for next visits.
- Icon updates dynamically to reflect the theme (☀️ / 🌙).

### 🪄 Animations & UX

- Scroll-triggered animations with **AOS**.
- Loading indicator on route change.
- Consistent feedback through **React Hot Toast**.

---

## 🧠 Pre-requisites

Before running the project, make sure you have installed:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/)
- A code editor like [VS Code](https://code.visualstudio.com/)

---

## 🧩 Installation

```bash
# Clone this repository
$ git clone https://github.com/samibyte/skill-swap-app.git

# Navigate into the project directory
$ cd skill-swap-app

# Install dependencies
$ npm install

# Create a .env file and add your Firebase credentials
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id

# Run the development server
$ npm run dev

# The app will open on http://localhost:5173
```

---

## 🛠️ Tech Stack

| Category               | Technology / Tool                                                          |
| ---------------------- | -------------------------------------------------------------------------- |
| **Frontend Framework** | [React (Vite)](https://vitejs.dev/)                                        |
| **Routing**            | [React Router v7](https://reactrouter.com/)                                |
| **Styling**            | [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/) |
| **Authentication**     | [Firebase Authentication](https://firebase.google.com/docs/auth)           |
| **State Management**   | React Context API                                                          |
| **Icons**              | [Lucide React](https://lucide.dev/)                                        |
| **Animations**         | [AOS](https://michalsnik.github.io/aos/)                                   |
| **Notifications**      | [React Hot Toast](https://react-hot-toast.com/)                            |
| **Loading Spinner**    | [React Spinners](https://www.npmjs.com/package/react-spinners)             |
| **Slider**             | [Swiper](https://swiperjs.com/react)                                       |
| **Deployment**         | [Vercel](https://vercel.com/) / [Netlify](https://www.netlify.com/)        |
| **Version Control**    | [Git](https://git-scm.com/) + [GitHub](https://github.com/)                |

---

## 🧭 Future Enhancements

- 🔍 Skill-based search and filtering system
- 💬 Real-time chat between skill partners
- 🗓️ Booking system with session scheduling
- 🧾 Reputation & badge system
- 🌍 Global community challenges and leaderboard

---

## 👨‍💻 Author

**samiByte**

📧 [samibyte.web@gmail.com](mailto:samibyte.web@gmail.com)

> _"Learn, teach, and grow — one swap at a time."_
