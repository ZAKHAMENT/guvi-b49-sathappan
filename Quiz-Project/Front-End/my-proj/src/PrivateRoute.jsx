import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('$FSA_auth_token');

  // return token ? children : <Navigate to="/login"/>;

  if (!token) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
}

return children;
};

export default PrivateRoute;
