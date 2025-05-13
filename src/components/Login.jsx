import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [showSignup, setShowSignup] = useState(false);
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleLogin = () => {
    if (email.trim().toLowerCase() === 'admin@gmail.com') {
      window.location.href = '/admin/home';
    } else {
      window.location.href = '/customer/home';
    }
  };

  const handleSignupToggle = () => {
    setShowSignup(!showSignup);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Signup Data:', signupData);
    alert('Signup successful!');
    // Reset and hide the form
    setSignupData({ username: '', email: '', password: '' });
    setShowSignup(false);
  };

  return (
    <div className="body">
      <div className="greeting">
        Welcome to<br />
        <h1>POWER GYM</h1>
      </div>

      <div className="login">
        <h3>Login</h3>
        <p>Email Id:
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>Password:
          <input type="password" placeholder="Enter your password" />
        </p>
        <div className="button">
          <button className="btn" onClick={handleLogin}>Login</button>
          <button className="btn" onClick={handleSignupToggle}>
            {showSignup ? 'Close Signup' : 'Signup'}
          </button>
        </div>
      </div>

      {showSignup && (
        <div className="signup-form">
          <h3>Create an Account</h3>
          <form onSubmit={handleSignupSubmit}>
            <p>Username:
              <input
                type="text"
                placeholder="Enter username"
                value={signupData.username}
                onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
                required
              />
            </p>
            <p>Email:
              <input
                type="email"
                placeholder="Enter email"
                value={signupData.email}
                onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                required
              />
            </p>
            <p>Password:
              <input
                type="password"
                placeholder="Enter password"
                value={signupData.password}
                onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                required
              />
            </p>
            <button className="btn" type="submit">Submit</button>
          </form>
        </div>
      )}

      <h3 className="quote">“When you have a clear vision of your goal, it’s easier to take the first step toward it.” – LL Cool J</h3>
    </div>
  );
};

export default Login;
