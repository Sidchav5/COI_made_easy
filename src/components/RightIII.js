import React from 'react';
import '../Rights.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function RightIII() {
  return (
    <>
      <Navbar />
      <div className="rights-detail">
        <h1>Right Against Exploitation (Articles 23–24)</h1>
        <p className="subtitle">Constitutional safeguards against human degradation and labor exploitation</p>

        <section>
          <h2>🧩 Comprehensive Overview</h2>
          <p>
            Articles 23-24 embody the constitutional commitment to human dignity by prohibiting exploitative practices:
          </p>
          <ul>
            <li>Absolute prohibition of human trafficking and forced labor without exceptions</li>
            <li>Complete ban on employment of children below 14 years in hazardous occupations</li>
            <li>Enabling legislation for enforcement through penal provisions</li>
            <li>Judicial recognition as part of basic structure of the Constitution</li>
          </ul>
          <p>
            These provisions reflect India's commitment to international human rights instruments like:
          </p>
          <ul>
            <li>Universal Declaration of Human Rights (Article 4)</li>
            <li>International Labour Organization's Forced Labour Convention</li>
            <li>UN Convention on Rights of the Child</li>
          </ul>
        </section>

        <section>
          <h2>📚 Detailed Articles Breakdown</h2>
          <ul>
            <li>
              <strong>Article 23(1): Prohibition of Traffic in Human Beings and Forced Labour</strong>
              <ul>
                <li>Absolute prohibition - no exceptions or reasonable restrictions</li>
                <li>Covers both state and private actions</li>
                <li>Includes:
                  <ul>
                    <li>Begar (unpaid compulsory labor)</li>
                    <li>Bonded labor</li>
                    <li>Sex trafficking</li>
                    <li>Other similar forms of forced labor</li>
                  </ul>
                </li>
              </ul>
              <p>
                <strong>Article 23(2)</strong>: Permits compulsory service for public purposes (e.g., military service) with equal application
              </p>
            </li>
            <li>
              <strong>Article 24: Prohibition of Child Labour</strong>
              <ul>
                <li>Absolute prohibition of employment below 14 years in:
                  <ul>
                    <li>Factories</li>
                    <li>Mines</li>
                    <li>Other hazardous employment</li>
                  </ul>
                </li>
                <li>Complemented by:
                  <ul>
                    <li>Child Labour (Prohibition and Regulation) Act, 1986</li>
                    <li>Right to Education Act, 2009</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2>✨ Constitutional Significance</h2>
          <p>
            These provisions serve crucial functions:
          </p>
          <ul>
            <li>Transformative potential to eradicate centuries-old exploitative practices</li>
            <li>Enable judicial intervention through Public Interest Litigation</li>
            <li>Foundation for comprehensive anti-trafficking and child protection laws</li>
            <li>Basis for expanding protections to new forms of exploitation (e.g., digital labor platforms)</li>
            <li>Link with Directive Principles (Articles 39, 41, 42) for holistic worker protections</li>
          </ul>
          <p>
            The Supreme Court has interpreted these as positive obligations on the state to actively identify, release and rehabilitate victims.
          </p>
        </section>

        <section>
          <h2>📜 Historical Context</h2>
          <p>
            Rooted in India's social reform movements and colonial experiences:
          </p>
          <ul>
            <li>19th century abolitionist movements against slavery and indentured labor</li>
            <li>Gandhian campaigns against begar system and vethi (forced village labor)</li>
            <li>Work of reformers like Jyotiba Phule against caste-based exploitation</li>
            <li>Findings of Royal Commission on Labour (1931) highlighting systemic exploitation</li>
          </ul>
          <p>
            Constituent Assembly debates reveal Dr. Ambedkar's emphasis on these as tools for dismantling caste-based labor hierarchies.
          </p>
        </section>

        <section>
          <h2>🏛️ Landmark Judicial Interpretations</h2>
          <ul>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/595099/" target="_blank" rel="noopener noreferrer">
                  Bandhua Mukti Morcha v. Union of India (1984)
                </a>
              </strong>: 
              Established state's affirmative obligations to identify/release bonded laborers. 
              [AIR 1984 SC 802]
            </li>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/1099184/" target="_blank" rel="noopener noreferrer">
                  People's Union for Democratic Rights v. Union of India (1982)
                </a>
              </strong>: 
              Expanded "forced labor" to include violation of labor laws. 
              [AIR 1982 SC 1473]
            </li>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/1732437/" target="_blank" rel="noopener noreferrer">
                  M.C. Mehta v. State of Tamil Nadu (1996)
                </a>
              </strong>: 
              Directed rehabilitation of child workers in hazardous industries. 
              [AIR 1997 SC 699]
            </li>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/1833306/" target="_blank" rel="noopener noreferrer">
                  Sanjit Roy v. State of Rajasthan (1983)
                </a>
              </strong>: 
              Held payment below minimum wage amounts to forced labor. 
              [AIR 1983 SC 328]
            </li>
            <li>
              <strong>
                <a href="https://indiankanoon.org/doc/1905020/" target="_blank" rel="noopener noreferrer">
                  Bachpan Bachao Andolan v. Union of India (2011)
                </a>
              </strong>: 
              Strengthened enforcement against child labor. 
              [2011 SCC OnLine SC 55]
            </li>
          </ul>
        </section>

        <section>
          <h2>🔍 Contemporary Challenges</h2>
          <ul>
            <li>Enforcement gaps in informal sectors (domestic work, agriculture)</li>
            <li>New forms of trafficking (cyber trafficking, organ trade)</li>
            <li>Implementation of Child Labour (Prohibition and Regulation) Amendment Act, 2016</li>
            <li>Judicial scrutiny of rehabilitation measures</li>
            <li>Intersection with migrant worker protections</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
}