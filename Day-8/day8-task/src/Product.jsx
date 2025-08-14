import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';


const Product = ({ title, description, price }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ title, price, quantity });
    setQuantity(1);
  };

  return (
    <div className="product">
      <img src='/thumbnail.jpg'></img>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;