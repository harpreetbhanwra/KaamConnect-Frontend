import Header from '../components/Header'
import Footer from '../components/Footer'
import './Layout.css'

const Layout = ({ children, darkMode, toggleTheme }) => {
  return (
    <div className="layout">
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <main className="layout-main">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
