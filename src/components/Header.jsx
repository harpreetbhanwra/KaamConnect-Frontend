import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({ darkMode, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-icon">🔗</div>
            <span className="logo-text">Kaam Connect</span>
          </Link>

          <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="#" className="nav-link">How it Works</Link>
            <Link to="#" className="nav-link">For Professionals</Link>
            <Link to="#" className="nav-link">Help</Link>
          </nav>

          <div className="header-actions">
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              title={darkMode ? 'Light mode' : 'Dark mode'}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            
            <Link to="#" className="btn btn-secondary btn-sm">
              Log In
            </Link>
            
            <Link to="#" className="btn btn-primary btn-sm">
              Join Now
            </Link>

            <button 
              className="mobile-menu-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
