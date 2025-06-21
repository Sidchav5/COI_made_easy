// src/components/Duties/Duty1.js
import React from 'react';
import '../Duties.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Duty1() {
  return (
    <>
    <Navbar/>
    <div className="duty-detail">
      <h2>Respect the Constitution and National Symbols</h2>

      <section>
        <h3>🧩 What is it?</h3>
        <p>Every citizen must abide by the Constitution and respect its ideals and institutions, the National Flag and the National Anthem.</p>
      </section>

      <section>
        <h3>📖 Explanation</h3>
        <p>This duty reminds citizens that the Constitution is the supreme law. Respecting national symbols reflects unity and patriotism, essential for national integrity.</p>
      </section>

      <section>
        <h3>📜 Historical Background</h3>
        <p>Inspired by socialist constitutions like the USSR, Fundamental Duties were added via the 42nd Amendment Act, 1976 on the recommendation of the Swaran Singh Committee.</p>
      </section>

      <section>
        <h3>🏛️ Supreme Court Cases</h3>
        <ul>
          <li><a href="https://indiankanoon.org/doc/539407/">Bijoe Emmanuel vs State of Kerala (1986)</a></li>
          <li><a href="https://indiankanoon.org/doc/141042/">Rangnath Mishra Commission</a></li>
        </ul>
      </section>
    </div>
    <Footer/>
    </>
  );
}
