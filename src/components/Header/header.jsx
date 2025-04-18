import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import './header.css';
import LoginModal from '../loginPage/loginModal';

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLogin = (email, password) => {
    console.log('Login attempt', email, password);
    setIsLoginModalOpen(false);
  };

  return (
    <section className="h-wrapper">
  <div className="h-container">
    <div className="image-and-name">
      {/* Wrap logo in NavLink */}
      <div className="logoimg">
        <NavLink to="/">
          <img src="/logo.png" alt="Company Logo" width={100} />
        </NavLink>
      </div>

      {/* Wrap website name in NavLink */}
      <div className="name">
        <NavLink to="/" className="homepage-link">PANDA'S PARADISE</NavLink>
      </div>
    </div>

        <nav className="anchors">
          {/* Buy Dropdown */}
          <div className="dropdown">
            <NavLink to="/buy" className={({ isActive }) => (isActive ? 'active-link' : '')}>Buy</NavLink>
            <div className="dropdown-content">
              <NavLink to="/buy/apartments" className={({ isActive }) => (isActive ? 'active-link' : '')}>Apartments</NavLink>
              <NavLink to="/buy/houses" className={({ isActive }) => (isActive ? 'active-link' : '')}>Houses</NavLink>
              <NavLink to="/buy/plots" className={({ isActive }) => (isActive ? 'active-link' : '')}>Plots</NavLink>
            </div>
          </div>

          {/* Rent Dropdown */}
          <div className="dropdown">
            <NavLink to="/rent" className={({ isActive }) => (isActive ? 'active-link' : '')}>Rent</NavLink>
            <div className="dropdown-content">
              <NavLink to="/rent/apartments" className={({ isActive }) => (isActive ? 'active-link' : '')}>Apartments</NavLink>
              <NavLink to="/rent/houses" className={({ isActive }) => (isActive ? 'active-link' : '')}>Houses</NavLink>
              <NavLink to="/rent/co-living" className={({ isActive }) => (isActive ? 'active-link' : '')}>PG/Co-living</NavLink>
            </div>
          </div>

          {/* Sell Dropdown */}
          <div className="dropdown">
            <NavLink to="/sell" className={({ isActive }) => (isActive ? 'active-link' : '')}>Sell</NavLink>
            <div className="dropdown-content">
              <NavLink to="/sell/postproperty" className={({ isActive }) => (isActive ? 'active-link' : '')}>Post Property</NavLink>
              <NavLink to="/sell/sellservices" className={({ isActive }) => (isActive ? 'active-link' : '')}>Sell Services</NavLink>
            </div>
          </div>

          {/* Home Loans Dropdown */}
          <div className="dropdown">
            <NavLink to="/homeloans" className={({ isActive }) => (isActive ? 'active-link' : '')}>Home Loans</NavLink>
            <div className="dropdown-content">
              <NavLink to="/homeloans/applyforloan" className={({ isActive }) => (isActive ? 'active-link' : '')}>Apply for Loan</NavLink>
              <NavLink to="/homeloans/checkeligibility" className={({ isActive }) => (isActive ? 'active-link' : '')}>Check Eligibility</NavLink>
              <NavLink to="/homeloans/loancalculator" className={({ isActive }) => (isActive ? 'active-link' : '')}>Loan Calculator</NavLink>
            </div>
          </div>

          {/* Home Interiors Dropdown */}
          <div className="dropdown">
            <NavLink to="/homeinteriors" className={({ isActive }) => (isActive ? 'active-link' : '')}>Home Interiors</NavLink>
            <div className="dropdown-content">
              <NavLink to="/homeinteriors/fullhome" className={({ isActive }) => (isActive ? 'active-link' : '')}>Full Home Interiors</NavLink>
              <NavLink to="/homeinteriors/kitchen" className={({ isActive }) => (isActive ? 'active-link' : '')}>Modular Kitchen</NavLink>
              <NavLink to="/homeinteriors/furniture" className={({ isActive }) => (isActive ? 'active-link' : '')}>Furniture</NavLink>
            </div>
          </div>

          {/* PP's Advice Dropdown */}
          <div className="dropdown">
            <NavLink to="/ppsadvice" className={({ isActive }) => (isActive ? 'active-link' : '')}>PP's Advice</NavLink>
            <div className="dropdown-content">
              <NavLink to="/ppsadvice/guides" className={({ isActive }) => (isActive ? 'active-link' : '')}>Guides</NavLink>
              <NavLink to="/ppsadvice/articles" className={({ isActive }) => (isActive ? 'active-link' : '')}>Articles</NavLink>
              <NavLink to="/ppsadvice/expertsadvice" className={({ isActive }) => (isActive ? 'active-link' : '')}>Expert Advice</NavLink>
            </div>
          </div>

          {/* Help Dropdown */}
          <div className="dropdown">
            <NavLink to="/help" className={({ isActive }) => (isActive ? 'active-link' : '')}>Help</NavLink>
            <div className="dropdown-content">
              <NavLink to="/help/faqs" className={({ isActive }) => (isActive ? 'active-link' : '')}>FAQs</NavLink>
              <NavLink to="/help/support" className={({ isActive }) => (isActive ? 'active-link' : '')}>Contact Support</NavLink>
            </div>
          </div>

          {/* Login Button */}
          <button onClick={() => setIsLoginModalOpen(true)}>Login</button>

        </nav>

        {/* Login Modal */}
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          onLogin={handleLogin}
        />
      </div>
    </section>
  );
};

export default Header;
