// src/components/Duties/Duty7.js
import React from 'react';
import '../Duties.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Duty7() {
  return (
    <>
      <Navbar/>
      <div className="duty-detail">
        <h2>Protect Natural Environment</h2>

        <section>
          <h3>🧩 What is it?</h3>
          <p>Citizens have a duty to protect and improve the natural environment including forests, lakes, rivers and wildlife.</p>
        </section>

        <section>
          <h3>📖 Explanation</h3>
          <p>This reflects growing environmental consciousness and the need for sustainable development.</p>
        </section>

        <section>
          <h3>📜 Historical Background</h3>
          <p>Added during the global environmental movement of the 1970s, making India one of the first countries to include environmental protection in fundamental duties.</p>
        </section>

        <section>
          <h3>🏛️ Supreme Court Cases</h3>
          <ul>
            <li><a href="https://indiankanoon.org/doc/1873212/">Vellore Citizens Welfare Forum vs Union of India (1996)</a></li>
          </ul>
        </section>
      </div>
      <Footer/>
    </>
  );
}