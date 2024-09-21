import React from 'react';
import './About.css';
import Navbar from '../Navbar/Navbar'; 
import Footer from '../Footer/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            Welcome to our website! We are dedicated to providing you with the best products and services.
            Our mission is to deliver high-quality products at affordable prices. We believe in customer
            satisfaction and strive to exceed your expectations with every purchase.
          </p>
          <p>
            Our team is passionate about what we do, and we are committed to bringing you the latest and
            greatest in the market. Whether you are looking for the perfect gift or something for yourself, 
            we have something for everyone. Explore our wide range of products and discover the perfect items 
            that suit your needs.
          </p>
          <p>
            Thank you for choosing us. We appreciate your support and look forward to serving you in the future!
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="About us"
          />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
