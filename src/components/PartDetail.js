import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../COI.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PartDetail() {
  const { partNumber } = useParams();
  const [part, setPart] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/parts/${partNumber}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Part not found or server error');
        }
        return res.json();
      })
      .then(setPart)
      .catch(err => {
        console.error("Failed to fetch part details:", err);
        setError('Failed to load part details. Please try again.');
      });
  }, [partNumber]);

  if (error) return <div className="error-message">{error}</div>;
  if (!part) return <div className="loading">Loading…</div>;

  return (
    <>
    <Navbar />
    <div className="coi-container">
      <h2 className="part-title">{part.title}</h2>
      {part.articles && part.articles.length > 0 ? (
        <ul className="article-list">
          {part.articles.map((a) => (
            <li key={a.article} className="article-item">
              <div className="article-title">
                Article {a.article}: {a.title}
              </div>
              <div className="article-content">{a.description}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-articles">No articles found for this part.</div>
      )}
    </div>
    <Footer />
    </>
  );
}
