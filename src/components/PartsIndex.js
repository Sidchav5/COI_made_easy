import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../COI.css'; // Make sure your Thought styles are also in this CSS or imported
import Navbar from './Navbar';
import Footer from './Footer';
export default function PartsIndex() {
  const [parts, setParts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/parts')
      .then(res => res.json())
      .then(setParts)
      .catch(error => console.error('Error fetching parts:', error));
  }, []);

  return (
    <>
       <Navbar />
      <div className="coi-container">
        <h2>Constitution of India – Parts Index</h2>
        <div className="part-list">
          {parts.map((part) => (
            <div
              key={part.partNumber}
              className="part-card"
              onClick={() => navigate(`/parts/${part.partNumber}`)}
            >
              <div className="part-title">{part.title}</div>
              <div className="part-subtext">Click to view articles</div>
            </div>
          ))}
        </div>
      </div>

     <div className="ambedkar-quote-box">
  <div className="quote-image-section"></div>
  <div className="quote-text-section">
    <p>
      "However good a Constitution may be, if those who are implementing it are
      not good, it will prove to be bad. However bad a Constitution may be, if
      those implementing it are good, it will prove to be good."
    </p>
    <span>— Dr. B.R. Ambedkar</span>
  </div>
</div>



      <Footer />
    </>
  );
}
