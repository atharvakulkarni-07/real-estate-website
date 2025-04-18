import React from 'react';
import { Link } from 'react-router-dom';
import './sell.css';

const Sell = () => {
  return (
    <section className="sell-wrapper">
      <h2 className="sell-title">Explore Selling Options</h2>
      <div className="sell-options">
        <Link to="/sell/postproperty" className="sell-option">
          <h3>Post Property</h3>
          <p>List your property for sale easily.</p>
          <div className='sell-image'>
            <img src='post-property.jpg' alt="apartmentImage" />
          </div>
        </Link>
        <Link to="/sell/sellservices" className="sell-option">
          <h3>Sell Services</h3>
          <p>Access professional services to sell your property.</p>
          <div className='sell-image'>
            <img src='sell-services.png' alt="sell-services-Image" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Sell;
