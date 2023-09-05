// store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add your reducer here
    // You can add more reducers if needed
  },
});

export default store;
