import React from 'react';
import { useCart } from '../CartContext';
import './Checkout.css';

const Checkout = () => {
  const { totalPrice, cartItems } = useCart();

  return ( 
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="shipping-info">
          
          <h2>Checkout</h2>
          ...    
        </div>

        <div className="cart-review">
          <h3>Review your cart</h3>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="item-details">
                  <p>{item.title}</p>
                  <p>₹{item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="discount-code">
            <input type="text" placeholder="Discount code" />
            <button>Apply</button>
          </div>
          <div className="cart-summary">
            <p>Subtotal: ₹{totalPrice.toFixed(2)}</p>
            <p>Shipping: ₹30.00</p>
            <p>Discount: -₹{(totalPrice*0.1).toFixed(2)}</p>
            <h3>Total: ₹{(totalPrice + 5 - (totalPrice*0.1)).toFixed(2)}</h3>
          </div>
          <button className="pay-now" >Pay Now</button>
          <p className="secure-checkout">Secure Checkout - SSL Encrypted</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;



