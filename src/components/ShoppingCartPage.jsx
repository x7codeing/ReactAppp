import { useState } from 'react';
import Header from './Header';
import '../style/ShoppingCartPage.css'; 

const products = [
  { id: 1, name: 'Fern', price: 12.99, image: '/assets/images/plant1.jpg' },
  { id: 2, name: 'Basil', price: 7.99, image: '/assets/images/plant2.jpg' },
];

const ShoppingCartPage = () => {
  const [cart, setCart] = useState({ 1:1}); 

  const increaseQuantity = (id) => {
    setCart(prevCart => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1
    }));
  };

  const decreaseQuantity = (id) => {
    setCart(prevCart => ({
      ...prevCart,
      [id]: Math.max((prevCart[id] || 0) - 1, 0)
    }));
  };

  const removeFromCart = (id) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      delete newCart[id];
      return newCart;
    });
  };

  const totalCost = Object.keys(cart).reduce((total, id) => {
    const product = products.find(p => p.id === parseInt(id));
    if (!product) return total;
    return total + (product.price * cart[id]);
  }, 0);

  return (
    <div>
      <Header cartItemCount={Object.values(cart).reduce((a, b) => a + b, 0)} />
      <div className="shopping-cart">
        {Object.keys(cart).map(id => {
          const product = products.find(p => p.id === parseInt(id));
          if (!product) return null; 
          return (
            <div key={id} className="cart-item">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => decreaseQuantity(id)}>-</button>
              <span>{cart[id]}</span>
              <button onClick={() => increaseQuantity(id)}>+</button>
              <button onClick={() => removeFromCart(id)}>Delete</button>
            </div>
          );
        })}
        <div className="cart-summary">
          <p>Total Plants: {Object.values(cart).reduce((a, b) => a + b, 0)}</p>
          <p>Total Cost: ${totalCost.toFixed(2)}</p>
          <button>Checkout</button>
          <button>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
