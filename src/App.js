import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Registration from './components/Registration';
import Login from './components/Login';
import UserPage from './components/UserPage';
import MainPage from './components/MainPage';

function App() {
  const [token, setToken] = useState(null);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/closepage" element={<UserPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
