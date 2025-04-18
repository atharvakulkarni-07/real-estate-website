import React from 'react';
import { Link } from 'react-router-dom';
import './buy.css';


const Buy = () => {
  return (
    <section className="buy-wrapper">
      <h2 className="buy-title">Explore Properties to Buy</h2>
      <div className="buy-options">
        <Link to="/buy/apartments" className="buy-option">
          <h3>Apartments</h3>
          <p>Find modern apartments in prime locations.</p>
          <div className='buy-image'>
            <img src='apartmentsbuy.jpg' alt="apartmentImage" />
          </div>
        </Link>

        <Link to="/buy/houses" className="buy-option">
          <h3>Houses</h3>
          <p>Discover beautiful houses tailored to your needs.</p>
          <div className='buy-image'>
            <img src='houses.jpg' alt="apartmentImage" />
          </div>
        </Link>
        
        <Link to="/buy/plots" className="buy-option">
          <h3>Plots</h3>
          <p>Choose from a variety of plots for your dream home.</p>
          <div className='buy-image'>
            <img src='plotsbuy.jpg' alt="apartmentImage" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Buy;
