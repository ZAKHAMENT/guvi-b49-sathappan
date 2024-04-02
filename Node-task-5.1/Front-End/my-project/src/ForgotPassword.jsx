import { useState } from 'react';
import './App.css'
import './ForgotPassword.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://guvi-b49-sathappan-1.onrender.com/api/verify-token/${token}`);
        withCredentials: true,
        email: email,
        headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                  },
      });
      const { message } = response.data;

      if (message === 'Password reset token generated') {
        toast.info('Password reset link sent to your email')
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response && error.response.status === 404) {
        toast.error('User does not exist.');
      } else {
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <>
        <ToastContainer />
    <h2> FogGot Password</h2>
    <img src="/images/4841115.jpg" alt="Background Image" className="img-own" />
    <div className="login-box">
    <form onSubmit={handleSubmit}>
    <h3> Enter you E-mail</h3>
      <div className="user-box">
        <input type="email" name="" required="" 
        value={email}
        onChange={handleEmailChange}
        />
        <label>Email:</label>
      </div>
      <center>
        <button href="#" className='btn-own'>
          Forgot Password
          <span></span>
        </button> 
      </center>
    </form>
  </div>  
  </>
  );
}

export default ForgotPassword;

