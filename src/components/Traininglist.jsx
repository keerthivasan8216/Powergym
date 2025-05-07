import React from 'react';
import './Traininglist.css';

const trainingData = [
  {
    day: 'Monday',
    workout: 'Chest & Triceps',
    exercises: [
      { name: 'Bench Press', sets: 4, reps: 10 },
      { name: 'Tricep Dips', sets: 3, reps: 12 },
      { name: 'Push-Ups', sets: 3, reps: 15 }
    ]
  },
  {
    day: 'Tuesday',
    workout: 'Back & Biceps',
    exercises: [
      { name: 'Deadlift', sets: 4, reps: 8 },
      { name: 'Pull-Ups', sets: 3, reps: 10 },
      { name: 'Barbell Curl', sets: 3, reps: 12 }
    ]
  },
  {
    day: 'Wednesday',
    workout: 'Legs',
    exercises: [
      { name: 'Squats', sets: 4, reps: 10 },
      { name: 'Leg Press', sets: 3, reps: 12 },
      { name: 'Lunges', sets: 3, reps: 12 }
    ]
  },
  {
    day: 'Thursday',
    workout: 'Shoulders',
    exercises: [
      { name: 'Overhead Press', sets: 4, reps: 10 },
      { name: 'Lateral Raises', sets: 3, reps: 12 },
      { name: 'Shrugs', sets: 3, reps: 15 }
    ]
  },
  {
    day: 'Friday',
    workout: 'Core & Cardio',
    exercises: [
      { name: 'Plank', sets: 3, reps: '1 min' },
      { name: 'Crunches', sets: 3, reps: 20 },
      { name: 'Jump Rope', sets: 3, reps: '2 min' }
    ]
  },
  {
    day: 'Saturday',
    workout: 'Full Body HIIT',
    exercises: [
      { name: 'Burpees', sets: 3, reps: 15 },
      { name: 'Mountain Climbers', sets: 3, reps: 20 },
      { name: 'Jump Squats', sets: 3, reps: 12 }
    ]
  },
  {
    day: 'Sunday',
    workout: 'Rest Day',
    exercises: []
  }
];

const Traininglist = () => {
  return (
    <div className="training-container">
      <h2>Weekly Training Plan</h2>
      {trainingData.map((dayPlan, index) => (
        <div key={index} className="day-card">
          <h3>{dayPlan.day} - {dayPlan.workout}</h3>
          {dayPlan.exercises.length > 0 ? (
            <ul>
              {dayPlan.exercises.map((exercise, i) => (
                <li key={i}>
                  {exercise.name} – {exercise.sets} sets × {exercise.reps} reps
                </li>
              ))}
            </ul>
          ) : (
            <p>Rest and recovery.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Traininglist;
