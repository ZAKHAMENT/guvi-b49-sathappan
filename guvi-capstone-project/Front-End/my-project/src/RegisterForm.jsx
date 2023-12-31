import { useState } from 'react';
import axios from 'axios';
import './RegisterForm.css';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);

  const isStrongPassword = (password) => {
    // User should use strong password
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+{/}[\]:;<>,.?~\\/-]/.test(password);

    // Check if the password meets all criteria
    return (
      password.length >= minLength &&
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasSpecialCharacter
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    setIsLoading(true);

    if (!isStrongPassword(password)) {
      setPasswordError('Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.');
      setIsLoading(false);
      return;
    }

    const userData = {
      username,
      email,
      password,
    };

    try {
      const response = await axios.post('https://task-submission-d4k5.onrender.com/register', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        console.log('User registered successfully');
        setIsRegistered(true);

        // Simulate a loading delay for 3 seconds before redirecting to login
        setTimeout(() => {
          setIsLoading(false);
          navigate('/login');
        }, 3000);
      } else {
        console.error('Registration error:', response.data.error);
        setIsLoading(false);
      }
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        if (data.error) {
          if (data.error.includes('Username')) {
            setUsernameError(data.error);
          }
          if (data.error.includes('Email')) {
            setEmailError(data.error);
          }
        }
      }
      console.error('Error registering user:', error);
      setIsLoading(false);
    }
  };

  const handleAlreadyHaveAccountClick = async () => {
    setIsLoading(true);

    // Simulate loading for 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setIsLoading(false);
    navigate('/login');
  };

  return (
    <>
      <div className="login-container">
        <div className="login-heading">Register</div>
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
          <>
            {isRegistered ? (
              <p>You have already registered. Redirecting to login...</p>
            ) : (
              <form className="login-form" onSubmit={handleSubmit}>

                <input
                  className="input"
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                {usernameError && (
                  <div className="alert alert-primary d-flex align-items-center" role="alert">
                    <div>Username does not available</div>
                  </div>
                )}
                <input
                  className="input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {emailError && (
                  <div className="alert alert-primary d-flex align-items-center" role="alert">
                    <div>Email already registered</div>
                  </div>
                )}
                <input
                  className="input"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {passwordError && (
                  <div className="alert alert-primary d-flex align-items-center" role="alert">
                    <div>{passwordError}</div>
                  </div>
                )}
                <span className="forgot-password">
                  <a href="#" onClick={handleAlreadyHaveAccountClick}>
                    Already have an account?
                  </a>
                </span>
                <button className="login-button" type="submit">
                  Sign In
                </button>
              </form>
            )}
          </>
        )}
        <div className="social-account-container">
          <span className="title">Or Sign in with</span>
          <div className="social-accounts"></div>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
