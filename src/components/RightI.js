import React from 'react';
import '../Rights.css';
import Navbar from './Navbar';
import Footer from './Footer';
export default function RightI() {
  return (
    <>
    <Navbar/>
    <div className="rights-detail">
      <h2>Right to Equality (Articles 14–18)</h2>

      <section>
        <h3>🧩 Overview</h3>
        <p>Article 14 ensures that "the State shall not deny to any person equality before the law or equal protection of the laws". Articles 15–18 expand this by prohibiting discrimination, granting equality of opportunity, abolishing untouchability, and forbidding titles.</p>
      </section>

      <section>
        <h3>📚 Contained Articles</h3>
        <ul>
          <li>Art 14: Equality before law</li>
          <li>Art 15: Prohibition of discrimination</li>
          <li>Art 16: Equality of opportunity in public employment</li>
          <li>Art 17: Abolition of untouchability</li>
          <li>Art 18: Abolition of titles</li>
        </ul>
      </section>

      <section>
        <h3>✨ Importance</h3>
        <p>It lays the foundation for a democratic, inclusive society. By outlawing discrimination and untouchability, it promotes dignity, opportunity, and fairness across all citizens.</p>
      </section>

      <section>
        <h3>📜 Historical Background</h3>
        <p>Rooted in the American 14th Amendment (1868) and the French Declaration of Rights (1789), it represents the constitutional promise of social justice in India—strongly influenced by leaders like Ambedkar fighting caste oppression.</p>
      </section>

      <section>
        <h3>🏛️ Landmark Supreme Court Cases</h3>
        <ul>
          <li><a href="https://indiankanoon.org/doc/123456/">Kesavananda Bharati v. Kerala (1973)</a> – affirmed basic structure doctrine</li>
          <li><a href="https://indiankanoon.org/doc/789012/">Maneka Gandhi v. Union (1978)</a> – broadened right to equality and personal liberty</li>
          <li><a href="https://indiankanoon.org/doc/345678/">Indra Sawhney v. Union (1992)</a> – reservation in employment</li>
        </ul>
      </section>
    </div>
    <Footer/>
    </>
  );
}
