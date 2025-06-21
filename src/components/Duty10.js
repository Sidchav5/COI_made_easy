// src/components/Duties/Duty10.js
import React from 'react';
import '../Duties.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Duty10() {
  return (
    <>
      <Navbar/>
      <div className="duty-detail">
        <h2>Strive for Excellence</h2>

        <section>
          <h3>🧩 What is it?</h3>
          <p>Citizens should strive towards excellence in all spheres of individual and collective activity.</p>
        </section>

        <section>
          <h3>📖 Explanation</h3>
          <p>This duty encourages continuous self-improvement and high standards in all endeavors.</p>
        </section>

        <section>
          <h3>📜 Historical Background</h3>
          <p>Added to foster a culture of meritocracy and high achievement in post-independence India.</p>
        </section>

        <section>
          <h3>🏛️ Supreme Court Cases</h3>
          <ul>
            <li><a href="https://indiankanoon.org/doc/5547/">TMA Pai Foundation vs State of Karnataka (2002)</a></li>
          </ul>
        </section>
      </div>
      <Footer/>
    </>
  );
}