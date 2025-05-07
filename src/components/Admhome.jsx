import React from 'react'
import './admhome.css'
import TrainersList from './Trainerslist'
import Customerlist from './Customerlist'
import ProductList from './Productlist'
import AttendanceList from './Attendancelist'

const Admhome = () => {
  return (
    <>
    <div className="benefit-body">
      <div className="benefit-heading">
        <h1>Welcome to <span>POWER GYM</span></h1>
        <h2>Your Path to Strength, Health, and Transformation</h2>
      </div>
      <div className="benefit-content">
        <div className="benefit-card">
          <h3>🏋️ Modern Equipment</h3>
          <p>Latest machines and tools to support all levels of workouts.</p>
        </div>
        <div className="benefit-card">
          <h3>👨‍🏫 Expert Trainers</h3>
          <p>Certified professionals to guide you through fitness routines and diet plans.</p>
        </div>
        <div className="benefit-card">
          <h3>🧘 Wellness Programs</h3>
          <p>Yoga, stretching, and flexibility sessions to support body-mind balance.</p>
        </div>
        <div className="benefit-card">
          <h3>📆 Flexible Plans</h3>
          <p>Choose from daily, monthly, or yearly memberships at your convenience.</p>
        </div>
        <div className="benefit-card">
          <h3>💪 Personalized Attention</h3>
          <p>One-on-one coaching and body transformation programs tailored to your needs.</p>
        </div>
        <div className="benefit-card">
          <h3>🔥 Motivating Environment</h3>
          <p>Train with passionate people in a high-energy, inspiring space.</p>
        </div>
        <div className="benefit-card">
            <h3>🥗 Nutrition Guidance</h3>
             <p>Get custom diet plans from experts to support your fitness goals and boost your energy levels.</p>
        </div>

        <div className="benefit-card">
        <h3>🚿 Hygienic Facilities</h3>
        <p>Clean, well-maintained workout areas with showers, lockers, and sanitized equipment for your safety.</p>
        </div>
      </div>
    </div>
    <TrainersList/>
    <Customerlist/>
    <ProductList/>
    <AttendanceList/>
    </>
  )
}

export default Admhome