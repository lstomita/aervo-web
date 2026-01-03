import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Support() {
  return (
    <div className="container" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
      <div className="main-content" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff' }}>Aervo Support</h1>
        <p style={{ color: '#b0b0b0', fontSize: '1.2rem', marginBottom: '3rem' }}>
          We are here to help.
        </p>
        
        <div className="card" style={{ width: '100%', maxWidth: '100%', textAlign: 'left' }}>
          <h3 style={{ marginTop: 0 }}>Contact Us</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            If you have any questions, feedback, or need assistance with your account, please email our support team directly.
          </p>
          
          <a href="mailto:support@aervo.co" className="cta-button" style={{ 
            display: 'inline-block', 
            textDecoration: 'none',
            fontSize: '1rem',
            padding: '0.8rem 2rem'
          }}>
            Email support@aervo.co
          </a>
        </div>

        <div style={{ marginTop: '3rem', color: '#d1d1d1' }}>
          <h3>Frequently Asked Questions</h3>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <strong>How do I delete my account?</strong>
            <p style={{ color: '#888', marginTop: '0.5rem' }}>
              You can delete your account directly inside the app settings. If you cannot access the app, please email us with the subject line "Account Deletion Request."
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <strong>When is the iOS app launching?</strong>
            <p style={{ color: '#888', marginTop: '0.5rem' }}>
              We are working hard and targeting a full release in 2026. 
            </p>
          </div>
        </div>
        
        <br />
        <br />
        <Link to="/" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 'bold' }}>&larr; Back to Home</Link>

      </div>
      
      <footer className="footer" style={{ width: '100%', textAlign: 'center', borderTop: '1px solid #222' }}>
        <p>© 2026 Aervo LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Support;