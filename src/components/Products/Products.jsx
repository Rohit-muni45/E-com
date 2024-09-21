import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import {useCart} from '../CartContext';
import Footer from '../Footer/Footer';
import './Products.css';
import { BASE_URL } from '../url';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showNotification, setShowNotification] = useState(false);


  const {addToCart, cartItems} = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/products`);
        const data = await response.json();
        //console.log(data);
        setProducts(data);
        setFilteredProducts(data);
        setCategories([...new Set(data.map((product) => product.category))]);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  // Handle category filter
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    filterProducts(event.target.value, priceRange);
  };

  // Handle price range filter
  const handlePriceRangeChange = (event) => {
    const range = event.target.value.split('-').map(Number);
    setPriceRange(range);
    filterProducts(selectedCategory, range);
  };

  // Filter products by category and price range
  const filterProducts = (category, range) => {
    const filtered = products.filter(
      (product) =>
        (category === '' || product.category === category) &&
        product.price >= range[0] &&
        product.price <= range[1]
    );
    setFilteredProducts(filtered);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowNotification(true); // Show notification when item is added

    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <>
    <Navbar />
    <div className="products-page">
      <h2>Products</h2>

      {/* Filters */}
      <div className="filters">
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select onChange={handlePriceRangeChange}>
          <option value="0-1000">All Prices</option>
          <option value="0-20">Under ₹20</option>
          <option value="20-50">₹20 - ₹50</option>
          <option value="50-100">₹50 - ₹100</option>
          <option value="100-1000">Above ₹100</option>
        </select>
      </div> 

      {showNotification && <div className="toast-notification">Product added to cart!</div>}
       

      {/* Product List */}
      <div className="products-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>{product.price} INR</p>
            <button onClick={() => handleAddToCart(product) }>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Products;
