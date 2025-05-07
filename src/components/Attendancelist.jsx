import React, { useState } from 'react';
import './attendance.css';

const AttendanceList = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'ken', attendanceDays: 12 },
    { id: 2, name: 'priya', attendanceDays: 9 },
    { id: 3, name: 'raja', attendanceDays: 14 },
    ,
  ]);

  const incrementAttendance = (id) => {
    setCustomers((prev) =>
      prev.map((cust) =>
        cust.id === id ? { ...cust, attendanceDays: cust.attendanceDays + 1 } : cust
      )
    );
  };

  return (
    <div className="attendance-list">
      <h2>Customer Attendance</h2>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Attendance Days</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cust) => (
            <tr key={cust.id}>
              <td>{cust.name}</td>
              <td>{cust.attendanceDays}</td>
              <td>
                <button onClick={() => incrementAttendance(cust.id)}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceList;