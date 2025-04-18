import React from 'react'
import "./tail.css"

const Tail = () => {
  return (
    <footer className="tail-wrapper">
      <div className="tail-container">
        <div className="tail-content">
          <div className="tail-section">
            <h3>Panda's Paradise</h3>
            <p>Your trusted partner in real estate, turning dreams into addresses since 2016.</p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="tail-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="tail-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Buy Property</a></li>
              <li><a href="#">Sell Property</a></li>
              <li><a href="#">Rent Property</a></li>
              <li><a href="#">Property Management</a></li>
            </ul>
          </div>
          <div className="tail-section">
            <h4>Newsletter</h4>
            <p>Stay updated with our latest news and offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="tail-bottom">
          <p>&copy; 2025 Panda's Paradise. All rights reserved.</p>
          <p>
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Tail
