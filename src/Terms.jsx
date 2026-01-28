import React from 'react';
import './App.css';

function Terms() {
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
          <a href="/" style={styles.homeLink}>Back to Home</a>
        </div>
      </nav>

      <div style={styles.contentWrapper}>
        {/* 2. HEADER SECTION */}
        <div style={styles.headerSection}>
          <h1 style={styles.pageTitle}>Terms of Service</h1>
          <p style={styles.lastUpdated}>Last Updated: January 27, 2026</p>
          <div style={styles.gradientLine}></div>
        </div>

        {/* 3. CONTENT CARD */}
        <div style={styles.card}>
          <div style={styles.prose}>
            
            <Section title="1. Acceptance of Terms">
              By creating an account, accessing, or using the Aervo mobile application and website (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Service. Aervo is operated by Aervo LLC ("we," "us," or "our").
            </Section>

            <Section title="2. We Are Not a Travel Agency">
              Aervo is a technology platform for planning and organizing travel itineraries. We are <strong>not</strong> a travel agency, tour operator, or carrier.
              <ul style={styles.list}>
                <li style={styles.listItem}><strong>Informational Purposes Only:</strong> Flight times, hotel prices, business hours, and operational status of locations displayed in the App (or input by you) are estimates. We do not guarantee the accuracy or timeliness of this data.</li>
                <li style={styles.listItem}><strong>Your Responsibility:</strong> You are solely responsible for verifying all travel details (including visa requirements, health advisories, and flight schedules) directly with the service providers before traveling.</li>
              </ul>
            </Section>

            <Section title="3. Navigation and Location Data">
              The "Go" and "Navigate" features in Aervo utilize third-party services (such as Google Maps and Apple Maps) to provide directions.
              <ul style={styles.list}>
                <li style={styles.listItem}><strong>No Warranty of Accuracy:</strong> We provide destination coordinates to these third-party apps for your convenience. We do not control the routing, safety, or accuracy of the navigation provided by Google or Apple.</li>
                <li style={styles.listItem}><strong>Safety Warning:</strong> You acknowledge that map data may differ from actual real-world conditions (e.g., road closures, construction, or unsafe areas). You agree to exercise judgment and prioritize personal safety. <strong>Aervo LLC is not liable for any injury, loss, or damage occurring while traveling to a location found or stored within the App.</strong></li>
              </ul>
            </Section>

            <Section title="4. User Conduct and Public Content">
              Aervo allows you to create "Public Trips" visible to other users. To maintain a safe community, you agree strictly to the following:
              <ul style={styles.list}>
                <li style={styles.listItem}><strong>Prohibited Content:</strong> You may not upload content that is illegal, abusive, harassing, hateful, sexually explicit, or fraudulent.</li>
                <li style={styles.listItem}><strong>Zero Tolerance Policy:</strong> We maintain a zero-tolerance policy for objectionable content. We reserve the right to remove any content and <strong>immediately suspend or ban any user</strong> who violates these guidelines, without prior notice or refund.</li>
                <li style={styles.listItem}><strong>Reporting:</strong> Users may report objectionable content via the "Report" feature. We will review and act on reported content within 24 hours.</li>
              </ul>
            </Section>

            <Section title="5. Subscriptions and Billing">
              <ul style={styles.list}>
                <li style={styles.listItem}><strong>App Store Payments:</strong> All subscriptions (e.g., Aervo Pro) are processed directly by the Apple App Store or Google Play Store. We do not store or process your credit card information.</li>
                <li style={styles.listItem}><strong>Cancellations:</strong> To cancel a subscription, you must do so through your device's settings (Apple ID or Google Play Account). Uninstalling the app does not cancel your subscription.</li>
                <li style={styles.listItem}><strong>Refunds:</strong> Refund requests must be directed to Apple or Google, as we do not have the ability to process refunds for transactions made through their stores.</li>
              </ul>
            </Section>

            <Section title="6. Intellectual Property">
              <ul style={styles.list}>
                <li style={styles.listItem}><strong>Your Content:</strong> You retain ownership of the itineraries and photos you create. By marking a trip as "Public," you grant Aervo a non-exclusive, royalty-free license to display, distribute, and promote that content within the Service.</li>
                <li style={styles.listItem}><strong>Our Content:</strong> The Aervo logo, design, and code are the exclusive property of Aervo LLC.</li>
              </ul>
            </Section>

            <Section title="7. Third-Party Links and Affiliates">
              The Service may contain links to third-party websites (e.g., hotel booking sites).
              <ul style={styles.list}>
                <li style={styles.listItem}><strong>Affiliate Disclosure:</strong> Aervo may earn a commission if you make a purchase through these links. This comes at no extra cost to you.</li>
                <li style={styles.listItem}><strong>No Endorsement:</strong> We are not responsible for the content, privacy policies, or practices of any third-party websites. You access them at your own risk.</li>
              </ul>
            </Section>

            <Section title="8. Disclaimer of Warranties">
              THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW, AERVO LLC DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES.
            </Section>

            <Section title="9. Limitation of Liability">
              <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL AERVO LLC, ITS FOUNDERS, EMPLOYEES, OR PARTNERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION:</p>
              <ul style={styles.list}>
                <li style={styles.listItem}><strong>PERSONAL INJURY OR PROPERTY DAMAGE</strong> RESULTING FROM YOUR TRAVELS.</li>
                <li style={styles.listItem}><strong>LOSS OF PROFITS, DATA, OR USE.</strong></li>
                <li style={styles.listItem}><strong>COSTS OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES</strong> (E.G., MISSED FLIGHTS OR HOTEL BOOKINGS).</li>
              </ul>
              <p style={{marginTop: '1rem'}}>IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU EXCEED THE AMOUNT YOU PAID TO US (IF ANY) IN THE SIX (6) MONTHS PRIOR TO THE CLAIM, OR FIFTY US DOLLARS ($50), WHICHEVER IS GREATER.</p>
            </Section>

            <Section title="10. Governing Law">
              These Terms shall be governed by the laws of the State of Delaware, without regard to its conflict of law provisions.
            </Section>

            <Section title="11. Contact Us">
              If you have any questions about these Terms, please contact us at: <br/>
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

// PROFESSIONAL STYLES (Identical to Privacy Policy for consistency)
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
    textAlign: 'left', // <--- ADD THIS (Forces all card content to left)
  },
  prose: {
    lineHeight: '1.75',
    color: '#d4d4d8',
    textAlign: 'left', // <--- ADD THIS (Double safety for text)
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

export default Terms;