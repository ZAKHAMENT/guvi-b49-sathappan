import { useState } from 'react';
 import './App.css'
import './ForgotPassword.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ForgotPassword() {
  const [email, setEmail] = useState('');
  //const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/forgot-password', {
        withCredentials: false,
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
      console.error('Error -:', error);
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
    <img src="https://i.pinimg.com/736x/e9/95/e4/e995e4fb8043ae73ed435cb82f67aa01.jpg" alt="Background Image" className="img-own" />
    <div className="login-box">
    <form onSubmit={handleSubmit}>
    <h3> Enter your email</h3>
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

