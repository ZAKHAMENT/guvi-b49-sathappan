import  { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.module.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Set loading to true when the form is submitted
    setLoading(true);

    try {
      const response = await axios.post(
        'https://task-submission-portal-p7li.onrender.com//api/forgot-password',
        { email },
        { withCredentials: true }
      );

      const { message } = response.data;

      if (message === 'Password reset token generated') {
        alert('Password reset link sent to your email.');
      } else {
        alert('User does not exist.');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      // Set loading back to false after the API call is complete
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login-box">
        <div className="loginComponent">
          <div className="loginContainer" >
            <div className="login-heading">Forgot Password</div>
            <form className='login-form' onSubmit={handleSubmit}>
              <div className="user-box">
                <input 
                  className="input" type="email" name="text" id='text' placeholder='Email' required 
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <center>
                <button className="login-button" type="submit" href="#" >
                  Send
                  <span></span>
                </button> 
              </center>
            </form>
          </div>
        </div>  
      </div>  
      {/* Show the loader if loading is true */}
      {loading && (
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

export default ForgotPassword;
