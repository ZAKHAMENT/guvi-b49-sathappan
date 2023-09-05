import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

const Product = ({ title, description, price, image }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ title, price, quantity: 1 }));
  };

  return (
    <div className="product">
      <img src={image} alt="Product Thumbnail" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
