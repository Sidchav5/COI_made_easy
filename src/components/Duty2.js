// src/components/Duties/Duty2.js
import React from 'react';
import '../Duties.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Duty2() {
  return (
    <>
      <Navbar/>
      <div className="duty-detail">
        <h2>Cherish and Follow the Noble Ideals of Freedom Struggle</h2>

        <section>
          <h3>🧩 What is it?</h3>
          <p>Citizens should cherish and follow the noble ideals that inspired our national struggle for freedom.</p>
        </section>

        <section>
          <h3>📖 Explanation</h3>
          <p>This duty reminds us to uphold the values of sacrifice, unity and patriotism demonstrated during India's independence movement.</p>
        </section>

        <section>
          <h3>📜 Historical Background</h3>
          <p>Added through the 42nd Amendment to honor the sacrifices made during India's freedom struggle against British colonial rule.</p>
        </section>

        <section>
          <h3>🏛️ Supreme Court Cases</h3>
          <ul>
            <li><a href="https://indiankanoon.org/doc/543689/">S. Rangarajan vs P. Jagjivan Ram (1989)</a></li>
          </ul>
        </section>
      </div>
      <Footer/>
    </>
  );
}