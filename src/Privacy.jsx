import React from 'react';
import './App.css';

function PrivacyPolicy() {
  return (
    <div style={styles.pageContainer}>
      
      {/* 1. PROFESSIONAL HEADER */}
      <nav style={styles.navbar}>
        <div style={styles.navContent}>
          <div style={styles.brand}>
            {/* Make sure icon-192.png is in your 'public' folder */}
            <img src="/icon-192.png" alt="Aervo Logo" style={styles.logo} />
            <span style={styles.brandName}>Aervo</span>
          </div>
          <a href="/" style={styles.homeLink} aria-label="Back to Home">Back to Home</a>
        </div>
      </nav>

      <div style={styles.contentWrapper}>
        {/* 2. HEADER SECTION */}
        <div style={styles.headerSection}>
          <h1 style={styles.pageTitle}>Privacy Policy</h1>
          <p style={styles.lastUpdated}>Last Updated: February 2, 2026</p>
          <div style={styles.gradientLine}></div>
        </div>

        {/* 3. CONTENT CARD */}
        <div style={styles.card}>
          <div style={styles.prose}>
            
            <Section title="1. Introduction">
              <p>Welcome to Aervo ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our mobile application (the "App") and website. This policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
              <p style={{marginTop: '1rem'}}>We may update this Privacy Policy from time to time. When we do, we will update the "Last Updated" date at the top of this policy. Your continued use of the Service after any changes constitutes your acceptance of the revised Privacy Policy.</p>
            </Section>

            <Section title="2. Information We Collect">
              <p>We collect the following types of information to provide and improve our services:</p>
              <ul style={styles.list}>
                <li style={styles.listItem}><strong>Account Information:</strong> When you register, we collect your name, email address, and password to secure your account.</li>
                <li style={styles.listItem}><strong>Subscription & Transaction Data:</strong> We store data regarding your subscription status (e.g., "Free" or "Pro") and transaction identifiers to manage your access to premium features. We do <strong>not</strong> store your raw credit card information, which is processed securely by Apple or Google.</li>
                <li style={styles.listItem}><strong>Travel Inputs & Drafts:</strong> We store the itinerary details and saved places ("Bucket List" items) you manually input (such as locations, dates, and times). This includes Draft Trips (incomplete or "Sandbox" itineraries), which are saved to our secure cloud servers to allow you to resume planning across devices.</li>
                <li style={styles.listItem}><strong>Notifications:</strong> We may send you push notifications to remind you of upcoming itinerary events or flight times. You can enable or disable these permissions in your device settings.</li>
                <li style={styles.listItem}><strong>Usage & Interaction Data:</strong> We track your interactions with the App, including search queries, features used, and interactions with the community (such as "cloning" or "viewing" public trips). We may use analytics and crash-reporting tools (such as Firebase Analytics or Crashlytics) to understand app performance and improve reliability. These tools may collect device identifiers and pseudonymous usage information.</li>
                <li style={styles.listItem}><strong>Information We Do Not Collect:</strong> We do not collect sensitive personal data such as government-issued identification numbers, biometric data, or precise real-time location tracking unless explicitly enabled for specific features. Location access is used only while the App is in use (when granted); we do not track location in the background.</li>
              </ul>
            </Section>

            <Section title="3. Location Information">
              <p>To provide features like "Nearby Gems," travel suggestions, and interactive itinerary mapping, we may request access to your device's geolocation while the App is in use. You can enable or disable this access at any time through your device settings.</p>
            </Section>

            <Section title="4. Community and Collaboration">
              <p><strong>Public Trips:</strong> If you choose to mark a trip as "Public," the itinerary details (including locations, author name, and avatar) will be visible to other users on the platform and via shared web links. By making a trip public, you acknowledge and agree that:</p>
              <ul style={styles.list}>
                <li style={styles.listItem}>Exact calendar dates are hidden and replaced with relative days (e.g., "Day 1", "Day 2") to protect your security.</li>
                <li style={styles.listItem}><strong>Private Data Exclusion:</strong> Fields specifically marked as "Private Notes" are <strong>automatically hidden</strong> from the public view.</li>
                <li style={styles.listItem}><strong>Optional Anonymity:</strong> You may toggle settings to hide your Username/Avatar and Trip Budget from the public view while keeping the itinerary public.</li>
                <li style={styles.listItem}>Other users may <strong>View</strong> and <strong>Clone</strong> (copy) your itinerary structure into their own account.</li>
                <li style={styles.listItem}>You retain the right to revert a trip to "Private" or delete it at any time, which will revoke public access.</li>
              </ul>
              <p style={{marginTop: '1rem'}}><strong>Group Collaboration:</strong> When you invite specific users to join a private trip, you grant them Editor access. Editors can view and modify itinerary items and view private notes. Only the Trip Owner can delete the trip or manage permissions.</p>
            </Section>

            <Section title="5. How We Use Artificial Intelligence (AI)">
              <p>We use AI services (such as Google Gemini) to process images you upload (e.g., screenshots of tickets or reservations) for the purpose of automatically extracting and autofilling itinerary details ("Smart Scan"). Data processed for this feature is transient and is not used by us or our AI partners to train public AI models.</p>
            </Section>

            <Section title="6. Third Party Services & Affiliate Links">
              <p><strong>Unsplash Integration:</strong> We use Unsplash to provide image search functionality for trip covers. When you search for a destination photo, your search term is sent to Unsplash to retrieve relevant images. We do not intentionally send your name, email, or itinerary contents to Unsplash—only the search query needed to retrieve images. Unsplash's collection and use of this data is governed by their <a href="https://unsplash.com/privacy" target="_blank" rel="noreferrer" style={styles.link}>Privacy Policy</a>.</p>
              <p style={{marginTop: '1rem'}}><strong>Affiliate Links:</strong> Our App may contain links to third-party websites (e.g., airline or hotel booking sites). If you click on these links, we may earn an affiliate commission. We are not responsible for the privacy practices or content of these third-party sites.</p>
            </Section>

            <Section title="7. Google Maps Integration">
              <p>Our application uses the Google Maps API(s) to display interactive maps and location data. By using these features, you agree to be bound by <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" style={styles.link}>Google’s Terms of Service</a> and <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" style={styles.link}>Google’s Privacy Policy</a>.</p>
            </Section>

            <Section title="8. Data Security">
              <p>We implement industry-standard security measures (via Google Firebase) to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure, and we cannot guarantee absolute security.</p>
            </Section>

            <Section title="9. Deletion of Data">
              <p>You have the right to request the deletion of your account and all associated data. You can perform this action directly within the App's settings menu or by contacting us. We retain personal data only as long as necessary to provide the Service or comply with legal obligations.</p>
            </Section>

            <Section title="10. Children's Privacy">
              <p>Aervo is not intended for use by children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will delete it.</p>
            </Section>

            <Section title="11. Contact Us">
              If you have any questions about this Privacy Policy, please contact us at: <br/>
              <a href="mailto:support@aervo.co" style={{...styles.link, fontSize: '1.1rem'}}>support@aervo.co</a>
            </Section>

          </div>
        </div>
      </div>
      
      <footer style={styles.footer}>
        <p>© 2026 Aervo LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Helper Component
const Section = ({ title, children }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h3 style={styles.sectionTitle}>{title}</h3>
    <div style={styles.text}>{children}</div>
  </div>
);

// PROFESSIONAL STYLES (Identical to Terms)
const styles = {
  pageContainer: {
    backgroundColor: '#09090b',
    minHeight: '100vh',
    color: '#e4e4e7',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  navbar: {
    width: '100%',
    padding: '1rem 0',
    backgroundColor: 'rgba(9, 9, 11, 0.8)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    display: 'flex',
    justifyContent: 'center',
  },
  navContent: {
    width: '100%',
    maxWidth: '800px',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logo: {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
  },
  brandName: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.5px',
  },
  homeLink: {
    color: '#a1a1aa',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'color 0.2s',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: '800px',
    padding: '3rem 20px',
    flex: 1,
  },
  headerSection: {
    marginBottom: '3rem',
    textAlign: 'left',
  },
  pageTitle: {
    fontSize: '3rem',
    fontWeight: '800',
    color: '#fff',
    marginBottom: '0.5rem',
    letterSpacing: '-1px',
  },
  lastUpdated: {
    color: '#71717a',
    fontSize: '0.95rem',
    marginBottom: '1.5rem',
  },
  gradientLine: {
    height: '4px',
    width: '60px',
    borderRadius: '2px',
    background: 'linear-gradient(90deg, #6366F1 0%, #a855f7 100%)',
  },
  card: {
    backgroundColor: '#18181b',
    borderRadius: '16px',
    padding: '3rem',
    border: '1px solid rgba(255,255,255,0.05)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    textAlign: 'left',
  },
  prose: {
    lineHeight: '1.75',
    color: '#d4d4d8',
    textAlign: 'left',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#fff',
    marginBottom: '1rem',
    letterSpacing: '-0.5px',
  },
  text: {
    fontSize: '1rem',
    color: '#d4d4d8',
  },
  list: {
    paddingLeft: '1.2rem',
    marginTop: '0.5rem',
  },
  listItem: {
    marginBottom: '0.5rem',
  },
  link: {
    color: '#818cf8',
    textDecoration: 'none',
    fontWeight: '600',
  },
  footer: {
    width: '100%',
    textAlign: 'center',
    padding: '2rem 0',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    color: '#52525b',
    fontSize: '0.85rem',
    marginTop: 'auto',
  }
};

export default PrivacyPolicy;