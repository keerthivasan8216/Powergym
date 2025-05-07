import React from 'react';
import { Link } from 'react-router-dom';
import './admnav.css';
import Admhome from './Admhome';

const Admnav = () => {
  return (
    <>
    <nav className='navigation'>
      <h1>POWER GYM</h1>
      <ul className='list'>
      <li><Link to="home">Home</Link></li>
      <li><Link to="trainers">Trainers list</Link></li>
      <li><Link to="customers">Customer list</Link></li>
      <li><Link to="products">Product list</Link></li>
      <li><Link to="equipment">Equipment list</Link></li>
      <li><Link to="attendance">Attendance</Link></li>
      <li><Link to="../Login">Logout</Link></li>
      </ul>
    </nav>
    </>
  );
};

export default Admnav;

