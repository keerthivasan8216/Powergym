import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Admnav from './components/Admnav';
import Admhome from './components/Admhome';
import TrainersList from './components/TrainersList';
import Customerlist from './components/Customerlist';
import Productlist from './components/Productlist';
import EquipmentList from './components/Equipmentlist';
import AttendanceList from './components/Attendancelist';
import Traininglist from './components/Traininglist';
import Customernav from './components/Customernav';
import Customerhome from './components/Customerhome';
import Checkbox from './components/Checkbox';
import Custproduct from './components/Custproduct';
import ReviewPage from './components/Reviewpage';
import AdminReviewPage from './components/Admreview';

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element= {<Login/>}/>
        <Route path="/admin/home" element={
          <>
          <Admnav/>
          <Admhome/>
          </>
        }/>
        <Route path='/admin/trainers' element={
          <>
           <Admnav/>
           <TrainersList/>
          </>
        }/>
        <Route path='/admin/customers' element={
          <>
            <Admnav/>
            <Customerlist/>
          </>
        }
        />
        <Route path='/admin/products' element={
          <>
            <Admnav/>
            <Productlist/>
          </>
        }
        />
        <Route path='/admin/equipment' element={
          <>
            <Admnav/>
            <EquipmentList/>
          </>
        }/>
        <Route path='/admin/attendance' element={
          <>
            <Admnav/>
            <AttendanceList/>
          </>
        }/>
        <Route path='/admin/review' element={
          <>
            <Admnav/>
            <AdminReviewPage/>
          </>
        }/>
        <Route path='/customer/home' element={
          <>
            <Customernav/>
            <Customerhome/>
          </>
        }/>
        <Route path='/customer/traininglist' element={
          <>
            <Customernav/>
            <Traininglist/>
          </>
        }/>
        <Route path='/customer/checkbox' element={
          <>
            <Customernav/>
            <Checkbox/>
          </>
        }/>
        <Route path='/customer/products' element={
          <>
            <Customernav/>
            <Custproduct/>
          </>
        }/>
        <Route path='/customer/review' element={
          <>
            <Customernav/>
            <ReviewPage/>
          </>
        }/>
      </Routes>
    </Router>
  )
}
export default App;