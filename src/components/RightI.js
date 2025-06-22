import React from 'react';
import '../Rights.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function RightI() {
  return (
    <>
      <Navbar />
      <div className="rights-detail">
        <h1>Right to Equality (Articles 14–18)</h1>
        <p className="subtitle">The cornerstone of India's constitutional democracy</p>

        <section>
          <h2>🧩 Comprehensive Overview</h2>
          <p>
            Article 14 establishes the fundamental principle of equality before law, mandating that 
            "the State shall not deny to any person equality before the law or the equal protection 
            of the laws within the territory of India." This twin concept incorporates:
          </p>
          <ul>
            <li><strong>Equality before law</strong> - The absence of any special privileges for any individual</li>
            <li><strong>Equal protection of laws</strong> - The positive obligation of the state to ensure equal treatment</li>
          </ul>
        </section>

        <section>
          <h2>📚 Detailed Articles Breakdown</h2>
          <ul>
            <li>
              <strong>Article 14</strong>: Establishes the general principle of equality before law and 
              equal protection of laws. This applies to all persons (not just citizens) within Indian 
              territory, including corporations and foreigners.
            </li>
            <li>
              <strong>Article 15</strong>: Prohibits discrimination on grounds of religion, race, caste, 
              sex or place of birth. It specifically empowers the state to make special provisions for 
              women, children, and socially/educationally backward classes.
            </li>
            <li>
              <strong>Article 16</strong>: Guarantees equality of opportunity in matters of public 
              employment. Permits reservation in appointments for backward classes not adequately 
              represented in state services.
            </li>
            <li>
              <strong>Article 17</strong>: Completely abolishes "untouchability" and forbids its practice 
              in any form. The Protection of Civil Rights Act, 1955 enforces this constitutional mandate.
            </li>
            <li>
              <strong>Article 18</strong>: Abolishes all titles except military and academic distinctions. 
              Prohibits Indian citizens from accepting titles from foreign states.
            </li>
          </ul>
        </section>

        <section>
          <h2>🏛️ Landmark Judicial Interpretations</h2>
          <ul>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/257876/" target="_blank" rel="noopener noreferrer">
                  Kesavananda Bharati v. State of Kerala (1973)
                </a>
              </strong>: 
              Established the basic structure doctrine, ruling that equality provisions form part of the Constitution's 
              unamendable core. [AIR 1973 SC 1461]
            </li>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/1766147/" target="_blank" rel="noopener noreferrer">
                  Maneka Gandhi v. Union of India (1978)
                </a>
              </strong>: 
              Expanded Article 14 to include the principle of non-arbitrariness in state action. 
              [AIR 1978 SC 597]
            </li>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/1363234/" target="_blank" rel="noopener noreferrer">
                  Indra Sawhney v. Union of India (1992)
                </a>
              </strong>: 
              Upheld 27% OBC reservation while establishing the 50% ceiling limit and creamy layer exclusion. 
              [AIR 1993 SC 477]
            </li>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/168671544/" target="_blank" rel="noopener noreferrer">
                  Navtej Singh Johar v. Union of India (2018)
                </a>
              </strong>: 
              Decriminalized homosexuality under Section 377 IPC, interpreting equality to include sexual orientation. 
              [2018 SCC OnLine SC 1350]
            </li>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/102852096/" target="_blank" rel="noopener noreferrer">
                  Joseph Shine v. Union of India (2018)
                </a>
              </strong>: 
              Struck down Section 497 IPC (adultery) as violative of Articles 14, 15 and 21. 
              [2018 SCC OnLine SC 1676]
            </li>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/127517538/" target="_blank" rel="noopener noreferrer">
                  State of West Bengal v. Anwar Ali Sarkar (1952)
                </a>
              </strong>: 
              Established the "reasonable classification" test under Article 14. [AIR 1952 SC 75]
            </li>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/1646289/" target="_blank" rel="noopener noreferrer">
                  E.P. Royappa v. State of Tamil Nadu (1974)
                </a>
              </strong>: 
              Introduced the concept of equality as antithetical to arbitrariness. [AIR 1974 SC 555]
            </li>
          </ul>
        </section>

        <section>
          <h2>📜 Historical Context</h2>
          <p>
            The Constituent Assembly debates reveal Dr. Ambedkar's emphasis on these provisions as instruments for 
            social transformation. Key influences included:
          </p>
          <ul>
            <li>U.S. Constitution's 14th Amendment (Equal Protection Clause)</li>
            <li>British Common Law principle of Rule of Law</li>
            <li>Irish Constitution's Directive Principles</li>
            <li>Government of India Act, 1935's anti-discrimination provisions</li>
          </ul>
        </section>

        <section>
          <h2>✨ Contemporary Relevance</h2>
          <p>
            Recent developments include:
          </p>
          <ul>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/194299161/" target="_blank" rel="noopener noreferrer">
                  Janhit Abhiyan v. Union of India (2022)
                </a>
              </strong>: 
              Upheld 103rd Constitutional Amendment providing EWS reservation [2022 SCC OnLine SC 1548]
            </li>
            <li>Ongoing judicial scrutiny of caste-based discrimination in private sector</li>
            <li>Expansion of equality principles to digital rights and AI governance</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
}