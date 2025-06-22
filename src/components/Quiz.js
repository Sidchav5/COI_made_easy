import React, { useState } from 'react';
import '../Quiz.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [remarks, setRemarks] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate(); // to redirect if not logged in

  const fetchQuiz = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:5000/quiz/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'  // ✅ send session cookie
      });

      if (res.status === 401) {
        alert("⚠ You must be logged in to access the quiz.");
        navigate('/login');
        return;
      }

      const data = await res.json();
      if (data.questions && data.questions.length === 10) {
        setQuestions(data.questions);
      } else {
        alert("⚠ Could not load quiz. Try again later.");
      }

    } catch (err) {
      setError('❌ Failed to load quiz questions.');
    }
    setLoading(false);
  };

  const handleOptionClick = (index) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === questions[current].answer) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent(prev => prev + 1);
      setSelected(null);
    } else {
      setShowResult(true);
      submitScore();
    }
  };

  const submitScore = async () => {
    try {
      const res = await fetch('http://localhost:5000/quiz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',  // ✅ send session cookie
        body: JSON.stringify({ score }),
      });

      if (res.status === 401) {
        alert("⚠ You must be logged in to submit your score.");
        navigate('/login');
        return;
      }

      const result = await res.json();
      setRemarks(result.remarks || 'Great effort!');
      setLeaderboard(result.leaderboard || []);
    } catch (err) {
      setRemarks('⚠ Could not submit your score. Try again later.');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="quiz-container">
      <h2>🧠 Constitution AI Quiz</h2>

      {loading && <p>Loading quiz...</p>}
      {error && <p className="error-msg">{error}</p>}

      {questions.length === 0 && !loading && !showResult && (
        <button onClick={fetchQuiz} className="start-btn">Start Quiz</button>
      )}

      {showResult ? (
        <div className="result-section">
          <h3>Your Score: {score}/10</h3>
          <p>{remarks}</p>
          <h4>🏆 Leaderboard</h4>
          <ol>
            {leaderboard.map((user, index) => (
              <li key={index}>
                {user.username} – {user.score}
              </li>
            ))}
          </ol>
        </div>
      ) : (
        questions.length > 0 && (
          <div className="question-box">
            <h4>Q{current + 1}. {questions[current].question}</h4>
            <ul className="options">
              {questions[current].options.map((opt, idx) => (
                <li
                  key={idx}
                  className={`option 
                    ${selected === idx && idx === questions[current].answer ? 'correct' : ''}
                    ${selected === idx && idx !== questions[current].answer ? 'wrong' : ''}
                    ${selected !== null && idx === questions[current].answer ? 'correct' : ''}
                  `}
                  onClick={() => handleOptionClick(idx)}
                >
                  {opt}
                </li>
              ))}
            </ul>
            <button onClick={nextQuestion} disabled={selected === null}>
              {current === questions.length - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
        )
      )}
    </div>
    <Footer/>
    </>
  );
};
export default Quiz;
