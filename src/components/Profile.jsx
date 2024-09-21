import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { BASE_URL } from './url';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get(`${BASE_URL}/profile`, {
          headers: { Authorization: token },
        });
        setUser(response.data);
      } catch (err) {
        console.error(err.message);
        navigate('/login');
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  if (!user) return <div>Loading...</div>;

  return ( 
    <>
    <Navbar/>
    <div className='profile-container'>
      <h1>Welcome, {user.username}!</h1>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
    </>
  );
};

export default Profile;
