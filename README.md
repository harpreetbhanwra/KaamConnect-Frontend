# Kaam Connect - Frontend

**Har Kaam Ke Liye Sahi Insaan.**

**Connect Skills With Opportunities.**

Kaam Connect is a professional service marketplace built with React + Vite.

## 🏗️ Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── layouts/         # Layout components
├── routes/          # Route components & protected routes
├── services/        # API services
├── hooks/           # Custom React hooks
├── context/         # React context
├── styles/          # Global styles and theme
└── assets/          # Images, icons, etc.
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 📚 Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Styling**: CSS with CSS Variables (design tokens)
- **Node**: v16+

## 🎨 Design System

The application uses CSS variables for theming:

- **Primary Color**: Indigo (#4f46e5)
- **Accent Color**: Amber (#f59e0b)
- **Light Mode**: Clean whites and light grays
- **Dark Mode**: Dark neutrals with light text

Theme can be toggled in the header.

## 📝 Phases

### ✅ Phase 1 - Foundation
- React Vite frontend setup
- Homepage with hero section
- Design system with CSS variables
- Header & Footer components
- Basic routing structure
- API service setup
- Authentication hooks

### 🔜 Phase 2 - Authentication
Register, Login, Logout, JWT implementation

### 🔜 Phase 3 - Dual Mode
Hire/Professional mode switching

### 🔜 Phase 4 - Professional Profile
Profile creation and management

### 🔜 Phase 5 - Hire System
Search, filters, service requests

### 🔜 Phase 6 - Communication
Messages, notifications, reviews

### 🔜 Phase 7 - Help & Admin
Help desk, reports, admin dashboard

### 🔜 Phase 8 - Polish
Responsive design, animations, refinements

## 🔧 Backend Requirement

The backend API is built with:
- **Framework**: PHP Yii2
- **Database**: MySQL

Backend should be running on `http://localhost:8000`

## 📦 Build

```bash
# Production build
npm run build

# Preview production build
npm run preview
```

## 📄 License

All rights reserved - Kaam Connect
