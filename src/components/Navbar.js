import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="nav-name">
        <p className="nav-name-text">
          <i className="fa-solid fa-scale-balanced"></i>
          Constitution Made Easy
        </p>
      </div>
      <div className="nav-main"><Link to="/">Home</Link></div>
      <div className="nav-main"><Link to="/register">Register</Link></div>
      <div className="nav-main"><Link to="/login">Login</Link></div>
      <div className="nav-main"><a href="/preamble">Preamble</a></div>
      <div className="nav-main"><a href="/quiz">Quiz</a></div>
    </nav>
  );
}

export default Navbar;
