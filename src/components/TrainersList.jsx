import React, { useState } from 'react';
import './trainerlist.css';
import mantrainer from "/assets/mantrainer.jpg";
const TrainersList = () => {
  const [trainers, setTrainers] = useState([
    {
      id: 1,
      name: 'Riyas',
      specialty: 'Weight Training',
      gender: 'Male',
      age: '25',
      image: mantrainer
    },
    {
      id: 2,
      name: 'Faju',
      specialty: 'Calisthenics',
      gender: 'Male',
      age: '21',
      image: 'https://media.istockphoto.com/id/675179390/photo/muscular-trainer-writing-on-clipboard.jpg?s=612x612&w=0&k=20&c=9NKx1AwVMpPY0YBlk5H-hxx2vJSCu1Wc78BKRM9wFq0='
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    gender: '',
    age: '',
    image: '',
    address:'',
    phone:'',
  });

  const [showForm, setShowForm] = useState(false); // toggle state

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrainer = {
      id: trainers.length + 1,
      ...formData
    };
    setTrainers([...trainers, newTrainer]);
    setFormData({
      name: '',
      specialty: '',
      gender: '',
      age: '',
      image: '',
      address:'',
      phone:''
    });
    setShowForm(false); 
  };

  return (
    <div className="trainers-list">
      <h2>Our Trainers</h2>

      {showForm && (
        <form onSubmit={handleSubmit} className="trainer-form">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="specialty" placeholder="Specialty" value={formData.specialty} onChange={handleChange} required />
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male" className="gen">Male</option>
          <option value="Female" className="gen">Female</option>
        </select>
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        <input type="file" name="image" accept="image/*" onChange={handleChange} required />
        <button type="submit" className="addbtn">Add Trainer</button>
      </form>
      )}

      <div className="trainer">
        {trainers.map((trainer) => (
          <div className="trainer-card" key={trainer.id}>
            <div className="trainer-image-hover">
              {trainer.image && <img src={trainer.image} alt={trainer.name} />}
            </div>
            <div className="trainer-info">
              <h3>{trainer.name}</h3>
              <p>Specialty: {trainer.specialty}</p>
              <p >Gender: {trainer.gender}</p>
              <p >Age: {trainer.age}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="button">
        <button className="addbtn" onClick={toggleForm}>
          {showForm ? 'Close Form' : 'Add Trainer'}
        </button>
      </div>
    </div>
  );
};

export default TrainersList;
