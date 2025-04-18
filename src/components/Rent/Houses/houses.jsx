import React, { useState } from 'react';
import './houses.css';

const Houses = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState({});

  const housesList = [
    {
      id: 1,
      image: 'house1.jpg',
      title: 'House 1',
      description: 'Beautiful house in a quiet neighborhood.',
      extraInfo: 'Additional details will go here later.'
    },
    {
      id: 2,
      image: 'house2.jpg',
      title: 'House 2',
      description: 'Luxurious house with modern amenities.',
      extraInfo: 'More details will be added here.'
    },
    {
      id: 3,
      image: 'house3.jpg',
      title: 'House 3',
      description: 'Spacious house perfect for large families.',
      extraInfo: 'Extra info will be added here.'
    },
    {
      id: 4,
      image: 'house4.jpg',
      title: 'House 4',
      description: 'Stylish house with a modern design.',
      extraInfo: 'Additional details will go here later.'
    },
    {
      id: 5,
      image: 'house5.jpg',
      title: 'House 5',
      description: 'Cozy house perfect for couples.',
      extraInfo: 'More details will be added here.'
    },
    {
      id: 6,
      image: 'house6.jpg',
      title: 'House 6',
      description: 'Beautiful house in a prime location.',
      extraInfo: 'Extra info will be added here.'
    },
    {
      id: 7,
      image: 'house7.jpg',
      title: 'House 7',
      description: 'Modern house with great facilities.',
      extraInfo: 'Additional details will go here later.'
    },
    {
      id: 8,
      image: 'house8.jpg',
      title: 'House 8',
      description: 'Luxurious house with plenty of space.',
      extraInfo: 'More details will be added here.'
    },
    {
      id: 9,
      image: 'house9.jpg',
      title: 'House 9',
      description: 'Stylish house with a modern twist.',
      extraInfo: 'Extra info will be added here.'
    },
    {
      id: 10,
      image: 'house10.jpg',
      title: 'House 10',
      description: 'Beautiful house in a quiet neighborhood.',
      extraInfo: 'Additional details will go here later.'
    },
    {
      id: 11,
      image: 'house11.jpg',
      title: 'House 11',
      description: 'Spacious house perfect for large families.',
      extraInfo: 'More details will be added here.'
    },
    {
      id: 12,
      image: 'house12.jpg',
      title: 'House 12',
      description: 'Modern house with great amenities.',
      extraInfo: 'Extra info will be added here.'
    },
    {
      id: 13,
      image: 'house13.jpg',
      title: 'House 13',
      description: 'Luxurious house with plenty of space.',
      extraInfo: 'Additional details will go here later.'
    },
    {
      id: 14,
      image: 'house14.jpg',
      title: 'House 14',
      description: 'Stylish house with a modern design.',
      extraInfo: 'More details will be added here.'
    },
    {
      id: 15,
      image: 'house15.jpg',
      title: 'House 15',
      description: 'Beautiful house in a prime location.',
      extraInfo: 'Extra info will be added here.'
    }
  ];

  const handleHouseClick = (house) => {
    setSelectedHouse(house);
    setShowModal(true);
  };

  return (
    <section className="houses-wrapper">
      <h2 className="houses-title">Houses for Rent</h2>
      <p className="houses-description">Discover beautiful houses tailored to your needs.</p>

      <div className="houses-grid">
        {housesList.map((house) => (
          <div key={house.id} className="house-card" onClick={() => handleHouseClick(house)}>
            <img src={house.image} alt={house.title} />
            <h3>{house.title}</h3>
            <p>{house.description}</p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{selectedHouse.title}</h2>
            <p>{selectedHouse.description}</p>
            <p>Extra Info: {selectedHouse.extraInfo}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Houses;
