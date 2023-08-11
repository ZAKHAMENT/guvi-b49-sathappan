import React, { useState } from 'react';

const ShoppingCart = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Bathing Soap', description: '2$', inCart: false },
    { id: 2, name: 'Shampoo', description: '0.99$', inCart: false },
    { id: 3, name: 'Tooth Paste', description: '1.5$', inCart: false },
    { id: 4, name: 'Hair Oil', description: '3.8$', inCart: false },
    { id: 5, name: 'Face Wash Cream', description: '5$', inCart: false },
    // Add more products as needed
  ]);

  const [cartCount, setCartCount] = useState(0);

  const addToCart = (productId) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return { ...product, inCart: true };
      }
      return product;
    });

    setProducts(updatedProducts);
    setCartCount(cartCount + 1);
  };

  const removeFromCart = (productId) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return { ...product, inCart: false };
      }
      return product;
    });

    setProducts(updatedProducts);
    setCartCount(cartCount - 1);
  };

  return (
    
    <div>
      <h2>Shopping Cart</h2>
      <p>Cart Quantity: {cartCount}</p>
      <div>
        <h3>Available Products:</h3>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <strong>{product.name}</strong> - {product.description}{' '}
              {product.inCart ? (
                <button onClick={() => removeFromCart(product.id)}>Remove from cart</button>
              ) : (
                <button onClick={() => addToCart(product.id)}>Add to cart</button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
    
  );
};

export default ShoppingCart;
