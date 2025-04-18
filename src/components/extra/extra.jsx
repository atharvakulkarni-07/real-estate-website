import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

library.add(fas)


import "./extra.css";
import UnsplashImageSlider from './unsplashimage/unsplashimage';
import AnimatedNumbers from "react-animated-numbers";

const Extra = () => {
  return (
    <section className="extra-wrapper">
      <div className="background-image"></div>
      <div className="extra-container">
        <div className="extra-content">
          <div className="extra-left">
            <h1 className="extra-title">
              Discover<br/>
              the Most<br/>
              Suitable Property
            </h1>
            <p className="extra-desc">
              At Panda Paradise, we are dedicated to turning your real estate dreams into reality. 
              With over 10 years of experience in the industry, we have established ourselves as a 
              trusted partner for buyers, sellers, and investors in New York and beyond.
            </p>
            <div className="extra-features">
              <div className="feature">
                <i className="fas fa-home"></i>
                <AnimatedNumbers
                  includeComma
                  animateToNumber={1000}
                  fontStyle={{ fontSize: 24 }}
                  locale="en-US"
                  configs={[
                    { mass: 1, tension: 220, friction: 100 },
                    { mass: 1, tension: 180, friction: 130 },
                    { mass: 1, tension: 280, friction: 90 },
                    { mass: 1, tension: 180, friction: 135 },
                    { mass: 1, tension: 260, friction: 100 },
                    { mass: 1, tension: 210, friction: 180 },
                  ]}
                />
                <span>+ Properties</span>
              </div>
              <div className="feature">
                <i className="fas fa-users"></i>
                <AnimatedNumbers
                  includeComma
                  animateToNumber={500}
                  fontStyle={{ fontSize: 24 }}
                  locale="en-US"
                  configs={[
                    { mass: 1, tension: 220, friction: 100 },
                    { mass: 1, tension: 180, friction: 130 },
                    { mass: 1, tension: 280, friction: 90 },
                    { mass: 1, tension: 180, friction: 135 },
                    { mass: 1, tension: 260, friction: 100 },
                    { mass: 1, tension: 210, friction: 180 },
                  ]}
                />
                <span>+ Happy Clients</span>
              </div>
              <div className="feature">
                <i className="fas fa-award"></i>
                <span>#1 Real Estate Agency</span>
              </div>
            </div>
            <button className="cta-button">Explore Properties</button>
          </div>
          <div className="extra-right">
            <UnsplashImageSlider />
            <div className="search-overlay">
              <input type="text" placeholder="Search properties..." />
              <button><i className="fas fa-search"></i></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Extra;
