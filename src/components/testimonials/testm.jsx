import React, { useState, useEffect } from 'react';
import './testm.css';

const Testimonials = () => {
  const testimonials = [
    { id: 1, text: "This service was fantastic! Highly recommend to anyone looking for a new home.", author: "John Doe", image: "person1.jpg" },
    { id: 2, text: "A wonderful experience from start to finish. The team was very helpful!", author: "Jane Smith", image: "person3.jpg" },
    { id: 3, text: "I found my dream house thanks to their expert guidance. Truly grateful!", author: "Emily Johnson", image: "person5.jpg" },
    { id: 4, text: "Professional and attentive. They made the process so easy!", author: "Michael Brown", image: "person2.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials-wrapper">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}> 
            <div className="testimonial-image-container">
              <img src={testimonial.image} alt={testimonial.author} className="testimonial-image" />
            </div>
            <p>{testimonial.text}</p>
            <h4>- {testimonial.author}</h4>
          </div>
        ))}
      </div>
      <div className="dot-slider">
        {testimonials.map((_, index) => (
          <span key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)}></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
