import React, { useState } from 'react';
import './coliving.css';

const Coliving = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedColiving, setSelectedColiving] = useState({});

  const colivingList = [
    {
      id: 1,
      image: 'coliving1.jpg',
      title: 'Coliving Space 1',
      description: 'Affordable and comfortable co-living space.',
      extraInfo: 'Additional details will go here later.'
    },
    {
      id: 2,
      image: 'coliving2.jpg',
      title: 'Coliving Space 2',
      description: 'Modern co-living with great amenities.',
      extraInfo: 'More details will be added here.'
    },
    {
      id: 3,
      image: 'coliving3.jpg',
      title: 'Coliving Space 3',
      description: 'Cozy co-living perfect for students.',
      extraInfo: 'Extra info will be added here.'
    },
    {
      id: 4,
      image: 'coliving4.jpg',
      title: 'Coliving Space 4',
      description: 'Stylish co-living with a modern design.',
      extraInfo: 'Additional details will go here later.'
    },
    {
      id: 5,
      image: 'coliving5.jpg',
      title: 'Coliving Space 5',
      description: 'Beautiful co-living in a prime location.',
      extraInfo: 'More details will be added here.'
    },
    {
      id: 6,
      image: 'coliving6.jpg',
      title: 'Coliving Space 6',
      description: 'Modern co-living with great facilities.',
      extraInfo: 'Extra info will be added here.'
    },
    {
      id: 7,
      image: 'coliving7.jpg',
      title: 'Coliving Space 7',
      description: 'Luxurious co-living with plenty of space.',
      extraInfo: 'Additional details will go here later.'
    },
    {
      id: 8,
      image: 'coliving8.jpg',
      title: 'Coliving Space 8',
      description: 'Stylish co-living with a modern twist.',
      extraInfo: 'More details will be added here.'
    },
    {
      id: 9,
      image: 'coliving9.jpg',
      title: 'Coliving Space 9',
      description: 'Cozy co-living perfect for couples.',
      extraInfo: 'Extra info will be added here.'
    },
    {
      id: 10,
      image: 'coliving10.jpg',
      title: 'Coliving Space 10',
      description: 'Beautiful co-living in a quiet neighborhood.',
      extraInfo: 'Additional details will go here later.'
    }
  ];

  const handleColivingClick = (coliving) => {
    setSelectedColiving(coliving);
    setShowModal(true);
  };

  return (
    <section className="coliving-wrapper">
      <h2 className="coliving-title">PG/Co-living Spaces</h2>
      <p className="coliving-description">Affordable and comfortable co-living spaces for shared living.</p>

      <div className="coliving-grid">
        {colivingList.map((coliving) => (
          <div key={coliving.id} className="coliving-card" onClick={() => handleColivingClick(coliving)}>
            <img src={coliving.image} alt={coliving.title} />
            <h3>{coliving.title}</h3>
            <p>{coliving.description}</p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{selectedColiving.title}</h2>
            <p>{selectedColiving.description}</p>
            <p>Extra Info: {selectedColiving.extraInfo}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Coliving;
