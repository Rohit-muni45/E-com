import React from 'react';
import { useCart } from './CartContext';
import '../App.css'

const products = [
  { id: 1, title: 'Polo T-shirt', price: 300, image: 'https://m.media-amazon.com/images/I/713n+TxyfCL._SY879_.jpg'},
  { id: 2, title: 'Lymio Men cargo', price: 600, image: 'https://m.media-amazon.com/images/I/61j9jJhrStL._SY879_.jpg'},
  { id: 3, title: 'Dupatta suit set', price: 470, image: 'https://m.media-amazon.com/images/I/61D7nbhylBL._SX679_.jpg'},
  { id: 4, title: 'Casual dress', price: 800, image: 'https://m.media-amazon.com/images/I/91WJ7X4-8XL._SY879_.jpg'},
  { id: 5, title: 'Realme NARZO 70 5G', price: 12999, image: 'https://m.media-amazon.com/images/I/71gdaaBCYHL._SX679_.jpg'},
  { id:6, title: 'boat Airpods C50', price: 699, image: 'https://m.media-amazon.com/images/I/41wkF2C0ZJL._SX300_SY300_QL70_FMwebp_.jpg'},
  { id: 7, title: 'Samsung LED samrt TV', price: 17000, image: 'https://m.media-amazon.com/images/I/71RxCmvnrbL._SX679_.jpg'},
  { id: 8, title: 'Fastrack Watch Series 8', price: 900, image: 'https://m.media-amazon.com/images/I/61rbYFj7DgL._SX679_.jpg'}
];

const ProductGrid = () => {
  const { addToCart } = useCart();

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p className="product-price">₹{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
