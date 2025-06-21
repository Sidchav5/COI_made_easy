// src/components/Duties/Duty6.js
import React from 'react';
import '../Duties.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Duty6() {
  return (
    <>
      <Navbar/>
      <div className="duty-detail">
        <h2>Value and Preserve Rich Heritage</h2>

        <section>
          <h3>🧩 What is it?</h3>
          <p>Citizens should value and preserve the rich heritage of our composite culture.</p>
        </section>

        <section>
          <h3>📖 Explanation</h3>
          <p>This duty recognizes India's ancient civilization and diverse cultural traditions as national treasures to be protected.</p>
        </section>

        <section>
          <h3>📜 Historical Background</h3>
          <p>Added to counter concerns about cultural erosion and to promote preservation of historical monuments and traditions.</p>
        </section>

        <section>
          <h3>🏛️ Supreme Court Cases</h3>
          <ul>
            <li><a href="https://indiankanoon.org/doc/1276234/">M.C. Mehta vs Union of India (1987)</a></li>
          </ul>
        </section>
      </div>
      <Footer/>
    </>
  );
}