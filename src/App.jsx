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
        <p className="tagline">The AI Travel Planner</p>
        
        <div className="card">
          <h2>Coming Soon to iOS</h2>
          <p>
            We are building the future of travel planning. Craft detailed 
            itineraries in seconds with the power of AI.
          </p>
          <button className="cta-button">App Store Launching 2026</button>
        </div>

        {/* NEW: The Phone Preview */}
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
          <a href="#">Support</a>
        </div>
      </footer>
    </div>
  )
}

export default App