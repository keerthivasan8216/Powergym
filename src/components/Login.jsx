import React, { useState } from 'react';
import './login.css'
const Login = ({ setUserType }) => {
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (email === 'admin@gmail.com') {
      setUserType('admin');
    } else {
      setUserType('customer');
    }
  };

  return (
    <div className="body">
      <div className="greeting">
        welcome to<br />
        <h1>POWER GYM</h1>
      </div>
      <div className="login">
        <h3>Log In</h3>
        <p>Email Id:
          <input
            type="email"
            placeholder="enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>Password:
          <input type="password" placeholder="enter your password" />
        </p>
        <div className="button">
          <button className="btn" onClick={handleLogin}>Log In</button>
        </div>
      </div>
      <h3 className="quote">“When you have a clear vision of your goal...”</h3>
    </div>
  );
};

export default Login;
