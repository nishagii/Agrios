import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="contact-footer">
                <div className="footer-section">
                    <img src={logo} alt="logo" />
                    <p className='agrios'>
                        "Agrios: Where Nature's Bounty Meets Sustainable Cultivation."
                    </p>
                    <div className="social-icons">
                        {/* Add social media icons here */}
                    </div>
                </div>
                <div className="footer-section">
                    <h4>Explore</h4>
                    <ul>
                        <Link to="/about"><li>About</li></Link>
                        <Link to="/services"><li>Services</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>News</h4>
                    <ul>
                        <li>Bringing Food Production Back to Cities</li>
                        <li>Now we added strawberries to our farm.</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>+94 713 127 870</p>
                    <p>reach@AGRIOS.com</p>
                    <p>No 45, Hospital road, Kahathuduwa, Piliyandala</p>

                </div>
                <div className="footer-section">
                    <input type="email" placeholder="Your Email Address" />
                    <button className='button'>Subscribe</button>
                </div>
            </footer>
        </div>
    )
}

export default Footer
