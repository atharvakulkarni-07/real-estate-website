import React from 'react';
import { Link } from 'react-router-dom';
import './homeinteriors.css';

const HomeInteriors = () => {
  return (
    <section className="homeinteriors-wrapper">
      <h2 className="homeinteriors-title">Explore Home Interior Solutions</h2>
      <div className="homeinteriors-options">
        <Link to="/homeinteriors/fullhome" className="homeinteriors-option">
          <h3>Full Home Interiors</h3>
          <p>Transform your entire home with our expert designs.</p>
          <div className='homeinteriors-image'>
            <img src='home-interior.jpg' alt="homeinteriorImage" />
          </div>
        </Link>
        <Link to="/homeinteriors/kitchen" className="homeinteriors-option">
          <h3>Modular Kitchen</h3>
          <p>Modern and functional kitchen designs tailored for you.</p>
          <div className='homeinteriors-image'>
            <img src='modular-kitchen.jpg' alt="homeinteriorImage" />
          </div>
        </Link>
        <Link to="/homeinteriors/furniture" className="homeinteriors-option">
          <h3>Furniture</h3>
          <p>High-quality and stylish furniture for every room in your home.</p>
          <div className='homeinteriors-image'>
            <img src='furniture.jpg' alt="homeinteriorImage" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HomeInteriors;
