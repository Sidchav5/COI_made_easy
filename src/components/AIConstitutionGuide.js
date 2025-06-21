// src/components/AIConstitutionGuide.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../AIConstitutionGuide.css';

export default function AIConstitutionGuide() {
  const navigate = useNavigate();

  return (
    <div className="ai-guide-section">
      <div className="ai-guide-left">
        <div className="ai-guide-image-div"></div>

        {/* Updated button to route to ChatBot page */}
        <button
          className="ai-guide-button"
          onClick={() => navigate('/ChatBot')}
        >
          Welcome to AI Guide
        </button>
      </div>
      <div className="ai-guide-right">
        <h2>🖥️ Meet Your Constitution AI Assistant</h2>
        <p>
          Ask your legal doubts and get instant guidance based on the Indian Constitution.
          Whether you're confused about Fundamental Rights, Emergency Provisions,
          or landmark Supreme Court judgments—our AI will help you understand it in simple terms.
        </p>
        <ul>
          <li>⚖️ Ask: “Can I be arrested without a warrant?”</li>
          <li>📜 Ask: “What is Article 21 about?”</li>
          <li>👨‍⚖️ Ask: “Which judgment is related to Right to Privacy?”</li>
          <li>🛡️ Ask: “What happens during President’s Rule?”</li>
        </ul>
        <p>
          The AI guide uses cutting-edge Large Language Models to make the Constitution
          accessible to everyone—citizens, students, and legal enthusiasts.
        </p>
      </div>
    </div>
  );
}
