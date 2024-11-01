import React, { useContext, useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const LoginSignup = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const { url, setToken } = useContext(ShopContext);
  const [data, setData] = useState({
    name: '',
    email: '',
    type: 'Customer',
    password: ''
  });

  const navigate = useNavigate(); // Use the useNavigate hook

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("name",name,value)
    setData(data => ({ ...data, [name]: value }));
  }

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url + '/api/user/register';

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      toast.success(response.data.message);

      // Redirect to login page after successful signup
      navigate('/login');

    } else {
      toast.error(response.data.message);
    }
  }

  return (
    <div className="loginsignup ">
      <form onSubmit={onLogin} className="loginsignup-container up">
        <h1>{currentState}</h1>
        <div className="loginsignup-fields register">
          <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='User Name' />
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email' />
          <select onChange={onChangeHandler} name="type" id="user-type" >
            <option value="Customer">Customer</option>
            <option value="Shop Owner">Shop Owner</option>
            <option value="Animal Farm Owner">Animal Farm Owner</option>
          </select>
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' />
        </div>
        <button className='regbtn' type='submit'>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
        <p className='loginsignup-login'>Already have an account? <Link to="/login"><span>Login here</span></Link></p>
      </form>
    </div>
  );
}

export default LoginSignup;
