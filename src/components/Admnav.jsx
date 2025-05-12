import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './admnav.css';

const Admnav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userType');
    navigate('/'); 
  };

  return (
    <nav className="navigation">
      <h1>POWER GYM</h1>
      <ul className="list">
        <li><Link to="/admin/home">Home</Link></li>
        <li><Link to="/admin/trainers">Trainers List</Link></li>
        <li><Link to="/admin/customers">Customer List</Link></li>
        <li><Link to="/admin/products">Product List</Link></li>
        <li><Link to="/admin/equipment">Equipment List</Link></li>
        <li><Link to="/admin/attendance">Attendance</Link></li>
        <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Admnav;
