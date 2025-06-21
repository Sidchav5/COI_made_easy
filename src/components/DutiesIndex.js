// src/components/Duties/DutiesIndex.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Duties.css';
import Navbar from './Navbar';
import Footer from './Footer';
const dutiesList = [
  { id: 1, title: "Respect the Constitution and National Symbols" },
  { id: 2, title: "Cherish the noble ideals of the freedom struggle" },
  { id: 3, title: "Uphold sovereignty, unity and integrity of India" },
  { id: 4, title: "Defend the country and render national service" },
  { id: 5, title: "Promote harmony and brotherhood" },
  { id: 6, title: "Preserve the rich heritage of our culture" },
  { id: 7, title: "Protect and improve the environment" },
  { id: 8, title: "Develop scientific temper" },
  { id: 9, title: "Safeguard public property" },
  { id: 10, title: "Strive towards excellence" },
  { id: 11, title: "Provide opportunities for education to children" }
];

export default function DutiesIndex() {
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <div className="duties-container">
      <h2>Fundamental Duties</h2>
      <div className="duties-grid">
        {dutiesList.map(duty => (
          <div key={duty.id} className="duty-card" onClick={() => navigate(`/duties/${duty.id}`)}>
            <h3>{duty.title}</h3>
          </div>
        ))}
      </div>
    </div>

    <div className="Thought">
      <p>‘That is why the constitution matters, because it works even for those who don't believe in it ’</p>
      <p>~ Former CJI Chandrachud</p>
    </div>
    <Footer/>
    </>
  );
}
