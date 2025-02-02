import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="383869457570-gupq720fk2s1unh8bn5vag2ie58533bv.apps.googleusercontent.com">
    <Router>
      <App/>
    </Router>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
