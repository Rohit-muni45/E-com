import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import '../App.css'
import { BASE_URL } from './url';


const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState("")
 
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/login`, formData);
      localStorage.setItem('token', response.data.token);
      console.log(response);
      navigate('/profile');
    } catch (err) {
      //console.error(err.message);
      setError("Invalid email or password")
    }
  };


  return (
    <>
    <Navbar />
    <div className='container'>
    <form className='form' onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input name="email" type="email" onChange={handleChange} placeholder="Email" required />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" required />
      <button type="submit">Log In</button>
    </form>
    <p id='error'>{error}</p>
    <p>Don't have an account? <Link to={'/signup'}>Register</Link></p>
    </div>
    </>
  );
};

export default Login;
