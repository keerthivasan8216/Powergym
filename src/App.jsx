import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Admin from './Admin';
import Customer from './Customer';

const AppRoutes = () => {
  const [userType, setUserType] = useState(() => localStorage.getItem('userType') || '');
  const navigate = useNavigate();

  useEffect(() => {
    if (userType === 'admin') {
      navigate('/admin/home');
    } else if (userType === 'customer') {
      navigate('/customer/home');
    }
  }, [userType, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Login setUserType={(type) => {
        setUserType(type);
        localStorage.setItem('userType', type);
      }} />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/customer/*" element={<Customer />} />
    </Routes>
  );
};

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
