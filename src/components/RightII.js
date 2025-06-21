import React from 'react';
import '../Rights.css';
import Navbar from './Navbar';
import Footer from './Footer';
export default function RightII() {
  return (
    <>
    <Navbar />
    <div className="rights-detail">
      <h2>Right to Freedom (Articles 19–22)</h2>

      <section>
        <h3>🧩 Overview</h3>
        <p>Articles 19–22 guarantee freedoms like speech, assembly, movement, and protection against arbitrary detention. These are essential to individual liberty and democratic life.</p>
      </section>

      <section>
        <h3>📚 Contained Articles</h3>
        <ul>
          <li>Art 19(1): Six freedoms (speech, assembly, movement, etc.)</li>
          <li>Art 20: Protection in case of conviction</li>
          <li>Art 21: Right to life and personal liberty</li>
          <li>Art 22: Protection against arrest/detention</li>
        </ul>
      </section>

      <section>
        <h3>✨ Importance</h3>
        <p>These freedoms empower citizens to express themselves, mobilize, and challenge government action, which are necessary for a healthy democracy.</p>
      </section>

      <section>
        <h3>📜 Historical Background</h3>
        <p>Influenced by the US Bill of Rights and English common law, Art 21 gained prominence with “life” interpreted to include health, education, and dignity.</p>
      </section>

      <section>
        <h3>🏛️ Landmark Supreme Court Cases</h3>
        <ul>
          <li><a href="https://indiankanoon.org/doc/999999/">Maneka Gandhi v. Union (1978)</a> – expanded due process</li>
          <li><a href="https://indiankanoon.org/doc/888888/">Kesavananda Bharati (1973)</a> – enshrined fundamental rights as basic structure</li>
          <li><a href="https://indiankanoon.org/doc/777777/">Navtej Singh Johar (2018)</a> – decriminalized homosexuality under Art 21</li>
        </ul>
      </section>
    </div>
    <Footer/>
    </>
  );
}
