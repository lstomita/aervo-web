import React from 'react';
import './App.css';

function Privacy() {
  return (
    <div className="container" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
      <div className="main-content" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff' }}>Privacy Policy</h1>
        <p style={{ color: '#888', marginBottom: '3rem' }}>Last Updated: January 18, 2026</p>
        
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
            <li><strong>Travel Inputs & Drafts:</strong> We store the itinerary details you manually input (such as locations, dates, and times). This includes <strong>Draft Trips</strong> (incomplete or "Sandbox" itineraries), which are saved to our secure cloud servers to allow you to resume planning across devices.</li>
            <li><strong>Travel Documents & Attachments:</strong> With your permission, you may upload media such as cover photos, or travel documents including <strong>receipts, confirmation PDFs, and boarding passes</strong>. We acknowledge that these documents may contain personally identifiable information (PII). By uploading these attachments, you agree that they will be stored securely on our cloud servers and <strong>will be visible to any user you explicitly invite to your trip as a Collaborator</strong>.</li>
            <li><strong>Notifications:</strong> We may send you push notifications to remind you of upcoming itinerary events or flight times. You can enable or disable these permissions in your device settings.</li>
            <li><strong>Usage & Interaction Data:</strong> We track your interactions with the App, including search queries, features used, and interactions with the community (such as "cloning" or "viewing" public trips).</li>
          </ul>

          <h3>3. Location Information</h3>
          <p>
            To provide features like "Nearby Gems," travel suggestions, and itinerary mapping, we may request access to your 
            device's geolocation. You can enable or disable this access at any time through your device settings. 
          </p>

          <h3>4. Community and Collaboration</h3>
          <p>
            <strong>Public Trips:</strong> If you choose to mark a trip as "Public," the itinerary details will be visible to other users on the platform. By making a trip public, you acknowledge and agree that:
          </p>
          <ul style={{ marginLeft: '1.5rem', marginBottom: '10px' }}>
             <li>Exact calendar dates are hidden and replaced with relative days (e.g., "Day 1", "Day 2") to protect your security.</li>
             <li><strong>Private Data Exclusion:</strong> Any uploaded attachments (files/images) and fields specifically marked as "Private Notes" are <strong>automatically hidden</strong> from the public view.</li>
             <li>Other users may <strong>View</strong> and <strong>Clone</strong> (copy) your itinerary structure into their own account.</li>
          </ul>
          <p>
          <strong>Group Collaboration:</strong> When you invite specific users to join a private trip, you grant them <strong>Editor access</strong>. Editors can view and modify itinerary items, view private notes, and <strong>view/access uploaded attachments</strong> (e.g., for shared access to tickets). Only the Trip Owner can delete the trip or manage permissions.
          </p>

          <h3>5. How We Use Artificial Intelligence (AI)</h3>
          <p>
            We use AI services (such as Google Gemini) to <strong>process images you upload</strong> (e.g., screenshots of tickets) for the purpose of automatically extracting and autofilling itinerary details ("Smart Scan").
            Data processed for this feature is transient and is not used by us or our AI partners to train public AI models.
          </p>

          <h3>6. Affiliate Links & Third Parties</h3>
          <p>
            Our App may contain links to third-party websites (e.g., airline or hotel booking sites). If you click on these links, we may earn an affiliate commission. We are not responsible for the privacy practices or content of these third-party sites.
          </p>

          <h3>7. Data Security</h3>
          <p>
            We implement industry-standard security measures (via Google Firebase) to protect your personal information 
            from unauthorized access, alteration, or destruction. Attachments are stored with restricted access rules, ensuring only authenticated members of a specific trip can download them.
          </p>

          <h3>8. Deletion of Data</h3>
          <p>
            You have the right to request the deletion of your account and all associated data. 
            You can perform this action directly within the App's settings menu or by contacting us.
          </p>

          <h3>9. Contact Us</h3>
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