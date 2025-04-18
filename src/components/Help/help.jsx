import React from 'react';
import { Link } from 'react-router-dom';
import './help.css';

const Help = () => {
  return (
    <section className="help-wrapper">
      <h2 className="help-title">Need Help?</h2>
      <p className="help-description">Find answers to your questions or contact our support team.</p>
      <div className="help-options">
        <Link to="/help/faqs" className="help-option">
          <h3>FAQs</h3>
          <p>Browse FAQs for quick answers.</p>
          <div className='help-image'>
            <img src='faqs.jpg' alt="faqs" />
          </div>
        </Link>
        <Link to="/help/support" className="help-option">
          <h3>Contact Support</h3>
          <p>Reach out to our support team for assistance.</p>
          <div className='help-image'>
            <img src='contact-support.jpg' alt="contact" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Help;
