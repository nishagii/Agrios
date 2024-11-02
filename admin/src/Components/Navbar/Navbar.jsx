import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <NavLink to='/' className='navbar'>

            <h3 className='admin_name'>Admin Panel</h3>
            <img src={assets.profile_image} alt="" className='profile_img' />

        </NavLink>
    )
}

export default Navbar
