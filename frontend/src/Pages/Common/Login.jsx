import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const { url, setToken, setUserType, setUserName } = useContext(ShopContext);
    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((data) => ({ ...data, [name]: value }));
    };

    const onLogin = async (event) => {
        event.preventDefault();
        const loginUrl = url + '/api/user/login';

        try {
            const response = await axios.post(loginUrl, data);
            console.log(response.data);

            if (response.data.success) {
                const {type} = response.data;
                setToken(response.data.token);

                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userType', response.data.type); // Store userType in local storage
                localStorage.setItem('userName', response.data.name);//store username in local storage

                setUserType(response.data.type); // Update context with userType
                setUserName(response.data.name); // Update context with username

                toast.success(response.data.message);

                // Redirect to the home page after successful login and refresh the page
                navigate('/');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <div className="loginsignup">
            <form onSubmit={onLogin} className="loginsignup-container">
                <h1>Login</h1>
                <div className="loginsignup-fields login">
                    <input
                        name="email"
                        onChange={onChangeHandler}
                        value={data.email}
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        name="password"
                        onChange={onChangeHandler}
                        value={data.password}
                        type="password"
                        placeholder="Password"
                    />
                </div>
                <div>
                    
                </div>
                <button type="submit">Login</button>
                <p className="loginsignup-login">
                    Do not have an account? <Link to="/register"><span>Register here</span></Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
