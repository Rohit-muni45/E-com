import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css';
import Navbar from './Navbar/Navbar';
import ProductGrid from './Productsgrid';
import Footer from './Footer/Footer';

const Home = () => {

  return (
    <>
    <Navbar />
    <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Shop</h1>
          <p>Discover the best products with unbeatable prices!</p>
          <Link to="/products" className="cta-button">Shop Now</Link>
        </div>
    </div>
      <div className="featured-products">
        <h2>Featured Products</h2>
        <ProductGrid />
      </div>
      <Footer />
    </>
  );
};

export default Home;
