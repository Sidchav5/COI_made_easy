import React from 'react';
import '../Rights.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function RightV() {
  return (
    <>
      <Navbar />
      <div className="rights-detail">
        <h1>Cultural & Educational Rights (Articles 29–30)</h1>
        <p className="subtitle">Constitutional safeguards for preserving India's pluralistic heritage</p>

        <section>
          <h2>🧩 Comprehensive Overview</h2>
          <p>
            Articles 29-30 constitute special protections for India's religious and linguistic minorities:
          </p>
          <ul>
            <li>Recognize India's civilizational commitment to pluralism</li>
            <li>Provide affirmative protections beyond general fundamental rights</li>
            <li>Balance minority rights with national integration</li>
            <li>Enable preservation of distinct cultural identities</li>
          </ul>
          <p>
            These rights operate alongside:
          </p>
          <ul>
            <li>Article 15's prohibition of discrimination</li>
            <li>Article 350A's instruction in mother tongue</li>
            <li>Eighth Schedule's recognition of 22 languages</li>
          </ul>
        </section>

        <section>
          <h2>📚 Detailed Articles Breakdown</h2>
          <ul>
            <li>
              <strong>Article 29: Protection of Interests of Minorities</strong>
              <ul>
                <li><strong>Clause (1):</strong> Right to conserve distinct:
                  <ul>
                    <li>Language</li>
                    <li>Script</li>
                    <li>Culture</li>
                  </ul>
                </li>
                <li><strong>Clause (2):</strong> Prohibits denial of admission to state-funded institutions based on:
                  <ul>
                    <li>Religion</li>
                    <li>Race</li>
                    <li>Caste</li>
                    <li>Language</li>
                  </ul>
                </li>
                <li>Applies to both religious and linguistic minorities</li>
                <li>Available to any citizen (not just minorities)</li>
              </ul>
            </li>
            <li>
              <strong>Article 30: Right of Minorities to Establish Educational Institutions</strong>
              <ul>
                <li><strong>Clause (1):</strong> All minorities have right to:
                  <ul>
                    <li>Establish educational institutions</li>
                    <li>Administer such institutions</li>
                  </ul>
                </li>
                <li><strong>Clause (1A):</strong> Compensation for compulsory acquisition must not restrict/abrogate this right</li>
                <li><strong>Clause (2):</strong> State cannot discriminate in granting aid to minority institutions</li>
                <li>Includes both religious and linguistic minorities</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2>✨ Constitutional Significance</h2>
          <p>
            These provisions serve vital functions in India's democracy:
          </p>
          <ul>
            <li>Protect vulnerable groups from cultural assimilation</li>
            <li>Enable minority communities to preserve identity through education</li>
            <li>Prevent state-imposed homogenization</li>
            <li>Provide institutional mechanisms for cultural continuity</li>
            <li>Recognize education as vehicle for cultural transmission</li>
          </ul>
          <p>
            The Supreme Court has held these rights form part of the Constitution's basic structure.
          </p>
        </section>

        <section>
          <h2>📜 Historical Context</h2>
          <p>
            These rights emerged from:
          </p>
          <ul>
            <li>Colonial-era fears of cultural domination</li>
            <li>Partition trauma and minority protection concerns</li>
            <li>Precedent of minority protections in:
              <ul>
                <li>Government of India Act, 1935</li>
                <li>League of Nations minority treaties</li>
              </ul>
            </li>
            <li>Constituent Assembly debates on pluralism vs. national unity</li>
          </ul>
          <p>
            Dr. Ambedkar emphasized these as essential for India's "unity in diversity" model.
          </p>
        </section>

        <section>
          <h2>🏛️ Landmark Judicial Interpretations</h2>
          <ul>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/1817865/" target="_blank" rel="noopener noreferrer">
                  T.M.A. Pai Foundation v. State of Karnataka (2002)
                </a>
              </strong>: 
              Defined "minority" and established autonomy in administration. 
              [(2002) 8 SCC 481]
            </li>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/1872024/" target="_blank" rel="noopener noreferrer">
                  Islamic Academy of Education v. State of Karnataka (2003)
                </a>
              </strong>: 
              Allowed reasonable regulation of minority institutions. 
              [(2003) 6 SCC 697]
            </li>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/1732467/" target="_blank" rel="noopener noreferrer">
                  St. Stephen's College v. University of Delhi (1992)
                </a>
              </strong>: 
              Upheld minority institutions' admission rights. 
              [AIR 1992 SC 1630]
            </li>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/1952902/" target="_blank" rel="noopener noreferrer">
                  P.A. Inamdar v. State of Maharashtra (2005)
                </a>
              </strong>: 
              Clarified limits on state regulation of minority institutions. 
              [(2005) 6 SCC 537]
            </li>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/1218092/" target="_blank" rel="noopener noreferrer">
                  D.A.V. College v. State of Punjab (1971)
                </a>
              </strong>: 
              Distinguished religious from linguistic minorities. 
              [AIR 1971 SC 1731]
            </li>
          </ul>
        </section>

        <section>
          <h2>🔍 Contemporary Issues</h2>
          <ul>
            <li>Regulation of minority institution fees and admissions</li>
            <li>Application to new religious movements</li>
            <li>Digital preservation of minority languages</li>
            <li>State funding for minority institutions</li>
            <li>Judicial tests for determining minority status</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
}