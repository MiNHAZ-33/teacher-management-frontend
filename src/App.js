
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './component/LoginPage';
import SignUpPage from './component/SignUpPage';
import ProfilePage from './component/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
