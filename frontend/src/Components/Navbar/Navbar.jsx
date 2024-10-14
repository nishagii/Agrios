import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import carticon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("home");

    const { getTotalCartItems, token, setToken } = useContext(ShopContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        navigate('/');
    }



    return (
        <div>
            <div className="nav-logo">
                <Link to='/'>
                    <img src={logo} alt="Logo" />
                </Link>

            </div>
            <br />

            <div className="navbar">
                <ul className="nav-menu">
                    <li>
                        <Link
                            to="/"
                            onClick={() => { setMenu("home") }}
                            className={`nav-link ${menu === "home" ? "active" : ""}`}
                        >
                            Home
                        </Link>
                        {menu === "home" && <hr />}
                    </li>
                    <li>
                        <Link
                            to="/about"
                            onClick={() => { setMenu("about") }}
                            className={`nav-link ${menu === "about" ? "active" : ""}`}
                        >
                            About
                        </Link>
                        {menu === "about" && <hr />}
                    </li>
                    <li>
                        <Link
                            to="/services"
                            onClick={() => { setMenu("services") }}
                            className={`nav-link ${menu === "services" ? "active" : ""}`}
                        >
                            Services
                        </Link>
                        {menu === "services" && <hr />}
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            onClick={() => { setMenu("contact") }}
                            className={`nav-link ${menu === "contact" ? "active" : ""}`}
                        >
                            Contact
                        </Link>
                        {menu === "contact" && <hr />}
                    </li>
                </ul>


                <div className="nav-login-cart">
                    {!token ? <Link to="/login" ><button>Login</button></Link>
                        : <button onClick={logout}>Logout</button>}

                    <Link to="/myorders">
                        <button>My Orders</button>
                    </Link>

                    <Link to="/cart">
                        <img src={carticon} alt="Cart" />
                    </Link>

                    <div className="nav-cart-count">
                        My cart
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

