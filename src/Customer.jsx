import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Customernav from './components/Customernav';
import Customerhome from './components/Customerhome';
import Checkbox from './components/Checkbox';
import Custproduct from './components/Custproduct';
import ReviewPage from './components/Reviewpage';
import Traininglist from './components/Traininglist';

const Customer = () => {
  return (
    <>
      <Customernav />
      <Routes>
        <Route path="home" element={<Customerhome />} />
        <Route path="traininglist" element={<Traininglist />} />
        <Route path="checkbox" element={<Checkbox />} />
        <Route path="products" element={<Custproduct />} />
        <Route path="review" element={<ReviewPage />} />
        <Route path="*" element={<Navigate to="home" />} />
      </Routes>
    </>
  );
};

export default Customer;
