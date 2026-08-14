import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Kaam Connect</h4>
            <p>Har Kaam Ke Liye Sahi Insaan</p>
            <p className="tagline">Connect Skills With Opportunities</p>
          </div>

          <div className="footer-section">
            <h5>For Customers</h5>
            <ul>
              <li><a href="#">Find Professionals</a></li>
              <li><a href="#">How it Works</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Safety</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h5>For Professionals</h5>
            <ul>
              <li><a href="#">Earn Money</a></li>
              <li><a href="#">Create Profile</a></li>
              <li><a href="#">Growth Tips</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h5>Company</h5>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Kaam Connect. All rights reserved.</p>
          <div className="social-links">
            <a href="#" title="Facebook">f</a>
            <a href="#" title="Twitter">𝕏</a>
            <a href="#" title="LinkedIn">in</a>
            <a href="#" title="Instagram">📷</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
