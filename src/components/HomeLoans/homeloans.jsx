import React from 'react';
import { Link } from 'react-router-dom';
import './homeloans.css';

const HomeLoans = () => {
  return (
    <section className="homeloans-wrapper">
      <h2 className="homeloans-title">Explore Home Loan Options</h2>
      <div className="homeloans-options">
        <Link to="/homeloans/applyforloan" className="homeloans-option">
          <h3>Apply for Loan</h3>
          <p>Submit your application for a home loan.</p>
          <div className='homeloans-image'>
            <img src='Loan.jpg' alt="LoanImage" />
          </div>
        </Link>
        <Link to="/homeloans/checkeligibility" className="homeloans-option">
          <h3>Check Eligibility</h3>
          <p>Find out if you're eligible for a home loan.</p>
          <div className='homeloans-image'>
            <img src='eligibility.png' alt="eligibilityImage" />
          </div>
        </Link>
        <Link to="/homeloans/loancalculator" className="homeloans-option">
          <h3>Loan Calculator</h3>
          <p>Calculate your monthly payments easily.</p>
          <div className='homeloans-image'>
            <img src='calculator.jpg' alt="apartmentImage" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HomeLoans;
