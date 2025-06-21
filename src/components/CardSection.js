// src/components/CardSection.js
import React from 'react';
import constitutionImg from '../Images/constituion.jpeg';
import fundamentals from '../Images/Fundamental.jpeg';
import duties from '../Images/Duties.jpeg';
import history from '../Images/history.jpeg';

function CardSection() {
  const cards = [
    {
      title: "COI Parts Wise",
      description: "Explore the Constitution of India divided into 25 clear parts, each covering specific topics.",
      image: constitutionImg,
      link: "/parts"
    },
    {
      title: "Fundamental Rights",
      description: "Learn about the basic rights guaranteed to every Indian citizen under the Constitution.",
      image: fundamentals,
      link: "/rights"
    },
    {
      title: "Fundamental Duties",
      description: "Understand your responsibilities as an Indian citizen outlined in the Constitution.",
      image: duties,
      link: "/duties"
    },
    {
      title: "History of COI",
      description: "Dive into the journey of how the Indian Constitution was drafted and adopted.",
      image: history,
      link: "/history"
    }
  ];

  return (
    <div className="card-section">
      <div className="head">Constitution in Details</div>
      <div className="cards">
        {cards.map((card, index) => (
          <div key={index} className="card1">
            <img
              src={card.image}
              className="card-img-top"
              alt={card.title}
            />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.description}</p>
              <a href={card.link} className="btn btn-primary btn-sm">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardSection;
