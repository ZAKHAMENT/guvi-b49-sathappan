import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from './cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity > 94) {
      alert('Sorry, Currently we are out of stocks');
      return;
    }
    dispatch(updateQuantity({ index, newQuantity }));
  };

  const handleRemoveItem = (index) => {
    dispatch(removeFromCart({ index }));
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Cart <span className="material-symbols-outlined">
shopping_cart
</span></h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.title} - ${item.price} - Quantity:
            <button onClick={() => handleQuantityChange(index, item.quantity - 1)}>-</button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
            />
            <button onClick={() => handleQuantityChange(index, item.quantity + 1)}>+</button>
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <h4 className='totalAmount'>Total Amount: ${calculateTotalAmount()}</h4>
    </div>
  );
};

export default Cart;
