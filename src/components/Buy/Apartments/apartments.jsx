import React, { useState } from 'react';
import './apartments.css';

const Apartments = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState({});

  const apartmentsList = [
    {
      id: 1,
      image: 'apartment1.jpg',
      title: 'Apartment 1',
      description: 'Modern apartment in a prime location.',
      extraInfo: 'Additional details will go here later.'
    },
    {
      id: 2,
      image: 'apartment2.jpg',
      title: 'Apartment 2',
      description: 'Luxurious apartment with great amenities.',
      extraInfo: 'More details will be added here.'
    },
    {
      id: 3,
      image: 'apartment3.jpg',
      title: 'Apartment 3',
      description: 'Spacious apartment with a beautiful view.',
      extraInfo: 'Extra info will be added here.'
    },
    {
      id: 4,
      image: 'apartment4.jpg',
      title: 'Apartment 4',
      description: 'Cozy apartment perfect for small families.',
      extraInfo: 'Additional info will go here.'
    },
    {
      id: 5,
      image: 'apartment5.jpg',
      title: 'Apartment 5',
      description: 'Stylish apartment with modern design.',
      extraInfo: 'More details will be added here.'
    },
    {
      id: 6,
      image: 'apartment6.jpg',
      title: 'Apartment 6',
      description: 'Beautiful apartment in a quiet neighborhood.',
      extraInfo: 'Extra info will be added here.'
    },
    {
      id: 7,
      image: 'apartment7.jpg',
      title: 'Apartment 7',
      description: 'Large apartment with plenty of space.',
      extraInfo: 'Additional details will go here later.'
    },
    {
      id: 8,
      image: 'apartment8.jpg',
      title: 'Apartment 8',
      description: 'Modern apartment with great facilities.',
      extraInfo: 'More details will be added here.'
    },
    {
      id: 9,
      image: 'apartment9.jpg',
      title: 'Apartment 9',
      description: 'Cozy apartment perfect for couples.',
      extraInfo: 'Extra info will be added here.'
    },
    {
      id: 10,
      image: 'apartment10.jpg',
      title: 'Apartment 10',
      description: 'Stylish apartment with a modern twist.',
      extraInfo: 'Additional info will go here.'
    },
    {
      id: 11,
      image: 'apartment11.jpg',
      title: 'Apartment 11',
      description: 'Beautiful apartment in a prime location.',
      extraInfo: 'More details will be added here.'
    },
    {
      id: 12,
      image: 'apartment12.jpg',
      title: 'Apartment 12',
      description: 'Spacious apartment with a great view.',
      extraInfo: 'Extra info will be added here.'
    },
    {
      id: 13,
      image: 'apartment13.jpg',
      title: 'Apartment 13',
      description: 'Modern apartment with great amenities.',
      extraInfo: 'Additional details will go here later.'
    },
    {
      id: 14,
      image: 'apartment14.jpg',
      title: 'Apartment 14',
      description: 'Luxurious apartment with plenty of space.',
      extraInfo: 'More details will be added here.'
    },
    {
      id: 15,
      image: 'apartment15.jpg',
      title: 'Apartment 15',
      description: 'Stylish apartment with a modern design.',
      extraInfo: 'Extra info will be added here.'
    }
  ];

  const handleApartmentClick = (apartment) => {
    setSelectedApartment(apartment);
    setShowModal(true);
  };

  return (
    <section className="apartments-wrapper">
      <h2 className="apartments-title">Apartments for Sale</h2>
      <p className="apartments-description">Explore a wide range of modern apartments in prime locations.</p>

      <div className="apartments-grid">
        {apartmentsList.map((apartment) => (
          <div key={apartment.id} className="apartment-card" onClick={() => handleApartmentClick(apartment)}>
            <img src={apartment.image} alt={apartment.title} />
            <h3>{apartment.title}</h3>
            <p>{apartment.description}</p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{selectedApartment.title}</h2>
            <p>{selectedApartment.description}</p>
            <p>Extra Info: {selectedApartment.extraInfo}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Apartments;
