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
        body: JSON.stringify({ question: query })
      });
      const data = await res.json();
      setResponse(data.answer || 'No response received.');
    } catch (error) {
      setResponse('Error: Could not get response. Please try again.');
    }
    setLoading(false);
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
        {loading ? 'Thinking...' : 'Ask'}
      </button>
      {response && (
        <div className="chatbot-response">
          <strong>Answer:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
    <Footer/>
</>
  );
  
}
