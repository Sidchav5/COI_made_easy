import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Rights.css';
import Navbar from './Navbar';
import Footer from './Footer';
export default function FundamentalRights() {
  const navigate = useNavigate();

  const rights = [
    { id: 'right1', title: 'Right to Equality', desc: 'Equality before law & prohibition of discrimination' },
    { id: 'right2', title: 'Right to Freedom', desc: 'Freedoms like speech, assembly, movement...' },
    { id: 'right3', title: 'Right against Exploitation', desc: 'No child labor, no forced labor' },
    { id: 'right4', title: 'Right to Freedom of Religion', desc: 'Freedom to profess, practice & propagate religion' },
    { id: 'right5', title: 'Cultural & Educational Rights', desc: 'Preserve culture, establish educational institutions' },
    { id: 'right6', title: 'Right to Constitutional Remedies', desc: 'Move court when rights are violated' },
  ];

  return (
    <>
    <Navbar />
    <div className="rights-container">
      <h2>Fundamental Rights</h2>
      <div className="rights-grid">
        {rights.map(r => (
          <div key={r.id} className="right-card" onClick={() => navigate(`/rights/${r.id}`)}>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
            <button className="btn">Learn More</button>
          </div>
        ))}
      </div>
    </div>
    <div className="Thought">
      <p>‘Constitution is not a mere lawyers’ document… its spirit is always the spirit of Age’</p>
      <p>— Dr. B.R. Ambedkar</p>
    </div>

    <Footer />
    </>
  );
}
