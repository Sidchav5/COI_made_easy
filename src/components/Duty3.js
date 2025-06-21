// src/components/Duties/Duty3.js
import React from 'react';
import '../Duties.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Duty3() {
  return (
    <>
      <Navbar/>
      <div className="duty-detail">
        <h2>Uphold and Protect Sovereignty, Unity and Integrity</h2>

        <section>
          <h3>🧩 What is it?</h3>
          <p>It is the duty of every citizen to uphold and protect the sovereignty, unity and integrity of India.</p>
        </section>

        <section>
          <h3>📖 Explanation</h3>
          <p>This fundamental duty emphasizes national security and territorial integrity as paramount responsibilities of citizens.</p>
        </section>

        <section>
          <h3>📜 Historical Background</h3>
          <p>Added in response to threats to national unity, especially after the 1971 Bangladesh Liberation War and internal security challenges.</p>
        </section>

        <section>
          <h3>🏛️ Supreme Court Cases</h3>
          <ul>
            <li><a href="https://indiankanoon.org/doc/1372103/">Kedar Nath Singh vs State of Bihar (1962)</a></li>
          </ul>
        </section>
      </div>
      <Footer/>
    </>
  );
}