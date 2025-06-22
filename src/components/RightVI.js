import React from 'react';
import '../Rights.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function RightVI() {
  return (
    <>
      <Navbar />
      <div className="rights-detail">
        <h1>Right to Constitutional Remedies (Article 32)</h1>
        <p className="subtitle">The procedural mechanism that breathes life into fundamental rights</p>

        <section>
          <h2>🧩 Comprehensive Overview</h2>
          <p>
            Article 32 establishes the Supreme Court as the guardian of fundamental rights by providing:
          </p>
          <ul>
            <li><strong>Original jurisdiction</strong> to enforce fundamental rights</li>
            <li>Power to issue five types of writs:
              <ul>
                <li>Habeas Corpus (produce the detained person)</li>
                <li>Mandamus (command public duty performance)</li>
                <li>Prohibition (prevent lower court overreach)</li>
                <li>Certiorari (quash illegal orders)</li>
                <li>Quo Warranto (challenge unlawful appointments)</li>
              </ul>
            </li>
            <li>Both curative and preventive remedies</li>
            <li>Remedy against both state and private violations in certain cases</li>
          </ul>
          <p>
            Dr. B.R. Ambedkar called this "the very soul of the Constitution and the very heart of it."
          </p>
        </section>

        <section>
          <h2>📚 Detailed Article Analysis</h2>
          <ul>
            <li>
              <strong>Clause (1):</strong> Guarantees the right to move the Supreme Court for enforcement of fundamental rights
            </li>
            <li>
              <strong>Clause (2):</strong> Empowers the Supreme Court to issue directions, orders or writs
            </li>
            <li>
              <strong>Clause (3):</strong> Permits Parliament to empower other courts to exercise this jurisdiction (without Supreme Court exclusion)
            </li>
            <li>
              <strong>Clause (4):</strong> Specifies this right cannot be suspended except during emergencies (Article 359)
            </li>
          </ul>
          <p>
            High Courts have similar jurisdiction under Article 226, which is wider in scope but not as fundamental right.
          </p>
        </section>

        <section>
          <h2>✨ Constitutional Significance</h2>
          <p>
            Article 32 serves critical functions in India's constitutional democracy:
          </p>
          <ul>
            <li>Transforms fundamental rights from paper promises to enforceable guarantees</li>
            <li>Establishes judicial review as a basic feature of the Constitution</li>
            <li>Enables public interest litigation for marginalized groups</li>
            <li>Acts as check against executive and legislative overreach</li>
            <li>Provides expeditious remedy compared to ordinary legal processes</li>
          </ul>
          <p>
            The Supreme Court has held that Article 32 is itself a fundamental right and part of the basic structure doctrine.
          </p>
        </section>

        <section>
          <h2>📜 Historical Context</h2>
          <p>
            The right to constitutional remedies draws from:
          </p>
          <ul>
            <li>English common law writ jurisdiction developed since Magna Carta</li>
            <li>U.S. Constitution's judicial review established in Marbury v. Madison</li>
            <li>Government of India Act, 1935's limited writ provisions</li>
            <li>Post-independence concerns about state power abuse</li>
          </ul>
          <p>
            Constituent Assembly debates reveal this was one of the least contested provisions, with unanimous recognition of its necessity.
          </p>
        </section>

        <section>
          <h2>🏛️ Landmark Judicial Interpretations</h2>
          <ul>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/187972/" target="_blank" rel="noopener noreferrer">
                  M.C. Mehta v. Union of India (1987)
                </a>
              </strong>: 
              Expanded Article 32 for environmental protection through PIL. 
              [AIR 1987 SC 1086]
            </li>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/1379189/" target="_blank" rel="noopener noreferrer">
                  Minerva Mills Ltd. v. Union of India (1980)
                </a>
              </strong>: 
              Affirmed judicial review as basic structure. 
              [AIR 1980 SC 1789]
            </li>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/1199182/" target="_blank" rel="noopener noreferrer">
                  Bandhua Mukti Morcha v. Union of India (1984)
                </a>
              </strong>: 
              Established epistolary jurisdiction under Article 32. 
              [AIR 1984 SC 802]
            </li>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/1646289/" target="_blank" rel="noopener noreferrer">
                  Fertilizer Corporation Kamgar Union v. Union of India (1981)
                </a>
              </strong>: 
              Defined limits of Article 32 jurisdiction. 
              [AIR 1981 SC 344]
            </li>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/1934103/" target="_blank" rel="noopener noreferrer">
                  Justice K.S. Puttaswamy v. Union of India (2017)
                </a>
              </strong>: 
              Recognized right to privacy via Article 32 petition. 
              [(2017) 10 SCC 1]
            </li>
          </ul>
        </section>

        <section>
          <h2>🔍 Contemporary Developments</h2>
          <ul>
            <li>Debates about judicial overreach vs. rights enforcement</li>
            <li>Use of Article 32 for digital rights and privacy violations</li>
            <li>Challenges in implementing court orders against state governments</li>
            <li>Emerging jurisprudence on compensation as remedy</li>
            <li>Procedural reforms for faster disposal of Article 32 petitions</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
}