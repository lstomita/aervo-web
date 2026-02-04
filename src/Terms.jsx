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
          <a href="/" style={styles.homeLink} aria-label="Back to Home">Back to Home</a>
        </div>
      </nav>

      <div style={styles.contentWrapper}>
        {/* 2. HEADER SECTION */}
        <div style={styles.headerSection}>
          <h1 style={styles.pageTitle}>Terms of Service</h1>
          <p style={styles.lastUpdated}>Last Updated: February 2, 2026</p>
          <div style={styles.gradientLine}></div>
        </div>

        {/* 3. CONTENT CARD */}
        <div style={styles.card}>
          <div style={styles.prose}>
            
            <Section title="1. Acceptance of Terms">
              <p>By creating an account, accessing, or using the Aervo mobile application and website (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Service. Aervo is operated by Aervo LLC ("we," "us," or "our").</p>
              
              <p style={{marginTop: '1rem'}}><strong>Privacy:</strong> Your use of the Service is also subject to our <a href="/privacy" style={styles.link}>Privacy Policy</a>, which explains how we collect, use, and protect your personal information. By using the Service, you consent to the practices described in the Privacy Policy.</p>
            </Section>

            <Section title="2. Eligibility & Age Restrictions">
              <p>You must be at least 13 years old to use the Service (or older where required by local law). If you are under 18, you represent that you have your parent or guardian's permission to use the Service. If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.</p>
            </Section>

            <Section title="3. We Are Not a Travel Agency">
              Aervo is a technology platform for planning and organizing travel itineraries. We are <strong>not</strong> a travel agency, tour operator, or carrier.
              <ul style={styles.list}>
                <li style={styles.listItem}><strong>Informational Purposes Only:</strong> Flight times, hotel prices, business hours, and operational status of locations displayed in the App (or input by you) are estimates. We do not guarantee the accuracy or timeliness of this data.</li>
                <li style={styles.listItem}><strong>Your Responsibility:</strong> You are solely responsible for verifying all travel details (including visa requirements, health advisories, and flight schedules) directly with the service providers before traveling.</li>
              </ul>
            </Section>

            <Section title="4. Navigation and Location Data">
              The "Go" and "Navigate" features in Aervo utilize third-party services (such as Google Maps and Apple Maps) to provide directions.
              <ul style={styles.list}>
                <li style={styles.listItem}><strong>No Warranty of Accuracy:</strong> We provide destination coordinates to these third-party apps for your convenience. We do not control the routing, safety, or accuracy of the navigation provided by Google or Apple.</li>
                <li style={styles.listItem}><strong>Safety Warning:</strong> You acknowledge that map data may differ from actual real-world conditions (e.g., road closures, construction, or unsafe areas). You agree to exercise judgment and prioritize personal safety. <strong>Aervo LLC is not liable for any injury, loss, or damage occurring while traveling to a location found or stored within the App.</strong></li>
              </ul>
            </Section>

            <Section title="5. User Conduct and Public Content">
              Aervo allows you to create "Public Trips" visible to other users. To maintain a safe community, you agree strictly to the following:
              <ul style={styles.list}>
                <li style={styles.listItem}><strong>Prohibited Content:</strong> You may not upload content that is illegal, abusive, harassing, hateful, sexually explicit, or fraudulent.</li>
                <li style={styles.listItem}><strong>No Sensitive Data:</strong> Do not include sensitive personal information (such as booking confirmation numbers, home addresses, or phone numbers) in Public Trips or Public Notes. You are solely responsible for any personal information you choose to make publicly available.</li>
                <li style={styles.listItem}><strong>Acceptable Use:</strong> You may not attempt to reverse engineer, disrupt, overload, scrape, or bypass access controls of the Service.</li>
                <li style={styles.listItem}><strong>Zero Tolerance Policy:</strong> We maintain a zero-tolerance policy for objectionable content. We reserve the right to remove any content and <strong>immediately suspend or ban any user</strong> who violates these guidelines, without prior notice or refund.</li>
                <li style={styles.listItem}><strong>User Responsibility:</strong> You are solely responsible for the accuracy, completeness, and legality of any content you create, upload, or share through the Service.</li>
                <li style={styles.listItem}><strong>No Verification:</strong> We do not verify user-generated content and are not responsible for any reliance you may place on such content.</li>
              </ul>
            </Section>

            <Section title="6. Copyright Infringement and DMCA Policy">
              <p>We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes a copyright or other intellectual property infringement ("Infringement").</p>
              
              <p style={{marginTop: '1rem'}}><strong>DMCA Notice:</strong> If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, you must submit your notice in writing to <strong>support@aervo.co</strong>. A valid notice must include: (i) identification of the copyrighted work claimed to be infringed, (ii) identification of the infringing material, (iii) contact information of the complaining party, (iv) a statement of good-faith belief, and (v) a statement made under penalty of perjury that the information is accurate.</p>
              
              <p style={{marginTop: '1rem'}}><strong>Safe Harbor & Counter-Notice:</strong> Aervo LLC invokes the "Safe Harbor" provisions of the Digital Millennium Copyright Act (DMCA). We will take whatever action, in our sole discretion, we deem appropriate, including removal of the challenged content. If you believe your content was removed by mistake, you may submit a counter-notice to the same email address containing your contact info, identification of the removed material, and a statement under penalty of perjury that the removal was a mistake.</p>

              <p style={{marginTop: '1rem'}}><strong>Repeat Infringers:</strong> We reserve the right to terminate the accounts of users who are the subject of repeated copyright complaints.</p>
            </Section>

            <Section title="7. Account Suspension and Termination">
              <p>We reserve the right, at our sole discretion, to suspend or terminate your account at any time if you violate these Terms, engage in fraudulent or abusive behavior, or use the Service in a manner that may cause harm to other users or to Aervo LLC.</p>
              <p style={{marginTop: '0.5rem'}}>Upon termination, your right to access the Service will immediately cease. We may delete or retain your content in accordance with our legal obligations and internal policies. Aervo LLC is not liable for any loss of data resulting from account termination.</p>
            </Section>

            <Section title="8. Subscriptions and Billing">
              <ul style={styles.list}>
                <li style={styles.listItem}><strong>App Store Payments:</strong> All subscriptions (e.g., Aervo Pro) are processed directly by the Apple App Store or Google Play Store. We do not store or process your credit card information.</li>
                <li style={styles.listItem}><strong>Cancellations:</strong> To cancel a subscription, you must do so through your device's settings (Apple ID or Google Play Account). Uninstalling the app does not cancel your subscription.</li>
                <li style={styles.listItem}><strong>Refunds:</strong> Refund requests must be directed to Apple or Google, as we do not have the ability to process refunds for transactions made through their stores.</li>
              </ul>
            </Section>

            <Section title="9. Intellectual Property">
              <ul style={styles.list}>
                <li style={styles.listItem}><strong>Your Content:</strong> You retain ownership of the itineraries and photos you create. You represent and warrant that you own or have the necessary rights to use and authorize the use of all content you upload. By marking a trip as "Public," you grant Aervo a non-exclusive, royalty-free, worldwide, sublicensable, license to host, store, reproduce, display, distribute, and promote that content solely in connection with operating and improving the Service.</li>
                <li style={styles.listItem}><strong>Our Content:</strong> The Aervo logo, design, and code are the exclusive property of Aervo LLC.</li>
                <li style={styles.listItem}><strong>Unsplash Images:</strong> Photos provided via the Unsplash integration are subject to the <a href="https://unsplash.com/license" target="_blank" rel="noreferrer" style={styles.link}>Unsplash License</a>. You agree not to scrape, compile, or resell these images separately from the App, except as permitted by the Service and the Unsplash License.</li>
              </ul>
            </Section>

            <Section title="10. Third-Party Services & Links">
              The Service relies on third-party services and APIs (including Unsplash, Google Maps, and Apple Maps) and may contain links to external websites.
              <ul style={styles.list}>
                <li style={styles.listItem}><strong>Service Availability:</strong> Certain features rely on these third-party services; we are not responsible for outages, API changes, or functionality disruptions caused by these providers.</li>
                <li style={styles.listItem}><strong>Affiliate Disclosure:</strong> Aervo may earn a commission if you make a purchase through links to booking sites. This comes at no extra cost to you.</li>
                <li style={styles.listItem}><strong>No Endorsement:</strong> We are not responsible for the content, privacy policies, or practices of any third-party websites. You access them at your own risk.</li>
              </ul>
            </Section>

            <Section title="11. Disclaimer of Warranties">
              THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW, AERVO LLC DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES.
            </Section>

            <Section title="12. Limitation of Liability">
              <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL AERVO LLC, ITS FOUNDERS, EMPLOYEES, OR PARTNERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION:</p>
              <ul style={styles.list}>
                <li style={styles.listItem}><strong>PERSONAL INJURY OR PROPERTY DAMAGE</strong> RESULTING FROM YOUR TRAVELS.</li>
                <li style={styles.listItem}><strong>LOSS OF PROFITS, DATA, OR USE.</strong></li>
                <li style={styles.listItem}><strong>COSTS OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES</strong> (E.G., MISSED FLIGHTS OR HOTEL BOOKINGS).</li>
              </ul>
              <p style={{marginTop: '1rem'}}>IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU EXCEED THE AMOUNT YOU PAID TO US (IF ANY) IN THE SIX (6) MONTHS PRIOR TO THE CLAIM, OR FIFTY US DOLLARS ($50), WHICHEVER IS GREATER.</p>
            </Section>

            <Section title="13. Dispute Resolution">
              <p>PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT.</p>
              <ul style={styles.list}>
                <li style={styles.listItem}><strong>Binding Arbitration:</strong> Any dispute arising out of or relating to these Terms or the Service shall be resolved through binding arbitration administered by the American Arbitration Association (AAA) in accordance with its Consumer Arbitration Rules. The arbitration will be conducted remotely or in the State of Hawaii.</li>
                <li style={styles.listItem}><strong>Fees:</strong> Responsibility for paying filing, administrative, and arbitrator fees will be determined by AAA rules.</li>
                <li style={styles.listItem}><strong>No Class Actions:</strong> You and Aervo LLC agree that each may bring claims against the other only in your or its individual capacity and not as a plaintiff or class member in any purported class or representative proceeding.</li>
                <li style={styles.listItem}><strong>Opt-Out:</strong> You may opt out of this arbitration agreement within 30 days of the date you first accepted these Terms by emailing <a href="mailto:support@aervo.co" style={styles.link}>support@aervo.co</a>. Your request must include your full name, the email address associated with your Aervo account, and a clear statement that you wish to opt out of arbitration.</li>
                <li style={styles.listItem}><strong>Severability:</strong> If the class action waiver is found to be unenforceable, this specific arbitration provision shall be null and void, and the dispute shall be decided in court.</li>
              </ul>
            </Section>

            <Section title="14. Governing Law">
              These Terms shall be governed by the laws of the State of Hawaii, without regard to its conflict of law provisions.
            </Section>

            <Section title="15. Modifications to the Service">
              We reserve the right to modify, suspend, or discontinue the Service (or any part thereof, including Public Trips, Smart Scan, or Offline Access) at any time with or without notice. You agree that Aervo LLC shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the Service.
            </Section>

            <Section title="16. Changes to These Terms">
              We may update these Terms from time to time to reflect changes in the Service or applicable laws. When we do, we will update the “Last Updated” date at the top of the Terms. Your continued use of the Service after any changes constitutes acceptance of the revised Terms.
            </Section>

            <Section title="17. Contact Us">
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

// PROFESSIONAL STYLES
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

export default Terms;