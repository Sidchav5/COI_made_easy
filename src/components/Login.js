import React, { useState } from 'react';
import '../App.css';
import Navbar from './Navbar';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
      credentials: 'include'
      
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <>
      <Navbar />
      <div className="auth-bg">
        <div className="auth-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              required
            />
            <button type="submit">Login</button>
          </form>
          <p style={{ marginTop: '15px' }}>
            Don’t have an account? <a href="/register">Register</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
