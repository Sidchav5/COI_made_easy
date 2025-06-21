// src/components/Duties/Duty9.js
import React from 'react';
import '../Duties.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Duty9() {
  return (
    <>
      <Navbar/>
      <div className="duty-detail">
        <h2>Safeguard Public Property</h2>

        <section>
          <h3>🧩 What is it?</h3>
          <p>Citizens should safeguard public property and abjure violence.</p>
        </section>

        <section>
          <h3>📖 Explanation</h3>
          <p>This duty aims to prevent destruction of public assets during protests and civil unrest.</p>
        </section>

        <section>
          <h3>📜 Historical Background</h3>
          <p>Added in response to increasing incidents of vandalism during political agitations in the 1970s.</p>
        </section>

        <section>
          <h3>🏛️ Supreme Court Cases</h3>
          <ul>
            <li><a href="https://indiankanoon.org/doc/1833303/">Destruction of Public Property Case (2009)</a></li>
          </ul>
        </section>
      </div>
      <Footer/>
    </>
  );
}