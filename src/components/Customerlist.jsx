import React, { useState } from "react";
import "./customer.css";

const Customerlist = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: "Ken", specialty: "Weight Training", gender: "Male", age: "25" },
    { id: 2, name: "Priya", specialty: "Calisthenics", gender: "Female", age: "21" },
    { id: 3, name: "Raja", specialty: "Fat loss", gender: "Male", age: "27" },
  ]);

  const [showForm, setShowForm] = useState(false);  
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    gender: "",
    age: "",
    address:"",
    phone:"",
  });

  const toggleForm = () => setShowForm(prev => !prev); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = { id: Date.now(), ...formData };
    setCustomers([...customers, newCustomer]);
    setFormData({ name: "", specialty: "", gender: "", age: "" });
    setShowForm(false);
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
           <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male" className="gen">Male</option>
          <option value="Female" className="gen">Female</option>
        </select>
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />
           <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
           <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
           <input type="file" name="image" accept="image/*" onChange={handleChange} required />
          <button className="addbtn" type="submit">Save Customer</button>
        </form>
      )}
    </div>
  );
};

export default Customerlist;
