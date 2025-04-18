import React from 'react';
import './furniture.css';

const furnitureGallery = [
  { src: '/sofa.jpg', alt: 'Modern Sofa Set' },
  { src: '/dining_table.jpg', alt: 'Elegant Dining Table' },
  { src: '/bed.jpg', alt: 'Comfortable Bed' },
  { src: '/wardrobe.jpg', alt: 'Spacious Wardrobe' },
  { src: '/study_table.jpg', alt: 'Functional Study Table' },
  { src: '/accent_chair.jpg', alt: 'Accent Chair' }
];

const Furniture = () => {
  return (
    <section className="furniture-wrapper">
      <h2 className="furniture-title">Stylish Furniture</h2>
      <p className="furniture-description">
        Discover high-quality, stylish furniture designed to complement every room in your home.
      </p>

      <div className="furniture-categories">
        <h3>Our Furniture Categories</h3>
        <ul>
          <li>
            <i className="fa fa-couch" aria-hidden="true"></i>
            Living Room: Sofas, Coffee Tables, TV Units
          </li>
          <li>
            <i className="fa fa-bed" aria-hidden="true"></i>
            Bedroom: Beds, Wardrobes, Dressers
          </li>
          <li>
            <i className="fa fa-utensils" aria-hidden="true"></i>
            Dining Room: Dining Tables, Chairs, Cabinets
          </li>
          <li>
            <i className="fa fa-book" aria-hidden="true"></i>
            Study: Study Tables, Bookshelves, Chairs
          </li>
        </ul>
      </div>

      <div className="furniture-gallery">
        <h3>Furniture Gallery</h3>
        <div className="furniture-gallery-grid">
          {furnitureGallery.map((img, idx) => (
            <div className="furniture-gallery-item" key={idx}>
              <img src={img.src} alt={img.alt} />
              <span>{img.alt}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="furniture-why">
        <h3>Why Choose Our Furniture?</h3>
        <p>
          Our furniture is crafted with attention to detail, using premium materials and modern designs. 
          We offer customization options, timely delivery, and after-sales support to ensure your satisfaction.
        </p>
      </div>
    </section>
  );
};

export default Furniture;
