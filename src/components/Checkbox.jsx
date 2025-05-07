import React, { useState, useEffect } from 'react';
import './checkbox.css';

const Checkbox = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [checkedDays, setCheckedDays] = useState({});

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const storageKey = `${currentYear}-${currentMonth}`;
  useEffect(() => {
    const storedData = localStorage.getItem(storageKey);
    setCheckedDays(storedData ? JSON.parse(storedData) : {});
  }, [currentMonth, currentYear]);
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(checkedDays));
  }, [checkedDays, storageKey]);

  const handleCheckboxChange = (day) => {
    setCheckedDays((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  const handleMonthChange = (direction) => {
    let newMonth = currentMonth + direction;
    let newYear = currentYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  return (
    <div className="monthly-calendar">
      <div className="calendar-header">
        <button onClick={() => handleMonthChange(-1)}>&lt;</button>
        <h2>
          {new Date(currentYear, currentMonth).toLocaleString('default', {
            month: 'long',
            year: 'numeric',
          })}
        </h2>
        <button onClick={() => handleMonthChange(1)}>&gt;</button>
      </div>

      <div className="calendar-grid">
        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;
          return (
            <div className="calendar-day" key={day}>
              <label>
                <span>Day {day}</span>
                <input
                  type="checkbox"
                  checked={!!checkedDays[day]}
                  onChange={() => handleCheckboxChange(day)}
                />
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkbox;
