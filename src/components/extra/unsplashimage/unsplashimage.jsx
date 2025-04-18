import React, { useState, useEffect } from 'react';

const UnsplashImageSlider = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const apiKey = 'Yi-3JhJjwX_HkPeYuZPTBAO2C0mLzwYillGniTsjoyc';
      const response = await fetch(`https://api.unsplash.com/photos/random?query=real-estate&count=20&client_id=${apiKey}`);
      const data = await response.json();
      setImages(data.map(image => image.urls.regular));
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  if (images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="image-container">
      <img src={images[currentImageIndex]} alt="Real Estate Property" />
    </div>
  );
};

export default UnsplashImageSlider;
