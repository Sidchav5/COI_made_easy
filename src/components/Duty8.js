// src/components/Duties/Duty8.js
import React from 'react';
import '../Duties.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Duty8() {
  return (
    <>
      <Navbar/>
      <div className="duty-detail">
        <h2>Develop Scientific Temper and Spirit of Inquiry</h2>

        <section>
          <h3>🧩 What is it?</h3>
          <p>Citizens should develop scientific temper, humanism and the spirit of inquiry and reform.</p>
        </section>

        <section>
          <h3>📖 Explanation</h3>
          <p>This duty encourages rational thinking and evidence-based approaches to social issues.</p>
        </section>

        <section>
          <h3>📜 Historical Background</h3>
          <p>Inspired by Jawaharlal Nehru's vision of scientific development as crucial for national progress.</p>
        </section>

        <section>
          <h3>🏛️ Supreme Court Cases</h3>
          <ul>
            <li><a href="https://indiankanoon.org/doc/1199182/">Aruna Roy vs Union of India (2002)</a></li>
          </ul>
        </section>
      </div>
      <Footer/>
    </>
  );
}