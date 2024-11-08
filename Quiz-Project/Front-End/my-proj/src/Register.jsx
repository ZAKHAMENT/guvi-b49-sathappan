import {useState } from 'react';
import styles from './Register.module.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/register', {
        username,
        email,
        password
      });
      console.log(response.data);

      toast.info('Verification code sent! Please check your email.');
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError({ username: '', email: '', password: '' });
      // Navigate to verification page with email state
      navigate('/verificationCode', {replace: true}, { state: { email: response.data.email } });
    } catch (err) {
      console.error(err);
      const errorMessage = err.response?.data?.error || 'An error occurred. Please try again.';
      if (errorMessage.includes('Username')) {
        setError({ ...error, username: errorMessage });
      } else if (errorMessage.includes('Email')) {
        setError({ ...error, email: errorMessage });
      } else {
        setError({ ...error, password: errorMessage });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleRegister = async (credentialResponse) => {
    setIsLoading(true);
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log(decoded);
      const { name, email } = decoded;
      const response = await axios.post('http://localhost:3000/google-register', {
        name,
        email,
        googleCredential: credentialResponse.credential
      });
      console.log(response.data);
      toast.info('Google login successful!');
      navigate('/', {replace: true});
    } catch (error) {
      console.error('Error during Google login:', error);
      toast.error('Google login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginClick = () => {
    setIsLoading(true);
    navigate('/login');
  };

  return (
    <>
      <div className={styles.background}>
        <ToastContainer />
        <div className={styles.formContainer}>
          <p className={styles.title} style={{ color: '#2b061e' }}>Sign up</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.smallInput}
                required
              />
              {error.username && (
                <div className="alert alert-primary d-flex align-items-center" role="alert">
                  <div>{error.username}</div>
                </div>
              )}
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.smallInput}
                required
              />
              {error.email && (
                <div className="alert alert-primary d-flex align-items-center" role="alert">
                  <div>{error.email}</div>
                </div>
              )}
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.smallInput}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={styles.smallInput}
                required
              />
              {error.password && (
                <div className="alert alert-primary d-flex align-items-center" role="alert">
                  <div>{error.password}</div>
                </div>
              )}
            </div>
            <br />
            <button className={styles.sign} type="submit">Sign up</button>
          </form>
          {isLoading && (
            <div className={styles.spinner}>
              <div className={styles.inlineSpinner}></div>
              <div className={styles.inlineSpinner}></div>
              <div className={styles.inlineSpinner}></div>
              <div className={styles.inlineSpinner}></div>
              <div className={styles.inlineSpinner}></div>
              <div className={styles.inlineSpinner}></div>
            </div>
          )}
          <div className={styles.socialMessage}>
            <div className={styles.line}></div>
            <p className={styles.message}>Login with social accounts</p>
            <div className={styles.line}></div>
          </div>
          <div className={styles.socialIcons}>
            <button aria-label="Log in with Google" className={styles.icon}>
              <GoogleLogin
                onSuccess={handleGoogleRegister}
                onError={() => {
                  console.log('Login Failed');
                }}
                render={(renderProps) => (
                  <svg
                    onClick={renderProps.onClick}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                )}
              />
            </button>
            <button aria-label="Log in with Twitter" className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
              </svg>
            </button>
            <button aria-label="Log in with GitHub" className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
              </svg>
            </button>
          </div>
          <p className={styles.signup}>Have an account?
            <Link to="/login" onClick={handleLoginClick}><a href="#"> Log In</a></Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
