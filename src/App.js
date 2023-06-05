
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './component/LoginPage';
import SignUpPage from './component/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
