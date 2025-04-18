import React from 'react';
import { Link } from 'react-router-dom';
import './rent.css';

const Rent = () => {
  return (
    <section className="rent-wrapper">
      <h2 className="rent-title">Explore the Rented Properties</h2>
      <div className="rent-options">
        <Link to="/rent/apartments" className="rent-option">
          <h3>Apartments</h3>
          <p>Find modern apartments for rent in prime locations.</p>
          <div className='rent-image'>
            <img src='apartment-rent.jpg' alt="apartmentImage" />
          </div>
        </Link>
        <Link to="/rent/houses" className="rent-option">
          <h3>Houses</h3>
          <p>Discover beautiful houses available for rent.</p>
          <div className='rent-image'>
            <img src='house-rent.jpg' alt="apartmentImage" />
          </div>
        </Link>
        <Link to="/rent/co-living" className="rent-option">
          <h3>PG/Co-living</h3>
          <p>Affordable co-living spaces for shared living.</p>
          <div className='rent-image'>
            <img src='coliving-rent.jpg' alt="apartmentImage" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Rent;
