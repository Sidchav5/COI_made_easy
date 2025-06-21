import React from 'react';
import '../Rights.css';
import Navbar from './Navbar';
import Footer from './Footer';
export default function RightVI() {
  return (
    <>
    <Navbar />
    <div className="rights-detail">
      <h2>Right to Constitutional Remedies (Article 32)</h2>

      <section>
        <h3>🧩 Overview</h3>
        <p>This fundamental right allows individuals to move Supreme Court or High Courts directly to enforce other fundamental rights.</p>
      </section>

      <section>
        <h3>📚 Contained Articles</h3>
        <p>Single article: Article 32 – gives every person right to constitutional remedies.</p>
      </section>

      <section>
        <h3>✨ Importance</h3>
        <p>Called the "heart and soul of the Constitution" by Dr. Ambedkar, this right makes fundamental rights enforceable and effective.</p>
      </section>

      <section>
        <h3>📜 Historical Background</h3>
        <p>Inspired by the writ jurisdiction in England, it enshrines direct access to courts for rights violations under the Constitution.</p>
      </section>

      <section>
        <h3>🏛️ Landmark Supreme Court Cases</h3>
        <ul>
          <li><a href="https://indiankanoon.org/doc/678901/">M.C. Mehta v. Union (1987)</a> – environmental protection via Article 32</li>
          <li><a href="https://indiankanoon.org/doc/789012/">Minerva Mills (1980)</a> – reaffirmed basic structure and role of remedies</li>
        </ul>
      </section>
    </div>
    <Footer/>
    </>
  );
}
