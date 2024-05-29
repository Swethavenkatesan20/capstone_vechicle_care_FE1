import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import userServices from '../services/userServices';

const Register = () => {

const navigate=useNavigate();

    const handleRegister = (e) => {
        // prevent the default form submission
        e.preventDefault();

        // get the details from the form
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const location = e.target[3].value;

        //console.log(name,email,password,location);
            
        //send details to api 
        userServices.register(name,email,password,location)

        .then(response => {
            // clear the form
            e.target.reset();

            alert('Registration successful');
            // if the registration is successful, redirect to the login page
            setTimeout(() => {
                navigate('/login');
            }, 500);
        })
        .catch(error => {
            // if there is an error, log the error to the console
            alert('Registration failed');
        });
    }


    
  return (
    <div>
        <form onSubmit={handleRegister} className='container border border-2 border-light rounded p-3 m-3'>
            <div className='mb-3'> 
                <input type="text" placeholder='Enter your Name' />

            </div>
            <div className='mb-3'>
                <input type="email" placeholder='Email'/>
            </div>
            <div className='mb-3'>
                <input type="password" placeholder="Password" />
            </div>
            <div className='mb-3'> 
                <input type="text" placeholder='Location..'/>
            </div>
            <button type='submit'>Register</button>
            <p>Already have an account ? <Link to='/login'>Login</Link> </p>
        </form>
    </div>
  )
}

export default Register