import React from 'react';
import './fullhome.css';

const galleryImages = [
  { src: '/living_room.jpg', alt: 'Modern Living Room' },
  { src: '/cozy_bedroom.jpg', alt: 'Cozy Bedroom' },
  { src: '/contemporary_kitchen.jpg', alt: 'Contemporary Kitchen' },
  { src: '/elegant_dining_area.jpg', alt: 'Elegant Dining Area' },
  { src: '/functional_study_room.jpg', alt: 'Functional Study Room' },
  { src: '/luxurious_bathroom.jpg', alt: 'Luxurious Bathroom' }
];

const FullHome = () => {
  return (
    <section className="fullhome-wrapper">
      <h2 className="fullhome-title">Full Home Interior Solutions</h2>
      <p className="fullhome-description">
        Transform your entire home with our expert interior design solutions tailored to your style and needs.
      </p>

      <div className="fullhome-benefits">
        <h3>Why Choose Our Full Home Interiors?</h3>
        <ul>
          <li>
            <i className="fa fa-paint-brush" aria-hidden="true"></i>
            Personalized design consultation for every room
          </li>
          <li>
            <i className="fa fa-couch" aria-hidden="true"></i>
            Premium quality materials and finishes
          </li>
          <li>
            <i className="fa fa-clock" aria-hidden="true"></i>
            Timely project completion and hassle-free execution
          </li>
          <li>
            <i className="fa fa-handshake" aria-hidden="true"></i>
            After-sales support and maintenance
          </li>
        </ul>
      </div>

      <div className="fullhome-process">
        <h3>Our Process</h3>
        <ol>
          <li>Book a free design consultation</li>
          <li>Get 3D visualizations and detailed estimates</li>
          <li>Collaborate with our expert designers</li>
          <li>Enjoy seamless execution and timely delivery</li>
        </ol>
      </div>

      <div className="fullhome-gallery">
        <h3>Gallery</h3>
        <div className="gallery-grid">
          {galleryImages.map((img, idx) => (
            <div className="gallery-item" key={idx}>
              <img src={img.src} alt={img.alt} />
              <span>{img.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullHome;
