import axios from "axios";
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import '../registrationpage/signup.scss';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PhoneNumber  from 'libphonenumber-js';


export function Signup() {

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');  
  const { register, handleSubmit, formState: { errors } } = useForm();
  

  const Navigate = useNavigate();

  const { toast } = require('react-toastify');
  require('react-toastify/dist/ReactToastify.css');

  const onSubmit = () => {
    const data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phonenumber,
      password: password
    }
    try {
      axios({
        method: 'POST',
        url: 'http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/create',
        data: data
      }).then(() => {
        toast.success("data saved successfully.....")
      });
    } catch (e) {
      console.log("error", e);

    }
    Navigate('/login')

  };
  const validatePhoneNumber = (value) => {
    try {
      const phoneNumber = PhoneNumber(value, 'IN');
      if (!phoneNumber.isValid()) {
        throw new Error('Invalid phone number');
      }
    } catch (error) {
      return 'Invalid phone number';
    }
  };

  return (
    <div className='signup template d-flex justify-content-center align-items-center vh-130 '>
      <div className='form_container p-5 mt-3 rounded bg-white'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='text-center' style={{ color: "blue", fontSize: "40px" }} ></div>
          <h3 className='text-center' style={{ color: "blue", fontWeight: "bold" }}> Create Account !</h3>
          <div className='mb-2'>
            <label htmlFor='firstname'> <label style={{ color: "gray", fontWeight: "bold" }} ></label>Firstname</label>
            <input type='text' placeholder='Enter your firstname' id="firstname" className='form-control'
              {...register('firstname', {
                required: 'FirstName is required', minLength: {
                  value: 4,
                  message: 'firstname must be at least 4 characters long'
                },
                pattern: {
                  value: /^[A-Za-z][A-Za-z\s]*$/,
                  message: 'Name must start with a letter'
                }
              })} onChange={e => setFirstName(e.target.value)}></input>
            {errors.firstname && <p style={{ color: 'red' }}>{errors.firstname.message}</p>}
          </div>
          <div className='mb-2'>
            <label htmlFor='lastname'><label style={{ color: "gray", fontWeight: "bold" }} ></label>Lastname</label>
            <input type='text' placeholder='Enter your lastname' id="lastname" className='form-control'
              {...register('lastname', {
                required: 'LastName is required', minLength: {
                  value: 4,
                  message: 'firstname must be at least 4 characters long'
                },
                pattern: {
                  value: /^[A-Za-z][A-Za-z\s]*$/,
                  message: 'Name must start with a letter'
                }
              })} onChange={e => setLastName(e.target.value)}></input>
            {errors.lastname && <p style={{ color: 'red' }}>{errors.lastname.message}</p>}
          </div>
          <div className='mb-2'>
            <label htmlFor='email'><label style={{ color: "gray", fontWeight: "bold" }} ></label> Email</label>
            <input type='text' placeholder='Enter your valid emailId' id="email" className='form-control'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@gmail.com$/,
                  message: 'Invalid Gmail address format'
                }
              })} onChange={e => setEmail(e.target.value)}></input>
            {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
          </div>
          <div className='mb-2'>
          <label htmlFor='phonenumber'><label style={{ color: "gray", fontWeight: "bold" }} ></label>Phonenumber</label>
            <input type='tel' placeholder='Enter your phonenumber' id="phonenumber" className='form-control'
              {...register('phonenumber', {
                required: 'Phone number is required',
                validate: validatePhoneNumber,
                pattern: {
                  // value: /^\d{10}$/,
                  message: 'Phone number must contain exactly 10 numbers'
                }
              })} onChange={e => setPhonenumber(e.target.value)} ></input>
            {errors.phonenumber && <p style={{ color: 'red' }}>{errors.phonenumber.message}</p>}
          </div>
          <div className='mb-2'>
            <label htmlFor='password'><label style={{ color: "gray", fontWeight: "bold" }} ></label>password</label>
            <input type='password' placeholder='Enter your password' id="password" className='form-control'
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long'
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                  message: 'Password must contain at least one uppercase letter, one number, and one special character'
                }
              })} onChange={e => setPassword(e.target.value)}></input>
            {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
          </div>
          <div className="mb-2" >
            <label>
              <input type="checkbox" {...register('agree', { required: 'You must agree to the terms' })} />
              I agree to the terms and conditions
            </label>
            {errors.agree && <p style={{ color: 'red' }}>{errors.agree.message}</p>}
          </div>
          <div className='d-grid'>
            <button className='btn btn-primary'>Signup</button>
          </div>
          <p className='text-end mt-2'>
            Already Registered <Link to="/login" className="ms-2"> SignIn</Link>
          </p>
        </form>
      </div>
    </div>
  )
}



