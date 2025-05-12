import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admnav from './components/Admnav';
import Admhome from './components/Admhome';
import TrainersList from './components/Trainerslist';
import Customerlist from './components/Customerlist';
import Productlist from './components/Productlist';
import Equipmentlist from './components/Equipmentlist';
import Attendancelist from './components/Attendancelist';

const Admin = () => {
  return (
    <>
      <Admnav />
      <Routes>
        <Route path="home" element={<Admhome />} />
        <Route path="trainers" element={<TrainersList />} />
        <Route path="customers" element={<Customerlist />} />
        <Route path="products" element={<Productlist />} />
        <Route path="equipment" element={<Equipmentlist />} />
        <Route path="attendance" element={<Attendancelist />} />
      </Routes>
    </>
  );
};

export default Admin;
