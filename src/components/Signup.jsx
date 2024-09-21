import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'
import Navbar from './Navbar/Navbar';
import { BASE_URL } from './url';

const SignUp = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/signup`, formData);
      navigate('/login');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
    <Navbar />
    <div className='container'>
    <form className='form' onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input name="username" type="text" onChange={handleChange} placeholder="Username" required />
      <input name="email" type="email" onChange={handleChange} placeholder="Email" required />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" required />
      <button type="submit">Sign Up</button>
      <p>Already have an account? <Link to={'/login'}>Log in</Link></p>
    </form>
    </div>
    </>
  );
};

export default SignUp;
