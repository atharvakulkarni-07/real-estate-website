import React from 'react'
import "./colab.css"

const Colab = () => {
  const companies = [
    { name: 'Company 1', logo: 'comp1.png' },
    { name: 'Company 2', logo: 'comp2.png' },
    { name: 'Company 3', logo: 'comp3.png' },
    { name: 'Company 4', logo: 'comp4.png' },
    { name: 'Company 5', logo: 'comp5.png' },
    { name: 'Company 6', logo: 'comp6.png' },
  ];

  return (
    <section className="colab-wrapper">
      <h2 className="colab-title">Our Esteemed Collaborations</h2>
      <p className="colab-subtitle">Partnering with industry leaders to deliver excellence</p>
      <div className="colab-grid">
        {companies.map((company, index) => (
          <div key={index} className="colab-item">
            <img src={company.logo} alt={company.name} className="colab-logo" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Colab
