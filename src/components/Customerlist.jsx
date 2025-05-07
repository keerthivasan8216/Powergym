import React, { useState } from "react";
import "./customer.css";

const Customerlist = () => {
  const customers = [
    { id: 1, name: "Ken", specialty: "Weight Training", gender: "Male", age: "25" },
    { id: 2, name: "Priya", specialty: "Calisthenics", gender: "Female", age: "21" },
    { id: 3, name: "Raja", specialty: "Fat loss", gender: "Male", age: "27" },
  ];

  return (
    <div className="customers-list">
      <h2>Customers List</h2>
      <div className="customer">
        {customers.map((customer) => (
          <div className="customer-card" key={customer.id}>
            <div className="customer-info">
              <h3>{customer.name}</h3>
              <div className="customer-details">
                <p>Specialty: {customer.specialty}</p>
                <p>Gender: {customer.gender}</p>
                <p>Age: {customer.age}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="button">
        <button className="addbtn">Add Customer</button>
        <button className="delbtn">Delete Customer</button>
      </div>
    </div>
  );
};

export default Customerlist;
