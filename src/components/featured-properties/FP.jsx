import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './FP.css'; // Create this file for custom styles

const FeaturedProperties = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const properties = [
    { id: 1, image: 'image1.jpg', title: 'Sovereign Spaces Bungalow', price: '$1,200,000', location: 'Beverly Hills, CA' },
    { id: 2, image: 'image2.jpg', title: 'Elite Elegance Estate', price: '$864,000', location: 'New York, NY' },
    { id: 3, image: 'image3.jpg', title: 'Luxe Living Oceanfront', price: '$545,000', location: 'Los Angeles, CA' },
    { id: 4, image: 'image4.jpg', title: 'Royal Retreat Ranch', price: '$758,000', location: 'Neverland Ranch, California' },
    { id: 5, image: 'image5.jpg', title: 'Gold Leaf Villa', price: '$399,000', location: 'New York, NY' },
    { id: 6, image: 'image6.jpg', title: 'Prestige Palace', price: '$407,000', location: 'New York, NY' },
    { id: 7, image: 'image7.jpg', title: 'Modern Luxe Living Oceanfront', price: '$299,000', location: 'Hillsboro Beach, Florida' },
    { id: 8, image: 'image8.jpg', title: 'Summit Symphony Residence', price: '$693,000', location: 'Georgia, Atlanta' },
    { id: 9, image: 'image9.jpg', title: 'Celeno Mansion', price: '$809,000', location: 'New York, NY' },
    { id: 10, image: 'image10.jpg', title: 'Pothills Home', price: '$562,500', location: 'Chicago, US' },
  ];

  return (
    <section className="featured-properties">
      <h2 className="fp-title">Featured Properties</h2>
      <Slider {...settings}>
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} className="property-image" />
            <div className="property-info">
              <h3>{property.title}</h3>
              <p className="property-price">{property.price}</p>
              <p className="property-location">{property.location}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FeaturedProperties;
