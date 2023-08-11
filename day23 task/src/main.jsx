import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import ShoppingCart from './ShoppingCart.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <App />
    <ShoppingCart></ShoppingCart>
  </React.StrictMode>,
)
