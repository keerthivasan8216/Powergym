import React, { useState } from "react";
import "./customer.css";

const Customerlist = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: "Ken", specialty: "Weight Training", gender: "Male", age: "25" },
    { id: 2, name: "Priya", specialty: "Calisthenics", gender: "Female", age: "21" },
    { id: 3, name: "Raja", specialty: "Fat loss", gender: "Male", age: "27" },
  ]);

  const [showForm, setShowForm] = useState(false);  // Toggle visibility of the form
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    gender: "",
    age: "",
  });

  const toggleForm = () => setShowForm(prev => !prev);  // Toggle the form's visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = { id: Date.now(), ...formData };
    setCustomers([...customers, newCustomer]);
    setFormData({ name: "", specialty: "", gender: "", age: "" });
    setShowForm(false);  // Close the form after submitting
  };

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
        <button className="addbtn" onClick={toggleForm}>
          {showForm ? "Close Form" : "Add Customer"}
        </button>
        <button className="delbtn">Delete Customer</button>
      </div>

      {/* Form visibility controlled by showForm state */}
      {showForm && (
        <form className="customer-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Customer Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="specialty"
            placeholder="Specialty"
            value={formData.specialty}
            onChange={handleChange}
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />
          <button className="addbtn" type="submit">Save Customer</button>
        </form>
      )}
    </div>
  );
};

export default Customerlist;
