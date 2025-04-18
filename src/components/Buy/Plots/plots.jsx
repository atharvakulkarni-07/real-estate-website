import React, { useState } from 'react';
import './plots.css';

const Plots = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlot, setSelectedPlot] = useState({});

  const plotsList = [
    {
      id: 1,
      image: 'plot1.jpg',
      title: 'Plot 1',
      description: 'Beautiful plot in a quiet neighborhood.',
      extraInfo: 'Additional details will go here later.'
    },
    {
      id: 2,
      image: 'plot2.jpg',
      title: 'Plot 2',
      description: 'Large plot perfect for building a dream home.',
      extraInfo: 'More details will be added here.'
    },
    {
      id: 3,
      image: 'plot3.jpg',
      title: 'Plot 3',
      description: 'Prime location plot with great amenities.',
      extraInfo: 'Extra info will be added here.'
    },
    {
      id: 4,
      image: 'plot4.jpg',
      title: 'Plot 4',
      description: 'Stylish plot with a modern design.',
      extraInfo: 'Additional details will go here later.'
    },
    {
      id: 5,
      image: 'plot5.jpg',
      title: 'Plot 5',
      description: 'Cozy plot perfect for small families.',
      extraInfo: 'More details will be added here.'
    },
    {
      id: 6,
      image: 'plot6.jpg',
      title: 'Plot 6',
      description: 'Beautiful plot in a prime location.',
      extraInfo: 'Extra info will be added here.'
    },
    {
      id: 7,
      image: 'plot7.jpg',
      title: 'Plot 7',
      description: 'Modern plot with great facilities.',
      extraInfo: 'Additional details will go here later.'
    },
    {
      id: 8,
      image: 'plot8.jpg',
      title: 'Plot 8',
      description: 'Luxurious plot with plenty of space.',
      extraInfo: 'More details will be added here.'
    },
    {
      id: 9,
      image: 'plot9.jpg',
      title: 'Plot 9',
      description: 'Stylish plot with a modern twist.',
      extraInfo: 'Extra info will be added here.'
    },
    {
      id: 10,
      image: 'plot10.jpg',
      title: 'Plot 10',
      description: 'Beautiful plot in a quiet neighborhood.',
      extraInfo: 'Additional details will go here later.'
    },
    {
      id: 11,
      image: 'plot11.jpg',
      title: 'Plot 11',
      description: 'Large plot perfect for building a dream home.',
      extraInfo: 'More details will be added here.'
    },
    {
      id: 12,
      image: 'plot12.jpg',
      title: 'Plot 12',
      description: 'Prime location plot with great amenities.',
      extraInfo: 'Extra info will be added here.'
    },
    {
      id: 13,
      image: 'plot13.jpg',
      title: 'Plot 13',
      description: 'Stylish plot with a modern design.',
      extraInfo: 'Additional details will go here later.'
    },
    {
      id: 14,
      image: 'plot14.jpg',
      title: 'Plot 14',
      description: 'Cozy plot perfect for small families.',
      extraInfo: 'More details will be added here.'
    },
    {
      id: 15,
      image: 'plot15.jpg',
      title: 'Plot 15',
      description: 'Beautiful plot in a prime location.',
      extraInfo: 'Extra info will be added here.'
    }
  ];

  const handlePlotClick = (plot) => {
    setSelectedPlot(plot);
    setShowModal(true);
  };

  return (
    <section className="plots-wrapper">
      <h2 className="plots-title">Plots for Sale</h2>
      <p className="plots-description">Choose from a variety of plots for your dream home.</p>

      <div className="plots-grid">
        {plotsList.map((plot) => (
          <div key={plot.id} className="plot-card" onClick={() => handlePlotClick(plot)}>
            <img src={plot.image} alt={plot.title} />
            <h3>{plot.title}</h3>
            <p>{plot.description}</p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{selectedPlot.title}</h2>
            <p>{selectedPlot.description}</p>
            <p>Extra Info: {selectedPlot.extraInfo}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Plots;
