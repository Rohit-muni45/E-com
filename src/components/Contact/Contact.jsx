import React from 'react';
import Footer from '../Footer/Footer';
import './Contact.css';


const ContactPage = () => {

  return (
    <>
    <div className="contact-page">
      <div className="contact-info">
        <div className="contact-details">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h4>ADDRESS:</h4>
              <p>123 Main Road, Rajahmundry, India</p>
            </div>
          </div>

          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h4>EMAIL:</h4>
              <p className='mail'><a href="mailto:hello@mrstore.com">hello@mrstore.com</a></p>
              <p className='mail'><a href="mailto:support@mrstore.com">support@mrstore.com</a></p>
            </div>
          </div>

          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <div>
              <h4>CALL US:</h4>
              <p>1 (234) 567-8910</p>
            </div>
          </div>
        </div>

        <div className="contact-social">
          <h4>CONTACT US</h4>
          <p>Reach out to us for inquiries or support.</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
      </div>

      <div className="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209270.91715470346!2d81.70902286346542!3d16.97830791204198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a36391ce3c29%3A0xe62e85214d2d530b!2sMain%20Rd%2C%20Rajamahendravaram%2C%20Andhra%20Pradesh%2C%20India!5e1!3m2!1sen!2sus!4v1726814291125!5m2!1sen!2sus" 
         width='100%' 
         height="450"
         style={{border:0}}
         allowfullscreen="" 
         loading="lazy"
         referrerpolicy="no-referrer-when-downgrade"
         ></iframe>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactPage;
