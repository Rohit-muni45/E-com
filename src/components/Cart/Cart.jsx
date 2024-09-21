import React from 'react'; 
import { useCart } from '../CartContext';
import './Cart.css';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom'; 
import Footer from '../Footer/Footer';

const Cart = () => {
  const { cartItems, updateCart, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleIncrease = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCart);
  };

  const handleDecrease = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    updateCart(updatedCart);
  };

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img style={{width: '120px', height: '150px'}} src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>₹{(item.price*item.quantity).toFixed(2)} INR</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrease(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrease(item.id)}>+</button>
                  </div>
                </div>
                <div
                  className='remove-item'
                  onClick={() => updateCart(cartItems.filter((i) => i.id !== item.id))}
                >
                  <img style={{width: '30px', height: '30px'}} className='remove-img' src="../src/assets/delete.png"  alt="Remove" /> 
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="cart-total">
          <h3>Total: ₹{totalPrice.toFixed(2)} INR</h3>
        </div>
        <button className="checkout-button" onClick={() => navigate('/checkout')}>
          Proceed to Checkout
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
