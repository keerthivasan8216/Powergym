import React from 'react';
import { Link } from 'react-router-dom';
import './Customernav.css'; 
import Customerhome from './Customerhome'
const Customernav = () => {
  return (
    <>
    <nav className='navigation'>
      <h1>POWER GYM</h1>
      <ul className='list'>
        <li><Link to="/customer/home">Home</Link></li>
        <li><Link to="/customer/traininglist">Training List</Link></li>
        <li><Link to="/customer/checkbox">Training Checkbox</Link></li>
        <li><Link to="/customer/products">Product List</Link></li>
        <li><Link to="/customer/review">Review Page</Link></li>
        <li><Link to="/" > Logout</Link></li>
      </ul>
    </nav>
    </>
  );
};

export default Customernav;
