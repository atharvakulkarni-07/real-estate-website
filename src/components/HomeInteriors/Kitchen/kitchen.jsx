import React from 'react';
import './kitchen.css';

const kitchenGallery = [
  { src: '/modular_kitchen1.jpg', alt: 'Sleek White Modular Kitchen' },
  { src: '/modular_kitchen2.jpg', alt: 'Modern Wooden Kitchen' },
  { src: '/modular_kitchen3.jpg', alt: 'Contemporary Open Kitchen' },
  { src: '/modular_kitchen4.jpg', alt: 'Compact City Kitchen' }
];

const Kitchen = () => {
  return (
    <section className="kitchen-wrapper">
      <h2 className="kitchen-title">Modular Kitchen Designs</h2>
      <p className="kitchen-description">
        Explore modern and functional modular kitchen designs that combine style and utility seamlessly.
      </p>

      <div className="kitchen-features">
        <h3>Why Choose Our Modular Kitchens?</h3>
        <ul>
          <li>
            <i className="fa fa-utensils" aria-hidden="true"></i>
            Custom layouts to fit any space
          </li>
          <li>
            <i className="fa fa-leaf" aria-hidden="true"></i>
            Eco-friendly and durable materials
          </li>
          <li>
            <i className="fa fa-bolt" aria-hidden="true"></i>
            Smart storage solutions and accessories
          </li>
          <li>
            <i className="fa fa-sync-alt" aria-hidden="true"></i>
            Easy maintenance and cleaning
          </li>
        </ul>
      </div>

      <div className="kitchen-process">
        <h3>Our Process</h3>
        <ol>
          <li>Consultation and space assessment</li>
          <li>3D design visualization and customization</li>
          <li>Material selection and production</li>
          <li>Professional installation and handover</li>
        </ol>
      </div>

      <div className="kitchen-gallery">
        <h3>Kitchen Gallery</h3>
        <div className="kitchen-gallery-grid">
          {kitchenGallery.map((img, idx) => (
            <div className="kitchen-gallery-item" key={idx}>
              <img src={img.src} alt={img.alt} />
              <span>{img.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kitchen;
