import React, { useState } from 'react';
import './applyforloan.css';

const ApplyForLoan = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    income: '',
    loanAmount: '',
    tenure: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Loan Application Submitted:', formData);
    alert('Your loan application has been submitted!');
    setFormData({ name: '', email: '', income: '', loanAmount: '', tenure: '' });
  };

  return (
    <section className="applyforloan-wrapper">
      <h2 className="applyforloan-title">Apply for Home Loan</h2>
      <p className="applyforloan-description">Submit your application for a home loan and get approved quickly.</p>

      <form className="applyforloan-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" name="name" placeholder="Your Full Name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email Address:</label>
          <input type="email" name="email" placeholder="Your Email Address" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Monthly Income (₹):</label>
          <input type="number" name="income" placeholder="Enter Your Monthly Income" value={formData.income} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Loan Amount (₹):</label>
          <input type="number" name="loanAmount" placeholder="Enter Loan Amount" value={formData.loanAmount} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Tenure (Years):</label>
          <input type="number" name="tenure" placeholder="Enter Tenure in Years" value={formData.tenure} onChange={handleChange} required />
        </div>

        <button type="submit">Submit Application</button>
      </form>
    </section>
  );
};

export default ApplyForLoan;
