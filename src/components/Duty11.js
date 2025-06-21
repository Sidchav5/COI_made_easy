// src/components/Duties/Duty11.js
import React from 'react';
import '../Duties.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Duty11() {
  return (
    <>
      <Navbar/>
      <div className="duty-detail">
        <h2>Provide Education to Children</h2>

        <section>
          <h3>🧩 What is it?</h3>
          <p>Parents or guardians should provide opportunities for education to their children between 6-14 years.</p>
        </section>

        <section>
          <h3>📖 Explanation</h3>
          <p>This duty was added to emphasize the importance of education for national development.</p>
        </section>

        <section>
          <h3>📜 Historical Background</h3>
          <p>Added through the 86th Amendment Act in 2002, along with making education a fundamental right.</p>
        </section>

        <section>
          <h3>🏛️ Supreme Court Cases</h3>
          <ul>
            <li><a href="https://indiankanoon.org/doc/1374111/">Unni Krishnan vs State of AP (1993)</a></li>
          </ul>
        </section>
      </div>
      <Footer/>
    </>
  );
}