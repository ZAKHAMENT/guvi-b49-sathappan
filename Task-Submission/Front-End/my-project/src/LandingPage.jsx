import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LandingPage() {
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Make a GET request to your server to check the user's registration status
    axios.get('https://task-submission-portal-p7li.onrender.com/check-registration-status') // Replace with your actual endpoint
      .then((response) => {
        // server responds with registration status
        const { registered } = response.data;
        setIsRegistered(registered);
      })
      .catch((error) => {
        console.error('Error checking registration status:', error);
      });
  }, []);

  const handleLogin = () => {
    navigate('/login');
  }

  const handleRegister = () => {
    navigate('/register');
  }

  return (
    <div>
      {isRegistered ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleRegister}>Register</button>
      )}
    </div>
  );
}

export default LandingPage;
