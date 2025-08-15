import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import PasswordReset from './PasswordReset';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/forgot-password" />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<PasswordReset />} />
      </Routes>
    </Router>
  );
}

export default App;
