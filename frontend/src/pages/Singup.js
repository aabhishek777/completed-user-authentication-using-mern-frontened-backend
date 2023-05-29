import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'


import '../public/signup.css';
const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    axios.post('http://localhost:5000/api/v1/post', formData)
      .then(
        console.log('Data send Successfully'))
      .catch(e => console.log(e));
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div>

      <h1>Already registered</h1>
      <div><Link to='/login' > <div>Login</div></Link></div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />

        <label htmlFor="confirmPassword">Confirm password</label>
        <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignupPage;
