import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('$FSA_auth_token');
    if (token) {
      navigate('/');
    }
  }, [navigate]); // Use effect to check on component mount

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await axios.post(
        'http://localhost:3000/login', // Make sure the API endpoint URL is correct
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('$FSA_auth_token')}`,
          },
        }
      );
      if (response.status === 200) {
        const { $FSA_auth_token } = response.data;
        console.log('$FSA_auth_token', $FSA_auth_token);
        localStorage.setItem('$FSA_auth_token', $FSA_auth_token); // Store token in localStorage
        localStorage.setItem('registered', true);  // This can also be the token if used
        navigate('/', { replace: true });
      }
    } catch (error) {
      toast.error('Error during login');
      console.error('Error during login:', error);
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log(decoded);

      // Send the Google credential to your backend for verification
      const response = await axios.post('http://localhost:3000/google-login', {
        googleCredential: credentialResponse.credential,
      });

      if (response.status === 200) {
        const { $FSA_auth_token } = response.data; // Assuming the token is in the response from your backend
        localStorage.setItem('$FSA_auth_token', $FSA_auth_token);
        localStorage.setItem('registered', true);  // This can also be the token if used
        toast.info('Google login successful!');
        navigate('/', { replace: true });
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      console.error('Error during Google login:', error);
      toast.error('Google login failed. Please try again.');
    }
  };
  

  return (
    <div className='background'>
      <ToastContainer />
      <div className={styles.formContainer}>
        <p className={styles.title}>Sign in</p> {/* Changed to 'Sign in' for clarity */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=""
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=""
              required
            />
            <div className={styles.forgot}>
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <button type='submit'  className={styles.sign}>Sign in</button>
        </form>
        <div className={styles.socialMessage}>
          <div className={styles.line}></div>
          <p className={styles.message}>Login with social accounts</p>
          <div className={styles.line}></div>
        </div>
        <div className={styles.socialIcons}>
          <button aria-label="Log in with Google" className={styles.icon}>
          </button>

          <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => {
            console.log('Login Failed');
            toast.error('Google login failed. Please try again.');
          }}
          render={(renderProps) => (
            <button onClick={renderProps.onClick}>Login with Google</button>
          )}
        />
          <button aria-label="Log in with Twitter" className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
            </svg>
          </button>
          <button aria-label="Log in with GitHub" className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.745 0.625-3.177 1.646-4.297-0.161-0.401-0.714-2.031 0.141-4.229 0 0 1.339-0.427 4.396 1.635 1.276-0.354 2.64-0.531 4.001-0.541 1.359 0.01 2.723 0.188 4 0.541 3.057-2.063 4.396-1.635 4.396-1.635 0.859 2.198 0.307 3.828 0.151 4.229 1.021 1.12 1.641 2.552 1.641 4.297 0 6.146-3.744 7.505-7.307 7.901 0.573 0.489 1.083 1.469 1.083 2.964 0 2.141-0.015 3.864-0.015 4.385 0 0.427 0.281 0.927 1.104 0.771 6.364-2.115 10.948-8.109 10.948-15.177 0-8.833-7.161-16-16-16z"></path>
            </svg>
          </button>
        </div>
        <p className={styles.signup}>Don't have an account? <a href="#">Sign up</a></p>
      </div>
    </div>
  );
}


export default Login;
