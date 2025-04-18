import React from 'react';
import './expertsadvice.css';

const experts = [
  {
    name: "Dr. Anil Mehra",
    title: "Real Estate Economist",
    photo: "/expert1.jpg",
    advice: "“Always check the legal status and documentation of a property before investing.”"
  },
  {
    name: "Priyanka Aggarwal",
    title: "Interior Design Consultant",
    photo: "/expert2.jpg",
    advice: "“Invest in modular furniture for flexibility and long-term value in your new home.”"
  },
  {
    name: "Rahul Singh",
    title: "Home Loan Specialist",
    photo: "/expert3.jpg",
    advice: "“Compare interest rates and hidden charges before finalizing a home loan.”"
  },
  {
    name: "Sunita Verma",
    title: "Property Law Expert",
    photo: "/expert4.jpg",
    advice: "“Ensure all property taxes are paid and receipts are available before purchase.”"
  }
];

const ExpertsAdvice = () => {
  return (
    <section className="experts-wrapper">
      <h2 className="experts-title">Expert Advice</h2>
      <p className="experts-description">
        Get insights and advice from industry experts to make informed real estate decisions.
      </p>

      <div className="experts-cards">
        {experts.map((exp, idx) => (
          <div className="expert-card" key={idx}>
            <img src={exp.photo} alt={exp.name} className="expert-photo" />
            <h3>{exp.name}</h3>
            <span className="expert-role">{exp.title}</span>
            <blockquote>{exp.advice}</blockquote>
          </div>
        ))}
      </div>

      <div className="experts-featured">
        <h3>Featured Advice</h3>
        <ul>
          <li>Always verify the credentials of your real estate agent.</li>
          <li>Visit the property site at different times of the day before buying.</li>
          <li>Budget for additional costs such as registration, taxes, and maintenance.</li>
          <li>Consult a legal expert for complex property transactions.</li>
        </ul>
      </div>
    </section>
  );
};

export default ExpertsAdvice;
