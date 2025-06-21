// src/components/Duties/Duty5.js
import React from 'react';
import '../Duties.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Duty5() {
  return (
    <>
      <Navbar/>
      <div className="duty-detail">
        <h2>Promote Harmony and Spirit of Common Brotherhood</h2>

        <section>
          <h3>🧩 What is it?</h3>
          <p>Citizens should promote harmony and the spirit of common brotherhood amongst all people of India.</p>
        </section>

        <section>
          <h3>📖 Explanation</h3>
          <p>This duty emphasizes India's diversity and the need to maintain social harmony across religious, linguistic and regional differences.</p>
        </section>

        <section>
          <h3>📜 Historical Background</h3>
          <p>Added to reinforce national integration after incidents of communal violence in the 1960s and 70s.</p>
        </section>

        <section>
          <h3>🏛️ Supreme Court Cases</h3>
          <ul>
            <li><a href="https://indiankanoon.org/doc/1732437/">Indian Young Lawyers Association vs State of Kerala (2018)</a></li>
          </ul>
        </section>
      </div>
      <Footer/>
    </>
  );
}