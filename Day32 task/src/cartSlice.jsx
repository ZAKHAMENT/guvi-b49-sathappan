// Redux actions and reducers file (cartSlice.js)

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    updateQuantity: (state, action) => {
      const { index, newQuantity } = action.payload;
      state.items[index].quantity = newQuantity;
    },
    removeFromCart: (state, action) => {
      const { index } = action.payload;
      state.items.splice(index, 1);
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
