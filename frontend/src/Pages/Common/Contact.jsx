import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="hero">
        <h1>Contact us anytime for 24/7 service</h1>
      </section>

      <section className="contact-info">
        <div className="info-box about">
          <h3>About</h3>
          <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui.</p>
        </div>
        <div className="info-box contact">
          <h3>Contact</h3>
          <p>+1 (402) 335-0079</p>
          <p>support@agrios.com</p>
          <p>Mon - Fri: 7:00 am - 6:00 pm</p>
        </div>
        <div className="info-box address">
          <h3>Address</h3>
          <p>66 Brokman Road Golden Street, New York</p>
          <p>United States of America</p>
        </div>
      </section>
      
      <div className='feedback'>
        Send us your valuable feedbacks
      </div>

      <section className="contact-form-section">
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097465!2d144.95373631531652!3d-37.816279979751634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577cefa7a0ed31!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1666781749481!5m2!1sen!2sau"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            width="100%"
            height="100%"
          ></iframe>
        </div>

        <div className="contact-form">
          <h3>Write a Message</h3>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Write a Message" required></textarea>
            <button type="submit">Send a Message</button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Contact;
