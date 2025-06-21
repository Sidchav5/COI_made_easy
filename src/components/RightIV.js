import React from 'react';
import '../Rights.css';
import Navbar from './Navbar';
import Footer from './Footer';
export default function RightIV() {
  return (
    <>
    <Navbar/>
    <div className="rights-detail">
      <h2>Freedom of Religion (Articles 25–28)</h2>

      <section>
        <h3>🧩 Overview</h3>
        <p>These articles protect individuals’ right to follow their religion and ensure secular governance.</p>
      </section>

      <section>
        <h3>📚 Contained Articles</h3>
        <ul>
          <li>Art 25: Freedom of conscience and religion</li>
          <li>Art 26: Religious institutions manage own affairs</li>
          <li>Art 27: No tax for religious purposes</li>
          <li>Art 28: No religious instruction in state schools</li>
        </ul>
      </section>

      <section>
        <h3>✨ Importance</h3>
        <p>Preserves harmony in multi-religious India and prevents state favoritism.</p>
      </section>

      <section>
        <h3>📜 Historical Background</h3>
        <p>Informed by European secularism and constitutional safeguards in the USA, arising from India’s religious diversity.</p>
      </section>

      <section>
        <h3>🏛️ Landmark Supreme Court Cases</h3>
        <ul>
          <li><a href="https://indiankanoon.org/doc/234567/">S.R. Bommai v. Union (1994)</a> – secularism judgment</li>
          <li><a href="https://indiankanoon.org/doc/345679/">Indian Young Lawyers Association (2018)</a> – allowed women to enter Sabarimala temple</li>
        </ul>
      </section>
    </div>
    <Footer/>
    </>
  );
}
