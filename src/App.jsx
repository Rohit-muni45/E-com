import {React, useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route ,createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About/About';
import SignUp from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Checkout from './components/Checkout/Checkout';
import ContactPage from './components/Contact/Contact';
import Loader from './components/Loader';
import './App.css';
import { CartProvider } from './components/CartContext';

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  })

  return (
    <>
    {loading ? (
      <Loader />
    ) : (
    <CartProvider>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router> 
    </CartProvider>
    )}
    </>
  );
};

export default App;
