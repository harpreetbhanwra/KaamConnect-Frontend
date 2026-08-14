import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Find the Right Person for Every Job</h1>
            <p className="hero-subtitle">
              Discover trusted professionals, skilled workers and experts near you.
            </p>

            <div className="hero-search">
              <div className="search-input-group">
                <input 
                  type="text" 
                  placeholder="What service do you need?" 
                  className="search-input"
                />
                <button className="btn btn-primary">Find Professionals</button>
              </div>
              <div className="location-badge">
                <span>📍</span>
                <span>Near me</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="popular-services">
        <div className="container">
          <h2>Popular Services</h2>
          <div className="services-grid">
            {[
              { icon: '👨‍🏫', name: 'Teacher' },
              { icon: '🔌', name: 'Electrician' },
              { icon: '🔧', name: 'Mechanic' },
              { icon: '💻', name: 'Developer' },
              { icon: '👨‍🍳', name: 'Cook' },
              { icon: '🧹', name: 'Housekeeper' },
              { icon: '🚗', name: 'Driver' },
              { icon: '🏗️', name: 'Mason' },
            ].map((service) => (
              <Link key={service.name} to="#" className="service-card">
                <div className="service-icon">{service.icon}</div>
                <div className="service-name">{service.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Mode Feature */}
      <section className="dual-mode">
        <div className="container">
          <div className="dual-mode-content">
            <h2>One Account. Multiple Possibilities.</h2>
            <div className="dual-mode-visual">
              <div className="mode-box hire">
                <div className="mode-icon">👤</div>
                <h3>Hire People</h3>
              </div>
              <div className="mode-separator">↕</div>
              <div className="mode-box professional">
                <div className="mode-icon">🧑‍🔧</div>
                <h3>Provide Your Skills</h3>
              </div>
            </div>
            <p className="dual-mode-text">
              Use one Kaam Connect account to hire professionals and build your own professional career.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2>How Kaam Connect Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h4>Create Your Account</h4>
              <p>Sign up in minutes with your email or phone number.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h4>Find or Offer Services</h4>
              <p>Search for professionals or create your professional profile.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h4>Connect & Communicate</h4>
              <p>Chat directly with professionals and finalize the details.</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h4>Complete & Review</h4>
              <p>Complete the work and leave honest reviews.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to get started?</h2>
            <p>Join thousands of people hiring and providing services on Kaam Connect.</p>
            <div className="cta-buttons">
              <Link to="#" className="btn btn-primary btn-lg">Find Professionals</Link>
              <Link to="#" className="btn btn-secondary btn-lg">Create Professional Profile</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
