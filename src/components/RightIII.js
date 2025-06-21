import React from 'react';
import '../Rights.css';
import Navbar from './Navbar';
import Footer from './Footer';
export default function RightIII() {
  return (
    <>
    <Navbar />
    <div className="rights-detail">
      <h2>Right Against Exploitation (Articles 23–24)</h2>

      <section>
        <h3>🧩 Overview</h3>
        <p>These articles prohibit trafficking, forced labor, and child labor—aimed at protecting dignity and human autonomy.</p>
      </section>

      <section>
        <h3>📚 Contained Articles</h3>
        <ul>
          <li>Art 23(1): Prohibition of trafficking and forced labor</li>
          <li>Art 24: Prohibition of child labor under age 14</li>
        </ul>
      </section>

      <section>
        <h3>✨ Importance</h3>
        <p>Protects vulnerable populations and upholds dignity by outlawing exploitation in any form.</p>
      </section>

      <section>
        <h3>📜 Historical Background</h3>
        <p>During the freedom struggle, leaders fought against bonded labor and slavery. The articles were framed to legally end such practices.</p>
      </section>

      <section>
        <h3>🏛️ Landmark Supreme Court Cases</h3>
        <ul>
          <li><a href="https://indiankanoon.org/doc/654321/">Bandhua Mukti Morcha (1984)</a> – against bonded labor</li>
          <li><a href="https://indiankanoon.org/doc/543210/">People’s Union for Democratic Rights (1982)</a> – on public employment rights</li>
        </ul>
      </section>
    </div>
    <Footer />
    </>
  );
}
