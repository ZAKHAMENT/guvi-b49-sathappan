import { useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SubmittedTasks from './SubmittedTasks';
import Login from './Login';
import TaskList from './TaskList';
import RegisterForm from './RegisterForm';
import ForgotPassword from './ForgotPassword';
import PasswordReset from './PasswordReset';
function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check the user's login status when the component mounts
  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      // Set the user state if the token is present
      setUser('sathappan'); // You might get the user data from the server here
    }
    setLoading(false); // Set loading to false after checking login status
  }, []);

  const requireLogin = (element) => {
    if (loading) {
      // Loading state, show a loading indicator or some other UI
      return <div>Loading...</div>;
    }

    if (user) {
      // User is logged in, allow access to the route
      return element;
    } else {
      // User is not logged in, redirect to the login page
      return <Navigate to="/login" replace={true} />;
    }
  };

  return (
    <Router>
    <Routes>
      <Route path="/reset-password/:token" element={<PasswordReset />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tasklist/*" element={requireLogin(<TaskList />)} />
      <Route path="/" element={<RegisterForm />} />
      <Route path="/submitted-tasks" element={requireLogin(<SubmittedTasks />)} />
    </Routes>
  </Router>
  );
}   
export default App;                                      