// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <p><i className="fa-solid fa-scale-balanced"></i> Constitution Made Easy</p>
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/parts">Parts of Constitution</a>
          <a href="/rights">Fundamental Rights</a>
          <a href="/duties">Fundamental Duties</a>
          <a href="/history">History</a>
        </div>
        <div className="footer-social">
          <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
        </div>
        <div className="footer-credit">
          <p>© 2025 Constitution of India Made Easy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
