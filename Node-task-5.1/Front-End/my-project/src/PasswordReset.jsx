import { useState, useEffect } from 'react';
import './PasswordReset.css';
import './App.css';
import { useParams, useNavigate } from 'react-router-dom'; // Changed import from useHistory to useNavigate
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PasswordReset() {
  const [password, setPassword] = useState('');
  const { token } = useParams();
  const navigate = useNavigate(); // Replaced useHistory with useNavigate

  useEffect(() => {
    // Verify token when the component mounts
    verifyToken();
  }, );

  const verifyToken = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/verify-token/${token}`);
      if (response.data.message !== 'Token is valid') {
        toast.error('Invalid or expired token');
        navigate('/reset-password'); // Use navigate to redirect
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error verifying token');
      navigate('/forgot-password'); // Use navigate to redirect
    }
  };
  

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:3000/api/reset-password/${token}`, {
        token: token,
        newPassword: password,
      });

      console.log(response.data.message);

      if (response.data.message === 'Token has expired') {
        toast.error('Token has expired. Please try a new password reset link.');
      } else {
        toast.info('Password reset successfully');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <>
    <ToastContainer/>
    <div className="card">
      <form onSubmit={handleSubmit}>
        <h3>Reset Password</h3>
        <div className="field">
        <svg className="input-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path></svg>
          <label htmlFor="password">New Password</label>
          <input
          autoComplete='off'
            type="password"
            className='input-field'
            id="logemail"
            name="logemail"
            placeholder="New Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>


        <div className="form-group">
          <button type="submit" className="btn" >
            Submit
          </button>
          <a href="#" className='btn-link'></a>
        </div>
      </form>
    </div>
    </>
  );
}

export default PasswordReset;
