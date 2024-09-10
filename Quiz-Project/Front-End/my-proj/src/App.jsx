import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import TokenChecker from './TokenChecker';
import PrivateRoute from './PrivateRoute';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import LandingPage from './LandingPage';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import VerificationCode from './VerificationCode';
import MyProfile from './MyProfile';
import Gk from './Quizes';

function App() {
  const navigate = useNavigate();

  useEffect(() => {

    const handleUnload = () => {

    console.log('User has left the page.');

      const data = {
        message: 'User has left the page.',
        timestamp: new Date().toISOString(),
      };

// Use navigator.sendBeacon for reliable unloading data transmission
const url = 'http://localhost:3000/api/track-unload';
navigator.sendBeacon(url, JSON.stringify(data));
};
    // Attach the handleUnload function to the window unload event
    window.addEventListener('unload', handleUnload);
    // Cleanup the event listeners on component unmount
    return () => {
      // window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('unload', handleUnload);
    };
  }, []);

  useEffect(() => {
    const registered = localStorage.getItem('registered');
    const token = localStorage.getItem('$FSA_auth_token');

    // If the user is visiting the root path, redirect based on the token and registration
    if (window.location.pathname === '/') {
      if (registered && token) {
        navigate('/home');
      } else {
        navigate('/login');
      }
    }
  }, [navigate]);

  return (
    <>
      <TokenChecker />
      <Routes>
        <Route path="/Landing-page" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verificationCode" element={<VerificationCode />} />
        <Route path='/GK' element={<Gk/>}/>
        {/* Private routes - only accessible when logged in */}
        <Route path="/home" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />

        <Route path="/profile" element={
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        } />

        {/* Public Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
