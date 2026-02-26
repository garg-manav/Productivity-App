<h1 align="center">✨ Personal Productivity App</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge"/>
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite Badge"/>
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JS Badge"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3 Badge"/>
  <img src="https://img.shields.io/badge/License-MIT-success?style=for-the-badge" alt="MIT License"/>
</p>

<p align="center">
  <b>A modern, responsive, and intuitive task management application built with React and Vite.</b>
</p>

<br />

## 📖 Description

The **Personal Productivity App** is a beautifully designed, mobile-first web application that helps you stay organized. It allows users to quickly add tasks, categorize them by Work, Study, or Personal context, and track progress with a dynamic progress bar. With built-in LocalStorage persistence, your tasks and theme preferences remain saved even after closing the browser. 

---

## 🔗 Live Demo
[View Live Application](#) *(Placeholder Link)*

---

## 📸 Screenshots

| Light Mode | Dark Mode | Mobile View |
|:---:|:---:|:---:|
| ![Light Mode](images\Screenshot 2026-02-26 115407.png) | ![Dark Mode Screenshot](images\Screenshot 2026-02-26 115419.png) | ![Mobile View Screenshot](images\Screenshot 2026-02-26 115539.png) |

---

## ✨ Features

- **✅ Task Management:** Instantly add, edit, or delete tasks.
- **🏷️ Categorization:** Assign tasks to predefined categories (`Work`, `Study`, `Personal`).
- **💾 LocalStorage Persistence:** Tasks and settings are automatically saved locally on your device.
- **🌓 Dark Mode Toggle:** Seamlessly switch between a clean light theme and a sleek dark theme.
- **🔍 Smart Filtering:** Filter views by status (`All`, `Completed`, `Pending`) or by category.
- **📊 Dynamic Progress Bar:** Visually track your daily completion progress.
- **🖱️ Drag & Drop:** Easily reorder tasks to match your priorities.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React (bootstrapped with Vite for instant server start & fast HMR).
- **Language:** JavaScript (ES6+).
- **Styling:** CSS3 (Custom properties, Flexbox, media queries).
- **Data Persistence:** Browser LocalStorage API.
- **Drag & Drop:** `@dnd-kit/core` and `@dnd-kit/sortable`.

---

## 🎨 UI/UX Highlights

- **📱 Mobile-First & Responsive:** Fully optimized layout across mobile (320px+), tablet, and desktop screens.
- **💎 Clean Modern Design:** Glassmorphism accents, subtle box shadows, and custom colorful categories.
- **🎥 Smooth Animations:** Bouncy progress bar transitions, list item slide-in, and hover micro-interactions.
- **♿ Accessible Interactions:** Carefully scaled tap targets (min `44px`), distinct focus states, and high-contrast text rendering.

---

## 🚀 Installation & Setup

Want to run this project locally? Follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/garg-manav/productivity-app.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd productivity-app
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Navigate to `http://localhost:5173` (or the port specified by Vite).

---

## 📁 Folder Structure

```text
productivity-app/
├── public/                 # Static assets (favicons, etc.)
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Filters.jsx     # Filtering controls UI
│   │   ├── Header.jsx      # Top nav, dark mode toggle, progress bar
│   │   ├── TaskInput.jsx   # Input field and category selector
│   │   ├── TaskItem.jsx    # Individual task row with actions
│   │   └── TaskList.jsx    # DndContext wrapper for drag-and-drop
│   ├── App.jsx             # Main application logic & state container
│   ├── index.css           # Global variables & responsive typography
│   └── main.jsx            # React root injection
├── package.json            # Project metadata and scripts
└── vite.config.js          # Vite build configuration
```

---

## 🔮 Future Improvements

- [ ] **Authentication:** Allow users to log in and sync tasks across devices via a backend database (e.g., Firebase, Supabase).
- [ ] **Due Dates & Reminders:** Integrate calendar / date-picker logic to handle urgent tasks.
- [ ] **Custom Categories:** Allow users to create and color-code their own custom tags.
- [ ] **Analytics Dashboard:** Show task completion statistics over the past week/month.

---

<p align="center">
  <i>Built with ❤️ by an enthusiastic developer.</i>
</p>
