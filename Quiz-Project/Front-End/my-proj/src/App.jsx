import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import VerificationCode from './VerificationCode';
import GkQuestionRouter from './GK/GkQuestionRouter';
import Layout from './Layout';
import Home from './Home';
import Gk from './GK/Gk';
import MyProfile, { ChangePassword } from './MyProfile';

import NotFound from './NotFound';
function App() {
  return (
    <Routes> 
      {/* Authentication Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verificationCode" element={<VerificationCode />} />
      {/* Private Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        {/* ----------- GK --------------- */}
        <Route path="/gk/all" element={<Gk />} />
        <Route path="/gk/:quizType" element={<Gk />} />
        <Route path="/gk/:tag/:id" element={<GkQuestionRouter />} />

        <Route path='/not-found' element={<NotFound/>}></Route>
        </Route>
    </Routes>
  );
}
export default App;