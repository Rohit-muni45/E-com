import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import './Navbar.css'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {cartItems} = useCart();
  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }; 

  return ( 
    <>
    <nav className="navbar">
      <div className="navbar-brand">
        <h1 id='h1'>MR Store</h1>
      </div>
       <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? (
          <div className="close-icon">
            <div className="line line1"></div>
            <div className="line line2"></div>
          </div>
        ) : (
          <div className="hamburger-icon">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        )}
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/"> Home </Link></li>
        <li><Link to="/about" >About</Link></li>
        <li><Link to="/products" >Products</Link></li>
        <li><Link to="/login"  >Login</Link></li>
<<<<<<< HEAD
        <li><Link to="/cart" ><img src='../src/assets/shoppingcart.png' height="25px" />
=======
        <li><Link to="/cart" ><img src='https://i.imgur.com/PwUAjhW.png' height="25px" />
>>>>>>> f28f4ebd38227d7983bfec0d8cb549c42e94a2d4
        {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
            </Link></li>
      </ul>
     
    </nav>
    </>
  );
};

export default Navbar;
