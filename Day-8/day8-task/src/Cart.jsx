import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, updateQuantity, calculateTotalAmount } = useContext(CartContext);

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity > 94) {
      alert("Sorry, Currently we are out of stocks");
      return;
    }
    updateQuantity(index, newQuantity);
  };

  const handleIncreaseQuantity = (index) => {
    const newQuantity = cartItems[index].quantity + 1;
    handleQuantityChange(index, newQuantity);
  };

  const handleDecreaseQuantity = (index) => {
    const newQuantity = cartItems[index].quantity - 1;
    if (newQuantity < 1) {
      return;
    }
    handleQuantityChange(index, newQuantity);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.title} - ${item.price} - Quantity:
            <button onClick={() => handleDecreaseQuantity(index)}>-</button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
            />
            <button onClick={() => handleIncreaseQuantity(index)}>+</button>
          </li>
        ))}
      </ul>
      <p>Total Amount: ${calculateTotalAmount()}</p>
    </div>
  );
};

export default Cart;