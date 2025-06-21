import React, { useState } from 'react';
import '../App.css';
import Navbar from './Navbar';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <>
      <Navbar />
      <div className="auth-bg">
        <div className="auth-container">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} required />
            <input type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} required />
            <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} required />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
