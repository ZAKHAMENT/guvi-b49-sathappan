import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import TokenChecker from './TokenChecker';
import PrivateRoute from './PrivateRoute';
//import { Logout } from './MyProfile';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import LandingPage from './LandingPage';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import VerificationCode from './VerificationCode';
import MyProfile from './MyProfile';

function App() {
  const navigate = useNavigate();

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
  // useEffect(() => {
  //   // This will handle the event when the user is about to close the tab or leave the page
  //   const handleBeforeUnload = (event) => {
  //     console.log('User is about to leave the page or close the tab.');
      
  //     // Send tracking information via sendBeacon
  //     navigator.sendBeacon('/api/track-unload', JSON.stringify({ action: 'beforeunload_tab' }));
  
  //     // Some browsers need this to prevent the default behavior
  //     event.preventDefault();
  //     event.returnValue = ''; // Required for Chrome
  //   };
  
  //   window.addEventListener('beforeunload', handleBeforeUnload);
  
  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, []); // Empty dependency array ensures this effect runs only on mount/unmount
  

  return (
    <>
      <TokenChecker />
      <Routes>
        <Route path="/Landing-page" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verificationCode" element={<VerificationCode />} />
        {/* <Route path="/home" element={<MyProfile />} /> */}
        
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
