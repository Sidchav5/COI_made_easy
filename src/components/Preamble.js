  import React from 'react';
  import Navbar from './Navbar';
  import preambleImage from '../Images/Preamble.png';
  import '../preamble.css';
  import Footer from './Footer';
  
  function Preamble() {
    return (
      <>
        <Navbar />

        {/* Hero Section */}
        <div className="heroImage">
          <h1 className="Preamble-head">Preamble of Indian Constitution</h1>
        </div>

        {/* Preamble Info Section */}
        <div className="preamble-container">

          {/* Preamble Image */}
          <div className="p-pic">
            <img src={preambleImage} alt="Preamble" />
          </div>

          {/* Description */}
          <p className="preamble-description">
            The Preamble to the Constitution of India is a concise yet profound statement that embodies the core ideals, objectives, and philosophical foundations of the Indian Republic. It begins with "We, the People of India," emphasizing popular sovereignty and the democratic essence of the nation. The Preamble declares India as a Sovereign, Socialist, Secular, Democratic, and Republic, outlining its commitment to equality, justice, and liberty.

Key objectives include securing Justice (social, economic, political), Liberty (of thought, expression, belief), Equality (of status and opportunity), and Fraternity (ensuring dignity and national unity). The 42nd Amendment (1976) added the words "Socialist," "Secular," and "Integrity" to reinforce India’s commitment to equitable growth, religious neutrality, and territorial unity.

Though not legally enforceable, the Supreme Court, in the Kesavananda Bharati Case (1973), recognized the Preamble as part of the Basic Structure Doctrine, making it unalterable in spirit. It serves as a moral compass for governance and judicial interpretation, influencing landmark judgments on fundamental rights, secularism, and democracy. Thus, the Preamble remains the soul of the Indian Constitution, reflecting its enduring vision.


          </p>

          {/* Key Terms */}
          <h3 className="preamble-subheading">Key Terms Explained</h3>
          <ul className="preamble-list">
            <li>
              <a href="https://en.wikipedia.org/wiki/Sovereign_state" target="_blank" rel="noopener noreferrer">
                <strong>Sovereign</strong>
              </a>: India is fully independent to make internal and external decisions.
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Socialism" target="_blank" rel="noopener noreferrer">
                <strong>Socialist</strong>
              </a>: A system that ensures social and economic equality for all.
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Secularism_in_India" target="_blank" rel="noopener noreferrer">
                <strong>Secular</strong>
              </a>: The state treats all religions with equal respect and does not favor any religion.
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Democracy" target="_blank" rel="noopener noreferrer">
                <strong>Democratic</strong>
              </a>: Citizens elect their leaders and enjoy fundamental rights.
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Republic" target="_blank" rel="noopener noreferrer">
                <strong>Republic</strong>
              </a>: The head of the country is an elected individual, not a monarch.
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Justice" target="_blank" rel="noopener noreferrer">
                <strong>Justice</strong>
              </a>: Fairness in social, economic, and political rights.
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Liberty" target="_blank" rel="noopener noreferrer">
                <strong>Liberty</strong>
              </a>: Freedom of thought, expression, belief, faith, and worship.
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Equality_before_the_law" target="_blank" rel="noopener noreferrer">
                <strong>Equality</strong>
              </a>: All individuals are treated equally before the law.
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Fraternity" target="_blank" rel="noopener noreferrer">
                <strong>Fraternity</strong>
              </a>: Promotes brotherhood and a sense of unity among all Indians.
            </li>
          </ul>
        </div>
        <Footer/>
      </>
    );
  }

  export default Preamble;
