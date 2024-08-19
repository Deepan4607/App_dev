import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import Logo from '../../assets/logo.png';

const Login = ({ onClose }) => {
  const [signState, setSignState] = useState('Sign In');
  const [signupDetails, setSignupDetails] = useState({ username: '', email: '', password: '' });
  const [loginDetails, setLoginDetails] = useState({ username: '', password: '' });
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Fetch users for checking existence during sign up
  //   axios.get('http://localhost:8080/api/users')
  //     .then(response => setUsers(response.data))
  //     .catch(error => {
  //       console.error('Error fetching users:', error);
  //     });
  // }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (signState === 'Sign Up') {
      setSignupDetails(prevDetails => ({ ...prevDetails, [name]: value }));
    } else {
      setLoginDetails(prevDetails => ({ ...prevDetails, [name]: value }));
    }
  };

  const checkUserExists = async (name) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/users/username/${name}`);
      return response.data !== null;
    } catch (error) {
      console.error('Error fetching user by name:', error);
      return false;
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (await checkUserExists(signupDetails.name)) {
      alert('User already exists. Redirecting to login...');
      setSignState('Sign In');
      return;
    }
    
    try {
      await axios.post('http://localhost:8080/api/users/signup', signupDetails);
      alert('Signup successful');
      setSignState('Sign In');
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users/login', loginDetails);
      if (response.status===200) {
        alert('Login Successful');
        // onClose();
        navigate('/');
      }
    } catch (error) {
      alert('Incorrect Login Details');
      console.error('Login error:', error);
    }
  };

  return (
    <div className='login'>
      <img src={Logo} alt='Logo' className='login-logo' />
      <div className='login-form'>
        <h1>{signState}</h1>
        <form onSubmit={signState === 'Sign In' ? handleLogin : handleSignup}>
          {signState === 'Sign Up' && (
            <input
              type="email"
              name="email"
              placeholder='Email'
              value={signupDetails.email}
              onChange={handleInputChange}
              required
            />
          )}
          <input
            type='text'
            name='username'
            placeholder='Name'
            value={signState === 'Sign In' ? loginDetails.username : signupDetails.username}
            onChange={handleInputChange}
            required
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={signState === 'Sign In' ? loginDetails.password : signupDetails.password}
            onChange={handleInputChange}
            required
          />
          <button type='submit'>{signState === 'Sign In' ? 'Login' : 'Register'}</button>
          {signState === 'Sign In' && (
            <div className='form-help'>
              <div className='remember'>
                <input type='checkbox' />
                <label>Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          )}
        </form>
        <div className='form-switch'>
          {signState === 'Sign In' ? (
            <p>Register Now! <span onClick={() => setSignState('Sign Up')}>Register</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => setSignState('Sign In')}>Login</span></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
