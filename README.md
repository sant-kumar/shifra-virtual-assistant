# Shifra Virtual Assistant 🎙️🤖

Shifra is an **AI-powered virtual assistant** built with **React (Vite)**, **Google Gemini API**, and **Text-to-Speech (TTS)** integration.  
It understands **voice commands**, responds in **English or Hindi**, and provides real-time answers with a modern, responsive UI.  
The project is deployed on **Netlify** for seamless accessibility.

---

## 🚀 Live Demo
👉 [Shifra Virtual Assistant](https://santvirtualassistant.netlify.app/)

---

## ✨ Features
- 🎙️ **Voice Commands** – Ask anything via speech input  
- 🧠 **AI Responses** – Powered by Google Gemini API  
- 🗣️ **Text-to-Speech** – Replies back in English or Hindi  
- 📅 **Date & Time Support** – Speaks current date & time naturally  
- 🎨 **Modern Responsive UI** – Styled with CSS for a clean look  
- 📱 **Mobile Friendly** – Works smoothly on all devices  
- ☁️ **Deployed on Netlify** – Accessible anytime  

---

## 🛠️ Tech Stack
- **Frontend:** React (Vite), CSS  
- **AI Integration:** Google Gemini API  
- **Voice:** Web Speech API (Speech Recognition & TTS)  
- **Deployment:** Netlify  
- **Version Control:** Git & GitHub  

---

## 📂 Project Structure
Shifra/
│── dist/ # Production build files
│── node_modules/ # Dependencies
│── public/ # Static public assets
│── src/
│ ├── assets/ # Images & GIFs
│ │ ├── ai.png
│ │ ├── aiVoice.gif
│ │ ├── logo.png
│ │ ├── react.svg
│ │ └── speak.gif
│ ├── Context/ # Context API for state management
│ │ └── UserContext.jsx
│ ├── App.css # Global app styles
│ ├── App.jsx # Main app component
│ ├── gemini.js # Gemini API integration
│ ├── index.css # Entry CSS file
│ ├── main.jsx # Application entry point
│── .gitignore # Ignore unnecessary files
│── eslint.config.js # ESLint configuration
│── index.html # Main HTML template
│── package-lock.json # Lockfile for dependencies
│── package.json # Project metadata & scripts
│── README.md # Documentation
│── vite.config.js # Vite configuration



## ⚡ How to Run Locally
1. Clone the repository  
   ```bash
   git clone https://github.com/sant-kumar/shifra-virtual-assistant.git
   cd shifra-virtual-assistant
Install dependencies

bash
npm install

npm run dev