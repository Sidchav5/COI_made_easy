// src/components/HeroSection.js
import React from 'react';
import Navbar from './Navbar';

function HeroSection() {
  return (
    <header>
      <div className="hero-section">
        <Navbar />
        <div className="poster">
          <div className="poster-name">
            <span className="white">Constitution </span>
            <span className="org">of India </span>
            <span className="green">Made Easy</span>
          </div>
        </div>
        <div className="poster-info">
          <p>
            Discover the Constitution of India in a simplified and structured way. Browse through Parts, Fundamental Rights, Duties, and History. Ask legal questions and get AI-powered answers with article references in real time. Test your knowledge using Quiz !
          </p>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
