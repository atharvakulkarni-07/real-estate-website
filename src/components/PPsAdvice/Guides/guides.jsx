import React from 'react';
import './guides.css';

const guidesList = [
  {
    title: "How to Buy Your First Home",
    description: "A comprehensive guide for first-time home buyers.",
    link: "#"
  },
  {
    title: "Selling Property: The Complete Process",
    description: "Everything you need to know to sell your property smoothly.",
    link: "#"
  },
  {
    title: "Understanding Home Loans",
    description: "Step-by-step guide to applying for and managing home loans.",
    link: "#"
  },
  {
    title: "Renting vs. Buying: What’s Right for You?",
    description: "Analyze your options with this practical guide.",
    link: "#"
  },
  {
    title: "Legal Checklist for Property Transactions",
    description: "Ensure a safe and legal property transaction with this checklist.",
    link: "#"
  },
  {
    title: "Interior Design Tips for Your New Home",
    description: "Make your new house a home with these design tips.",
    link: "#"
  }
];

const Guides = () => {
  return (
    <section className="guides-wrapper">
      <h2 className="guides-title">Step-by-Step Guides</h2>
      <p className="guides-description">Simplify your real estate journey with our easy-to-follow guides.</p>

      <div className="guides-list">
        {guidesList.map((guide, idx) => (
          <a className="guide-card" href={guide.link} key={idx} target="_blank" rel="noopener noreferrer">
            <h3>{guide.title}</h3>
            <p>{guide.description}</p>
            <span className="guide-arrow">&rarr;</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Guides;
