import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('$FSA_auth_token');

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
