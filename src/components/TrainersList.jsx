import React, { useState } from 'react';
import './trainerlist.css';

const TrainersList = () => {
  const [trainers, setTrainers] = useState([
    {
      id: 1,
      name: 'Riyas',
      specialty: 'Weight Training',
      gender: 'Male',
      age: '25',
      image: 'data:image/jpeg;base64,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'
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
    image: ''
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
      image: ''
    });
    setShowForm(false); // hide form after submit
  };

  return (
    <div className="trainers-list">
      <h2>Our Trainers</h2>

      {showForm && (
        <form onSubmit={handleSubmit} className="trainer-form">
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="specialty" placeholder="Specialty" value={formData.specialty} onChange={handleChange} required />
        <input name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} required />
        <input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
        <div className="button">
          <button type="submit" className="addbtn">Save Trainer</button>
        </div>
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
              <p>Gender: {trainer.gender}</p>
              <p>Age: {trainer.age}</p>
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
