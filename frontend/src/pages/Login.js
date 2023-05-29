


import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleChange = (event) => {


    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    }
    );

  }

  const onSubmitHandeller = async (event) => {
    try {


      event.preventDefault();
      console.log(loginData);

      const res = await axios.post('http://localhost:5000/api/v1/login', loginData);

      if (res?.data.token) {

        localStorage.setItem("token", res?.data.token);
        dispatch({ type: "login", payload: res?.data.data });
        Navigate("/home")

      }


    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <h3>Please enter login credentials</h3>
      <form onSubmit={onSubmitHandeller}>
        Email:

        <input type="text" htmlFor="email" value={loginData.email} name='email' onChange={handleChange} />
        Password:

        <input type="text" htmlFor="password" value={loginData.password} name='password' onChange={handleChange} />


        <button type='submit'>Login</button>
      </form>

    </>
  )
}

export default Login