import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './PriceCard.css'
import PriceCard from './PriceCard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <PriceCard/>
  </React.StrictMode>,
)
