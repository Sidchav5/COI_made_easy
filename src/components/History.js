import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../History.css';

export default function History() {
  return (
    <>
      <Navbar />
      <div className="history-container">
        <h2>History of the Constitution of India</h2>

        <section>
          <h3>📜 Introduction</h3>
          <p>
            The Constitution of India is the supreme law of the land. It lays down the framework defining political principles, the structure, procedures, and duties of government institutions, and sets out fundamental rights, directive principles, and the duties of citizens.
          </p>
        </section>

        <section>
          <h3>🧱 Constituent Assembly</h3>
          <p>
            The Constituent Assembly was formed in 1946 under the Cabinet Mission Plan. It had 389 members initially (later 299 after Partition). Dr. Rajendra Prasad was the President, and Dr. B. R. Ambedkar was the Chairman of the Drafting Committee.
          </p>
          <ul>
            <li>Drafting Committee formed: 29 August 1947</li>
            <li>First meeting: 9 December 1946</li>
            <li>Adopted: 26 November 1949</li>
            <li>Enforced: 26 January 1950 (Republic Day)</li>
          </ul>
        </section>

        <section>
          <h3>🕰️ Timeline & Key Milestones</h3>
          <ul>
            <li>1934: Demand for a Constituent Assembly first raised by M.N. Roy</li>
            <li>1946: Constituent Assembly formed (elected indirectly by Provincial Assemblies)</li>
            <li>1947: India gained Independence on 15 August</li>
            <li>1947: Partition and formation of Pakistan led to reduction in Assembly members</li>
            <li>1949: Constitution adopted on 26 November</li>
            <li>1950: Came into effect on 26 January (chosen to commemorate Purna Swaraj resolution of 1930)</li>
          </ul>
        </section>

        <section>
          <h3>🏗️ Features of the Drafting Process</h3>
          <p>
            The Constitution was the result of exhaustive debates, discussions, and input from across India. It took:
          </p>
          <ul>
            <li>2 years, 11 months, and 18 days</li>
            <li>11 sessions and 165 days of meetings</li>
            <li>Over 7,600 amendments were proposed</li>
          </ul>
        </section>

        <section>
          <h3>⚖️ Role of Dr. B. R. Ambedkar</h3>
          <p>
            Known as the Father of the Indian Constitution, Dr. B. R. Ambedkar played a central role in drafting the document. His vision of social justice, equality, and empowerment of marginalized communities is reflected throughout the Constitution.
          </p>
        </section>

        <section>
          <h3>📚 Sources of the Constitution</h3>
          <ul>
            <li>Government of India Act, 1935 (Structure of government)</li>
            <li>British Constitution (Parliamentary system, Rule of Law)</li>
            <li>US Constitution (Fundamental Rights, Judicial Review)</li>
            <li>Irish Constitution (Directive Principles of State Policy)</li>
            <li>Canadian Constitution (Federation with strong center)</li>
            <li>USSR Constitution (Fundamental Duties)</li>
          </ul>
        </section>

        <section>
          <h3>🎯 Significance</h3>
          <p>
            The Indian Constitution is the longest written Constitution in the world and a living document that has evolved over time with amendments. It embodies the dreams and aspirations of millions of Indians.
          </p>
        </section>

        <div className="Thought">
        <div>
        <div className="ambedkar-image">
        
        </div>
        </div>
        <div className="ambedkar-quote">
          The Constituent Assembly of India, formed in December 1946, was tasked with drafting India's Constitution. Comprising 299 members after Partition (initially 389), it included representatives from British India and princely states. Chaired by Dr. Rajendra Prasad, with B.R. Ambedkar leading the Drafting Committee, it held 11 sessions over nearly three years. The Assembly adopted the Objective Resolution (basis of the Preamble) in 1947 and finalized the Constitution on November 26, 1949, which took effect on January 26, 1950. It also served as India's interim Parliament until 1952. The Assembly's debates reflected India's diversity, resulting in the world's longest written constitution.
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
