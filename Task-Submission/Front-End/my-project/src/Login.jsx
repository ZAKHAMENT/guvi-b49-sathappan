import  { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.css';

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  // Function to handle the Sign In button click
  const handleSignIn = async () => {
    setIsLoading(true);
    setLoginError(false);
  
    try {
      const response = await axios.post(
        'http://localhost:3000/login',
        {username:email,password},
        {
          withCredentials: true,
        }
      );
  
      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('token', token);

        setIsLoading(false);
        navigate('/tasklist');
      } else {
        setIsLoading(false);
        setLoginError(true);
      }
    } catch (error) {
      setIsLoading(false);
      setLoginError(true);
      console.error('Error during login:', error);
    }
  };
  
  return (
    <>
            {isLoading ? (
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
      ) : (
        <div className={styles.boooo}>
        <div className={styles.loginComponent}>
        <div className={styles.loginContainer} >
        <div className="login-heading">Log In</div>
        <form className="login-form">
          <input
            className="input"
            type="text" 
            name="text"
            id="text"
            placeholder="Username"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
<br /><br />
          {loginError && (
            <div className="alert alert-danger d-flex align-items-center" role="alert">
              <div>Incorrect username or password</div>
            </div>
          )}
          <Link to='/forgot-password'><a className={styles.forgotPassword}>Forgot Password?</a></Link>
          <button
            className="login-button"
            type="button"
            onClick={handleSignIn}
          >
            Log In
          </button>
        </form>
        <div className="social-account-container">
          <span className="title">Or Sign in with</span>
          <div className="social-accounts"></div>
        </div>
      </div>
      </div>
      </div>
    )}
  </>
);
}

export default Login;