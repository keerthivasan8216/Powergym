import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TrainersList from './components/TrainersList';
import Customerlist from './components/Customerlist';
import Productlist from './components/Productlist';
import Equipmentlist from './components/Equipmentlist';
import Attendancelist from './components/Attendancelist';
import Admnav from './components/Admnav';
import Login from './components/Login';
import Admhome from './components/Admhome';
const Admin = () => {
  return (
    <>
    <Router>
      <Admnav/>
    <Routes>
      <Route path="home" element={<Admhome />}/>
      <Route path="trainers" element={<TrainersList/>} />
      <Route path="customers" element={<Customerlist />} />
      <Route path="products" element={<Productlist />} />
      <Route path="equipment" element={<Equipmentlist />} />
      <Route path="attendance" element={<Attendancelist />} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </Router>
    </>
  )
}

export default Admin;