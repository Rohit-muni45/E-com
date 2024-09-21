import React, { createContext, useState, useContext } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Add an item to the cart
const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
    }
  };

  // Remove an item from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Update the quantity of a cart item
  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);


