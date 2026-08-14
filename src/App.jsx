import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import './styles/theme.css'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme === 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <Router>
      <Layout darkMode={darkMode} toggleTheme={toggleTheme}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
