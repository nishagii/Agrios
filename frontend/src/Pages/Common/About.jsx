import React from 'react';
import './About.css'; // Make sure to include your updated CSS file
import tractor from '../../Components/Assets/tractor.png';
import farmer from '../../Components/Assets/farmer.png';
import AgricultureP from '../../Components/Assets/1.jpg';
import OrganicP from '../../Components/Assets/2.jpg';
import fveg from '../../Components/Assets/3.jpg';
import DailyP from '../../Components/Assets/4.jpg';
import bonnie from '../../Components/Assets/bonnie.jpg';
import sarahh from '../../Components/Assets/sarahh.png';
const AboutPage = () => {
    return (
        <div>
            {/* Background Image Section */}
            <section className="hero">
                <h1>Wanna know something more ?</h1>
            </section>

            {/* Main Content Section */}
            <section className="main-content">
                <div className="content-left">
                    <h2>The Best Agriculture Market</h2>
                    <p className="highlight-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    <p>There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word which don’t look even.</p>
                    <ul>
                        <li>Supeo ednise suscipit sagittis leo</li>
                        <li>Entum estibulum dignissim posuere</li>
                        <li>Lorem ipsum on the tend to repeat</li>
                    </ul>
                    <button className="discover-more-button">Discover More</button>
                </div>
                <div className="content-right">
                    <div className="image-container">
                        <img src={tractor} alt="Tractor on a farm" className="main-image" />
                        <img src={farmer} alt="Farmer with crops" className="overlay-image" />
                    </div>
                </div>
            </section>

            {/* What We Offer Section */}
            <section className="what-we-offer">
                <h2>What We Offer</h2>
                <div className="offer-cards">
                    <div className="offer-card">
                        <img src={AgricultureP} alt="Agriculture Products" />
                        <button className="offer-button">Read More</button>
                    </div>
                    <div className="offer-card">
                        <img src={OrganicP} alt="Organic Products" />
                        <button className="offer-button">Read More</button>
                    </div>
                    <div className="offer-card">
                        <img src={fveg} alt="Fresh Vegetables" />
                        <button className="offer-button">Read More</button>
                    </div>
                    <div className="offer-card"> 
                        <img src={DailyP} alt="Daily Products" />
                        <button className="offer-button">Read More</button>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <h2>What They Say</h2>
                <div className="testimonial-cards">
                    <div className="testimonial-card">
                        <p>There are many variations of passages of lorem ipsum, but the majority have suffered alteration.</p>
                        <div className="testimonial-author">
                            <img src={bonnie} alt="Bonnie Tolbet" />
                            <h3>Bonnie Tolbet </h3>
                            <span> - Customer</span>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p>There are many variations of passages of lorem ipsum, but the majority have suffered alteration.</p>
                        <div className="testimonial-author">
                            <img src={sarahh} alt="Sarah Albert" />
                            <h3>Sarah Albert</h3>
                            <span> - Customer</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
