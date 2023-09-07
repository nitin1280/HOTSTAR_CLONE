import React, { useState } from 'react';
import './sign.css';
import { useNavigate } from 'react-router-dom';


const Sign = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleToggleMode = () => {
    setIsLoginMode((prevMode) => !prevMode);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (isLoginMode) {
      // Handle login
      const storedEmail = localStorage.getItem('emailData');
      const storedPassword = localStorage.getItem('passwordData');
      if (email === storedEmail && password === storedPassword) {
        alert('Logged In Successfully!😎');
        navigate('/home');
      } else {
        alert('Invalid email or password. Please try again.😣');
      }
    } else {
      // Handle sign-up
      if (name && email && password) {
        localStorage.setItem('nameData', name);
        localStorage.setItem('emailData', email);
        localStorage.setItem('passwordData', password);

        alert('Account Created Successfully!😎');
        resetForm();
        setIsLoginMode(true);
      } else {
        alert('Please fill in all fields.😣');
      }
    }
  };

  return (
    <div>
      
      <div className='hero'>
        <div className='form-box'>
          <div className='button-box'>
            <div id='btn' />
            <button type='button' className={isLoginMode ? 'active-btn' : 'toggle-btn'} onClick={handleToggleMode}>
              Log In
            </button>
            <button type='button' className={!isLoginMode ? 'active-btn' : 'toggle-btn'} onClick={handleToggleMode}>
              Sign Up
            </button>
          </div>
          <div className='social-icons'>
            {/* Add social icons if needed */}
          </div>

          <form className='input-group' onSubmit={handleFormSubmit}>
            {!isLoginMode && (
              <input
                type='text'
                className='input-field'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            )}
            <input
              type='email'
              className='input-field'
              placeholder='Email Id'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type='password'
              className='input-field'
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {!isLoginMode && (
              <div className='check-box'>
               
              </div>
            )}
            <button type='submit' className='submit-btn'>
              {isLoginMode ? 'Log In' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sign;