import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Make sure you have installed the 'jwt-decode' package

function TokenChecker() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkTokenExpiration = () => {
      const token = localStorage.getItem('$FSA_auth_token');
      if (token) {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
          // Token expired, perform logout
          localStorage.removeItem('$FSA_auth_token');
          navigate('/login'); // Redirect to login page
        }
      }
    };

    // Check every minute (60000ms)
    const interval = setInterval(checkTokenExpiration, 60000);

    return () => clearInterval(interval); // Clear the interval when the component unmounts    
  }, [navigate]);

  return null; // This component does not render anything
}

export default TokenChecker;
