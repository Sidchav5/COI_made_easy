import React from 'react';
import '../Duties.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Duty1() {
  return (
    <>
      <Navbar />
      <div className="duty-detail">
        <h1>Fundamental Duty 1: Respect the Constitution and National Symbols</h1>
        <p className="subtitle">Article 51A(a) - The foundation of India's constitutional patriotism</p>

        <section>
          <h2>🧩 Comprehensive Understanding</h2>
          <p>
            This fundamental duty under Article 51A(a) of the Constitution requires every citizen to:
          </p>
          <ul>
            <li>Abide by the Constitution and accept its authority</li>
            <li>Respect the democratic ideals enshrined in the Preamble</li>
            <li>Honor all constitutional institutions (Parliament, Judiciary, Executive)</li>
            <li>Show reverence to the National Flag and National Anthem</li>
            <li>Preserve the composite culture symbolized by these national emblems</li>
          </ul>
          <p>
            This duty establishes a direct relationship between citizens and the Constitution, making constitutional values part of civic consciousness.
          </p>
        </section>

        <section>
          <h2>📖 Detailed Explanation</h2>
          <p>
            The duty serves multiple constitutional purposes:
          </p>
          <ul>
            <li>
              <strong>Legal Significance:</strong>
              <ul>
                <li>Forms basis for laws like Prevention of Insults to National Honour Act, 1971</li>
                <li>Guides interpretation of restrictions on free speech under Article 19(2)</li>
              </ul>
            </li>
            <li>
              <strong>Symbolic Importance:</strong>
              <ul>
                <li>National Flag represents sovereignty and unity</li>
                <li>National Anthem embodies national identity</li>
                <li>Constitutional institutions symbolize democratic governance</li>
              </ul>
            </li>
            <li>
              <strong>Educational Value:</strong>
              <ul>
                <li>Mandated in school curriculum under National Education Policy</li>
                <li>Part of NCC and other youth programs</li>
              </ul>
            </li>
          </ul>
          <p>
            While not directly enforceable, courts consider these duties when interpreting laws and constitutional provisions.
          </p>
        </section>

        <section>
          <h2>📜 Historical Context</h2>
          <p>
            This duty emerged from:
          </p>
          <ul>
            <li>
              <strong>Swaran Singh Committee (1976)</strong> recommendations during Emergency
              <ul>
                <li>Suggested 10 Fundamental Duties</li>
                <li>Inspired by socialist constitutions (USSR Article 130)</li>
              </ul>
            </li>
            <li>
              <strong>42nd Constitutional Amendment (1976)</strong> added Part IVA
              <ul>
                <li>Implemented during controversial Emergency period</li>
                <li>Balanced new restrictions on fundamental rights</li>
              </ul>
            </li>
            <li>
              <strong>Post-colonial nation-building</strong> needs
              <ul>
                <li>Unifying diverse population</li>
                <li>Establishing constitutional culture</li>
              </ul>
            </li>
          </ul>
          <p>
            The duty reflects the Constituent Assembly's vision of active citizenship beyond just rights.
          </p>
        </section>

        <section>
          <h2>🏛️ Judicial Interpretations</h2>
          <ul>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/539407/" target="_blank" rel="noopener noreferrer">
                  Bijoe Emmanuel v. State of Kerala (1986)
                </a>
              </strong>: 
              Protected rights of Jehovah's Witnesses students who refused to sing anthem on religious grounds.
              Established that standing respectfully is sufficient compliance. [AIR 1987 SC 748]
            </li>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/141042/" target="_blank" rel="noopener noreferrer">
                  Shyam Narayan Chouksey v. Union of India (2017)
                </a>
              </strong>: 
              Mandated playing national anthem in cinema halls with proper decorum. [2017 SCC OnLine SC 1724]
            </li>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/1732467/" target="_blank" rel="noopener noreferrer">
                  Union of India v. Naveen Jindal (2004)
                </a>
              </strong>: 
              Recognized right to fly national flag as fundamental right under Article 19(1)(a). [2004 (2) SCC 510]
            </li>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/1952902/" target="_blank" rel="noopener noreferrer">
                  Ranganath Mishra Commission Report (2007)
                </a>
              </strong>: 
              Recommended measures for promoting respect for national symbols among minorities.
            </li>
          </ul>
        </section>

        <section>
          <h2>🔍 Contemporary Practice</h2>
          <ul>
            <li>Mandatory constitutional oath in government offices</li>
            <li>Digital campaigns like "Constitution at 70" promoting awareness</li>
            <li>Controversies around mandatory anthem playing in public spaces</li>
            <li>Judicial activism in protecting national symbols from commercial misuse</li>
            <li>Debates about balancing duty enforcement with fundamental rights</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
}