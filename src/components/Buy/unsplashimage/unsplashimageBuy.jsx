import React, { useState, useEffect } from 'react';

const UnsplashImageBuy = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const apiKey = import.meta.env.VITE_UNSPLASH_KEY;
      const response = await fetch(`https://api.unsplash.com/photos/random?query=Apartments&count=20&client_id=${apiKey}`);
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
      <img src={images[currentImageIndex]} alt="Apartments" />
    </div>
  );
};

export default UnsplashImageBuy;
