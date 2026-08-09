import React, { useState } from 'react';
import './index.css';
import logoImg from './assets/image.jpg';

// Link Cards Configuration with User's Exact Details
const socialLinks = [
  {
    id: 'instagram',
    label: 'Instagram',
    subtitle: 'Follow us @velos.kids_',
    iconClass: 'icon-instagram',
    url: 'https://www.instagram.com/velos.kids_?igsh=MW5jam5rZGh6b3AzZw%3D%3D&utm_source=qr',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    )
  },
  {
    id: 'google-review',
    label: 'Google Review',
    subtitle: 'Review us',
    iconClass: 'icon-google',
    url: 'https://g.page/r/veloskids-review',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
      </svg>
    )
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    subtitle: 'Chat & save number (+91 98476 69180)',
    iconClass: 'icon-whatsapp',
    url: 'https://wa.me/919847669180?text=Hello%20Velos%20Kids!%20I%20want%20to%20inquire%20about%20your%20products.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    )
  },
  {
    id: 'phone-1',
    label: 'Call Us (Primary)',
    subtitle: '+91 98476 69180',
    iconClass: 'icon-phone',
    url: 'tel:+919847669180',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    )
  },
  {
    id: 'phone-2',
    label: 'Call Us (Secondary)',
    subtitle: '+91 98956 69189',
    iconClass: 'icon-phone',
    url: 'tel:+919895669189',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    )
  },
  {
    id: 'location',
    label: 'Store Location',
    subtitle: 'Visit our showroom in person',
    iconClass: 'icon-location',
    url: 'https://maps.google.com',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    )
  }
];

export default function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2600);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Velos Kids',
          text: 'Official Contact & Bio-Link Page for Velos Kids',
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled or share failed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      triggerToast('📋 Page link copied to clipboard!');
    }
  };

  return (
    <div className="app-container">
      
      {/* Header Bar */}
      <header className="top-header">
        <button 
          className="icon-btn" 
          aria-label="Go Back"
          onClick={() => triggerToast('Home')}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>

        <button 
          className="icon-btn" 
          aria-label="Share Page"
          onClick={handleShare}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </button>
      </header>

      {/* Brand Hero Badge */}
      <section className="brand-hero">
        <div className="logo-outer-ring">
          <div className="logo-inner">
            <img 
              src={logoImg} 
              alt="Velos Kids Wear Logo" 
              className="logo-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%23000"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fff" font-family="sans-serif" font-weight="bold" font-size="14">VELOS KIDS</text></svg>';
              }}
            />
          </div>
        </div>
      </section>

      {/* Main Red Card */}
      <main className="main-card">
        
        <div className="card-title-section">
          <h1 className="card-title">Contact Us</h1>
          <p className="card-subtitle">Select any channel to connect with Velos Kids</p>
        </div>

        {/* Links Container */}
        <div className="links-container">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <div className={`icon-wrapper ${link.iconClass}`}>
                {link.icon}
              </div>
              <div className="link-text-content">
                <span className="link-label">{link.label}</span>
                <span className="link-subtitle">{link.subtitle}</span>
              </div>
              <div className="link-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="footer-text">
          <div>Powered by <strong>Velos Kids</strong></div>
        </footer>

      </main>

      {/* Toast Notification */}
      <div className={`toast ${showToast ? 'show' : ''}`}>
        {toastMessage}
      </div>

    </div>
  );
}
