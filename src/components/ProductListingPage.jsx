// src/components/ProductListingPage.js
import { useState } from 'react';
import Header from './Header';
import '../style/ProductListingPage.css'; // Add your styles here

const products = [
  { id: 1, name: 'Fern', price: 12.99, category: 'Air Purifying', image: '/Untitled design - 2024-02-19T122333.841.webp' },
  { id: 2, name: 'Basil', price: 7.99, category: 'Aromatic', image: '/360_F_159462817_8I1Yx96aBlS0NxcsWdQry62Yj0RCrwIq.jpg' },
  // Add more plants here
];

const ProductListingPage = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const addToCart = (product) => {
    setCartItemCount(cartItemCount + 1);
  };

  return (
    <div>
      <Header cartItemCount={cartItemCount} />
      <div className="product-listing">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
