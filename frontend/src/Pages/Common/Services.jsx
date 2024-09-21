import React from 'react';
import './Services.css'; // Make sure to import your CSS file
import vegImage from '../../Components/Assets/bg8.jpeg';
import futImage from '../../Components/Assets/bg16.avif';
import ovegImage from '../../Components/Assets/bg15.jpeg';
import ofutImage from '../../Components/Assets/bg13.jpeg';
// import banner from '../../Components/Assets/bg17.jpg';



const Services = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Agrios brings Everything for you</h1>
                    <button className="hero-button">Show Now</button>
                </div>
            </section>

            {/* Description Section */}
            <section className="description">
                <p>

                    Welcome to our online e-farming services! We offer a seamless platform for farmers and consumers to connect,ensuring fresh produce is just a click away. Whether you're looking to purchase farm-fresh fruits and vegetables or sell your crops directly to customers, our platform simplifies the process. From organic farming solutions to customized delivery options, we empower farmers to grow their businesses and provide customers with the highest quality produce straight from the source. Join us in building a sustainable, farm-to-table community!
                </p>
            </section>

            {/* Products Section */}
            <section className="products">
                <div className="product">
                    <img src={vegImage} alt="Vegetables" />
                    <div className="product-content">
                        <h2>Fresh Vegetables</h2>
                        <button className="product-button">Order Now</button>
                    </div>
                </div>
                <div className="product">
                    <img src={futImage} alt="Fruits" />
                    <div className="product-content">
                        <h2>Fresh Fruits</h2>
                        <button className="product-button">Order Now</button>
                    </div>
                </div>
                <div className="product">
                    <img src={ovegImage} alt="Vegetables" />
                    <div className="product-content">
                        <h2>Rotten Vegetables</h2>
                        <button className="product-button">Order Now</button>
                    </div>
                </div>
                <div className="product">
                    <img src={ofutImage} alt="Vegetables" />
                    <div className="product-content">
                        <h2>Overriped Fruits</h2>
                        <button className="product-button">Order Now</button>
                    </div>
                </div>

            </section>

            {/* Food Section */}
            <section className="food">
                <h2>Get together with us today! Get the MAXimum use of Food...</h2>
            </section>
        </div>
    );
};

export default Services;
