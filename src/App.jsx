import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
/* Import the image */
import appScreen from './assets/app-screen.png'

function App() {
  return (
    <div className="container">
      <div className="main-content">
        <h1 className="app-name">Aervo</h1>
        
        {/* CHANGED: Broader focus, less AI-heavy */}
        <p className="tagline">The Future of Travel Itineraries</p>
        
        <div className="card">
          <h2>Coming Soon to iOS</h2>
          {/* CHANGED: Highlights specific features: Planning, Groups, & Scanning */}
          <p>
            The ultimate platform for collaborative travel. Plan detailed trips with friends, 
            manage shared budgets, and instantly import bookings with our smart scanner.
          </p>
          <button className="cta-button">App Store Launching 2026</button>
        </div>

        {/* The Phone Preview */}
        <div className="phone-preview-container">
          <div className="phone-frame">
            <img src={appScreen} alt="Aervo App Interface" className="app-screen" />
          </div>
        </div>

      </div>
      
      <footer>
        <p className="copyright">© 2026 Aervo LLC. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <span className="divider">|</span>
          <Link to="/support">Support</Link>
        </div>
      </footer>
    </div>
  )
}

export default App