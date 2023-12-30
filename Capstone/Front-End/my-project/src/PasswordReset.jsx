import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PasswordReset.css';

function PasswordReset() {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State to track loading
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
  }, [token]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true); // Set loading to true when submitting

      const response = await axios.post(`https://task-submission-ftgm.onrender.com/api/reset-password/${token}`, {
        token: token,
        newPassword: password,
      });
      console.log(response.data.message);

      // Introduce a 3-second delay before navigating to the /login page
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false); // Reset loading state after the operation is complete
    }
  };

  return (
    <>
      <div className="login-box">
        <div className="loginComponent">
          <div className="loginContainer">
            <div className="login-heading">Password Reset</div>
            <form className='login-form' onSubmit={handleSubmit}>
              <div className="user-box">
                <input
                  autoComplete='off'
                  type="password"
                  className='input'
                  id='text'
                  name="text"
                  placeholder="New Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <center>
                <button className="login-button" type="submit">
                  Change Password
                  <span></span>
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>

      {isLoading && (
        <div className="loading-screen">
          <div className="loop cubes">
            <div className="item cubes"></div>
            <div className="item cubes"></div>
            <div className="item cubes"></div>
            <div className="item cubes"></div>
            <div className="item cubes"></div>
            <div className="item cubes"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default PasswordReset;
