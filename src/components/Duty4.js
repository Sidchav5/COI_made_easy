// src/components/Duties/Duty4.js
import React from 'react';
import '../Duties.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Duty4() {
  return (
    <>
      <Navbar/>
      <div className="duty-detail">
        <h2>Defend the Country and Render National Service</h2>

        <section>
          <h3>🧩 What is it?</h3>
          <p>Every citizen has the duty to defend the country and render national service when called upon to do so.</p>
        </section>

        <section>
          <h3>📖 Explanation</h3>
          <p>This includes both military service when required and other forms of national service for the country's protection and development.</p>
        </section>

        <section>
          <h3>📜 Historical Background</h3>
          <p>Inspired by similar provisions in other constitutions, recognizing national defense as a collective responsibility.</p>
        </section>

        <section>
          <h3>🏛️ Supreme Court Cases</h3>
          <ul>
            <li><a href="https://indiankanoon.org/doc/1158521/">Union of India vs Naveen Jindal (2004)</a></li>
          </ul>
        </section>
      </div>
      <Footer/>
    </>
  );
}