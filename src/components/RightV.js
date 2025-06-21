import React from 'react';
import '../Rights.css';
import Navbar from './Navbar';
import Footer from './Footer';
export default function RightV() {
  return (
    <>
    <Navbar />
    <div className="rights-detail">
      <h2>Cultural & Educational Rights (Articles 29–30)</h2>

      <section>
        <h3>🧩 Overview</h3>
        <p>Protects cultural and educational rights of minorities, allowing them to conserve culture and manage educational institutions.</p>
      </section>

      <section>
        <h3>📚 Contained Articles</h3>
        <ul>
          <li>Art 29: Protection of cultural, educational rights</li>
          <li>Art 30: Right to establish and administer educational institutions</li>
        </ul>
      </section>

      <section>
        <h3>✨ Importance</h3>
        <p>Ensures India’s unity-through-diversity by safeguarding minority language, culture, and education.</p>
      </section>

      <section>
        <h3>📜 Historical Background</h3>
        <p>Following colonial-era cultural suppression, these were inspired by global minority rights principles recognized by UNESCO.</p>
      </section>

      <section>
        <h3>🏛️ Landmark Supreme Court Cases</h3>
        <ul>
          <li><a href="https://indiankanoon.org/doc/456789/">T.M.A. Pai Foundation (2002)</a> – autonomy of minority institutions</li>
          <li><a href="https://indiankanoon.org/doc/567890/">Islamic Academy v. State (2003)</a> – admission policies for minorities</li>
        </ul>
      </section>
    </div>
    <Footer />
    </>
  );
}
