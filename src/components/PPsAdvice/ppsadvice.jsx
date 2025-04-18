import React from 'react';
import { Link } from 'react-router-dom';
import './ppsadvice.css';

const PPsAdvice = () => {
  return (
    <section className="ppsadvice-wrapper">
      <h2 className="ppsadvice-title">PP's Advice</h2>
      <p className="ppsadvice-description">Get expert advice, guides, and articles to help you make informed decisions.</p>
      <div className="ppsadvice-options">
        <Link to="/ppsadvice/guides" className="ppsadvice-option">
          <h3>Guides</h3>
          <p>Step-by-step guides to simplify your real estate journey.</p>
          <div className='ppsadvice-image'>
            <img src='guides.jpg' alt="guides" />
          </div>
        </Link>
        <Link to="/ppsadvice/articles" className="ppsadvice-option">
          <h3>Articles</h3>
          <p>In-depth articles on real estate trends and tips.</p>
          <div className='ppsadvice-image'>
            <img src='articles.jpg' alt="articles" />
          </div>
        </Link>
        <Link to="/ppsadvice/expertsadvice" className="ppsadvice-option">
          <h3>Expert Advice</h3>
          <p>Get insights from industry experts.</p>
          <div className='ppsadvice-image'>
            <img src='advice.jpg' alt="advice" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default PPsAdvice;
