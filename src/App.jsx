import React, { useState } from 'react';
import Login from './components/Login';
import Admin from './Admin';
import Customer from './Customer';

function App() {
  const [userType, setUserType] = useState('');

  if (!userType) {
    return <Login setUserType={setUserType} />;
  } else if (userType === 'admin') {
    return <Admin />;
  } else if (userType === 'customer') {
    return <Customer />;
  }

  return null; 
}

export default App;
