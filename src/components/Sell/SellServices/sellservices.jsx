import React from 'react';
import './sellservices.css';

const SellServices = () => {
  return (
    <section className="sellservices-wrapper">
      <h2 className="sellservices-title">Professional Sell Services</h2>
      <p className="sellservices-description">Access expert services to sell your property efficiently.</p>

      <div className="services-grid">
        <div className="service-card">
          <h3>Property Valuation</h3>
          <p>Get an accurate assessment of your property's value based on market trends and comparable sales.</p>
        </div>

        <div className="service-card">
          <h3>Marketing Strategy</h3>
          <p>Benefit from a tailored marketing plan that includes virtual tours, social media promotion, and targeted advertising.</p>
        </div>

        <div className="service-card">
          <h3>Staging and Presentation</h3>
          <p>Enhance your property's appeal with professional staging and presentation techniques to attract more buyers.</p>
        </div>

        <div className="service-card">
          <h3>Negotiation Support</h3>
          <p>Receive expert guidance throughout the negotiation process to ensure you get the best possible deal.</p>
        </div>

        <div className="service-card">
          <h3>Legal Assistance</h3>
          <p>Access comprehensive legal support to handle all paperwork and ensure a smooth transaction.</p>
        </div>

        <div className="service-card">
          <h3>Customer Service</h3>
          <p>Enjoy dedicated customer support to address any questions or concerns you may have during the selling process.</p>
        </div>
      </div>

      <div className="why-choose-us">
        <h3>Why Choose Us?</h3>
        <p>Our team of experts is committed to providing personalized service, ensuring your property sells quickly and for the best price possible.</p>
      </div>
    </section>
  );
};

export default SellServices;
