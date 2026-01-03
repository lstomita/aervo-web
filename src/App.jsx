import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <main className="main-content">
        <div className="logo-area">
          {/* You can replace this text with your logo image later */}
          <h1 className="app-name">Aervo</h1>
          <p className="subtitle">The AI Travel Planner</p>
        </div>

        <div className="card">
          <h2>Coming Soon to iOS</h2>
          <p>
            We are building the future of travel planning. 
            Craft detailed itineraries in seconds with the power of AI.
          </p>
          {/* Optional: Add an email signup form here later */}
          <button className="cta-button" disabled>App Store Launching 2026</button>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Aervo LLC. All rights reserved.</p>
        <div className="links">
          <a href="#">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="#">Support</a>
        </div>
      </footer>
    </div>
  );
}

export default App;