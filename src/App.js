
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './pages/SignUpPage';
import BillRatePage from './pages/BillRatePage';
import BillingPage from './pages/BillingPage';
import BillTest from './pages/BillTest';
import LandingPage from './pages/LandingPage';
import NavBar from './pages/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/billrate" element={<BillRatePage />} />
        <Route path='/billing' element={<BillTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
