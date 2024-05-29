import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userServices from '../services/userServices';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Send details to API
    userServices.login(email, password)
      .then(response => {
        // Clear the form
        e.target.reset();

        if (response.status === 200) {
          alert('Login successful');
          // If the login is successful, redirect to the dashboard page
          setTimeout(() => {
            navigate('/dashboard');
          }, 500);
        } else {
          alert('Login failed');
        }
      })
      .catch(error => {
        // If there is an error, log the error to the console
        alert('Login failed');
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleLogin} className='container border border-2 border-light rounded p-3 m-3'>
        <div className='mb-3'>
          <input type="email" name="email" placeholder='Email' required />
        </div>
        <div className='mb-3'>
          <input type="password" name="password" placeholder="Password" required />
        </div>
        <button type='submit'>Login</button>
        <p>Don't have an account? <Link to='/register'>Register</Link></p>
      </form>
    </div>
  );
};

export default Login;
