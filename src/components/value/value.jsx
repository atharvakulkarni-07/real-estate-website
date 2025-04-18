import React, { useEffect, useRef } from 'react'
import "./Value.css"
import UnsplashImageValue from './UnsplashImageValue/unsplash';

const Value = () => {
  const values = [
    { id: 1, title: "INTEGRITY", description: "We uphold the highest ethical standards in all our dealings." },
    { id: 2, title: "EXCELLENCE", description: "We strive for excellence in every aspect of our service." },
    { id: 3, title: "CLIENT-CENTRIC", description: "Our clients' needs and satisfaction are at the heart of everything we do." }
  ];

  const valueRightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (valueRightRef.current) {
      observer.observe(valueRightRef.current);
    }

    return () => {
      if (valueRightRef.current) {
        observer.unobserve(valueRightRef.current);
      }
    };
  }, []);

  return (
    <section className='value-wrapper'>
      <div className="back-image-value"></div>
      <div className='value-left'>
        <h2 className="value-title">OUR CORE VALUES</h2>
        <div className="image-container-value">
          <UnsplashImageValue />
        </div>
      </div>
      
      <div className="value-right" ref={valueRightRef}>
        <ul className="values-list">
          {values.map((value) => (
            <li key={value.id} className="value-item">
              <h2>{value.title}</h2>
              <p>{value.description}</p>
            </li>
          ))}
        </ul>
      </div>

    </section>
  )
}

export default Value
