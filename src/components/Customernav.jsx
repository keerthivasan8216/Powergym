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
        <li><Link to="home">Home</Link></li>
        <li><Link to="traininglist">Training List</Link></li>
        <li><Link to="checkbox">Training Checkbox</Link></li>
        <li><Link to="products">Product List</Link></li>
        <li><Link to="review">Review Page</Link></li>
        <li><Link to="../login">Logout</Link></li>
      </ul>
    </nav>
    </>
  );
};

export default Customernav;
