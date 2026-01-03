import React from 'react';
import './App.css';

function Privacy() {
  return (
    <div className="container" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
      <div className="main-content" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff' }}>Privacy Policy</h1>
        <p style={{ color: '#888', marginBottom: '3rem' }}>Last Updated: January 2, 2026</p>
        
        <div style={{ color: '#d1d1d1', lineHeight: '1.8' }}>
          
          <h3>1. Introduction</h3>
          <p>
            Welcome to Aervo ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have 
            a positive experience on our mobile application (the "App") and website. This policy outlines our practices 
            regarding the collection, use, and disclosure of your information.
          </p>

          <h3>2. Information We Collect</h3>
          <p>We collect the following types of information to provide and improve our services:</p>
          <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Account Information:</strong> When you register, we collect your name, email address, and password to secure your account.</li>
            <li><strong>Travel Inputs:</strong> We store the itinerary details you manually input (such as locations, dates, and times). <strong>Note:</strong> We do not have direct access to your official airline or hotel bookings, and we do not process ticket reservations directly.</li>
            <li><strong>Photos and Media:</strong> With your permission, we may access your photo library to allow you to add cover photos to your trips or memories.</li>
            <li><strong>Notifications:</strong> We may send you push notifications to remind you of upcoming itinerary events or flight times. You can enable or disable these permissions in your device settings.</li>
          </ul>

          <h3>3. Location Information</h3>
          <p>
            To provide features like "Nearby Gems," travel suggestions, and itinerary mapping, we may request access to your 
            device's geolocation. You can enable or disable this access at any time through your device settings. 
          </p>

          <h3>4. Community and Collaboration</h3>
          <p>
            <strong>Public Trips:</strong> If you choose to mark a trip as "Public," the itinerary locations will be visible to other users. 
            However, to protect your privacy:
          </p>
          <ul style={{ marginLeft: '1.5rem', marginBottom: '10px' }}>
             <li>Exact calendar dates are hidden and replaced with generic days (e.g., "Day 1", "Day 2").</li>
             <li>You have the option to hide your name and budget information from public view.</li>
          </ul>
          <p>
            <strong>Group Collaboration:</strong> When you invite specific users to join a private trip, you grant them full access 
            to view and edit that itinerary. We are not responsible for how your invited collaborators use or share this information.
          </p>

          <h3>5. How We Use Artificial Intelligence (AI)</h3>
          <p>
            Aervo uses artificial intelligence technologies to generate travel recommendations. 
            Data you input into the AI planner (such as destination and dates) is processed to provide these services. 
            We do not use your personal identifiable information (PII) to train public AI models.
          </p>

          <h3>6. Data Security</h3>
          <p>
            We implement industry-standard security measures (via Google Firebase) to protect your personal information 
            from unauthorized access, alteration, or destruction. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h3>7. Deletion of Data</h3>
          <p>
            You have the right to request the deletion of your account and all associated data. 
            You can perform this action directly within the App's settings menu or by contacting us.
          </p>

          <h3>8. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at: <br/>
            <strong style={{ color: '#fff' }}>support@aervo.co</strong>
          </p>
          
          <br />
          <br />
          <a href="/" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 'bold' }}>&larr; Back to Aervo Home</a>
        </div>

      </div>
      
      <footer className="footer" style={{ width: '100%', textAlign: 'center', borderTop: '1px solid #222' }}>
        <p>© 2026 Aervo LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Privacy;