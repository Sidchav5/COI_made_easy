// src/components/Chatbot.js
import React, { useState } from 'react';
import '../Chatbot.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Chatbot() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResponse('');
    try {
      const res = await fetch('http://localhost:5000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ question: query })
      });
      const data = await res.json();
      setResponse(data.answer || 'No response received.');
    } catch (error) {
      setResponse('Error: Could not get response. Please try again.');
    }
    setLoading(false);
  };

  const formatResponse = (text) => {
    return text.split('\n\n').map((section, i) => {
      // Format bullet points
      if (section.startsWith('* ')) {
        return (
          <ul key={i}>
            {section.split('\n').filter(line => line.startsWith('* ')).map((item, j) => (
              <li key={j}>
                {item.replace('* ', '').split(':').map((part, k) => (
                  k === 0 ? <strong key={k}>{part}:</strong> : part
                ))}
              </li>
            ))}
          </ul>
        );
      }
      // Format bold headings
      else if (section.startsWith('**')) {
        return <strong key={i} className="response-heading">{section.replace(/\*\*/g, '')}</strong>;
      }
      // Format regular paragraphs
      else {
        return <p key={i}>{section}</p>;
      }
    });
  };

  return (
    <>
      <Navbar/>
      <div className="chatbot-container">
        <h2>Ask Constitution AI Guide</h2>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask any legal, constitutional, or rights-related question..."
        ></textarea>
        <button onClick={handleAsk} disabled={loading}>
          {loading ? (
            <span className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </span>
          ) : 'Ask'}
        </button>
        {response && (
          <div className="chatbot-response">
            <strong>Answer:</strong>
            <div>{formatResponse(response)}</div>
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
} 