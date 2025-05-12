import React, { useState } from 'react';
import './equipmentlist.css';

const EquipmentList = () => {
  const [equipmentData, setEquipmentData] = useState([
    {
      id: 1,
      name: 'Treadmill',
      quantity: 5,
      buyingYear: 2020,
      repairedDate: '2023-07-15',
    },
    {
      id: 2,
      name: 'Elliptical Machine',
      quantity: 3,
      buyingYear: 2019,
      repairedDate: '2024-01-10',
    },
    {
      id: 3,
      name: 'Bench Press',
      quantity: 4,
      buyingYear: 2021,
      repairedDate: '2023-03-18',
    },
    {
      id: 4,
      name: 'Leg Press Machine',
      quantity: 2,
      buyingYear: 2018,
      repairedDate: '2022-09-05',
    },
  ]);

  const handleChange = (id, field, value) => {
    const updatedData = equipmentData.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setEquipmentData(updatedData);
  };

  return (
    <div className="equipment-list">
      <h2>Equipment List</h2>
      <table className="equipment-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Buying Year</th>
            <th>Repaired Date</th>
          </tr>
        </thead>
        <tbody>
          {equipmentData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <input
                  type="number"
                  className="input-cell"
                  value={item.quantity}
                  onChange={(e) =>
                    handleChange(item.id, 'quantity', parseInt(e.target.value) || 0)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  className="input-cell"
                  value={item.buyingYear}
                  onChange={(e) =>
                    handleChange(item.id, 'buyingYear', parseInt(e.target.value) || 0)
                  }
                />
              </td>
              <td>
                <input
                  type="date"
                  className="input-cell"
                  value={item.repairedDate}
                  onChange={(e) =>
                    handleChange(item.id, 'repairedDate', e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EquipmentList;
