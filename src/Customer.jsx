import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Customernav from './components/Customernav';
import Customerhome from './components/Customerhome';
import Checkbox from './components/Checkbox';
import Custproduct from './components/Custproduct';
import ReviewPage from './components/Reviewpage';
import Login from './components/Login';
import Traininglist from './components/Traininglist';
 
const Customer = () => {
  return (
    <>
    <Router>
      <Customernav />
      <Routes>
        <Route path="home" element={<Customerhome />} />
        <Route path="/" element={<Customerhome />} />
        <Route path="traininglist" element={<Traininglist/>} />
        <Route path="checkbox" element={<Checkbox />} />
        <Route path="products" element={<Custproduct />} />
        <Route path="review" element={<ReviewPage />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      </Router>
    </>
  );
};

export default Customer
