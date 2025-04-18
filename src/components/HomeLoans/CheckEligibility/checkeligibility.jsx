import React, { useState } from 'react';
import './checkeligibility.css';

const CheckEligibility = () => {
  const [income, setIncome] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const [eligibility, setEligibility] = useState('');
  const [ineligibilityReason, setIneligibilityReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple eligibility logic
    const monthlyEMI = (loanAmount / (tenure * 12)) + (loanAmount * 0.01); // Assuming 1% interest per month
    const maxEligibleEMI = income * 0.5; // User can spend up to 50% of income on EMI

    if (monthlyEMI <= maxEligibleEMI) {
      setEligibility('Eligible');
      setIneligibilityReason('');
    } else {
      setEligibility('Ineligible');
      setIneligibilityReason('Your monthly EMI exceeds 50% of your income.');
    }
  };

  return (
    <section className="checkeligibility-wrapper">
      <h2 className="checkeligibility-title">Check Your Loan Eligibility</h2>
      <p className="checkeligibility-description">Find out if you're eligible for a loan.</p>

      <form className="eligibility-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Monthly Income (₹):</label>
          <input
            type="number"
            placeholder="Enter Monthly Income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Loan Amount (₹):</label>
          <input
            type="number"
            placeholder="Enter Loan Amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Tenure (Years):</label>
          <input
            type="number"
            placeholder="Enter Tenure in Years"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            required
          />
        </div>

        <button type="submit">Check Eligibility</button>
      </form>

      {eligibility && (
        <div className="eligibility-result">
          <h3>Eligibility Status:</h3>
          <p>{eligibility}</p>
          {ineligibilityReason && (
            <div className="ineligibility-message">
              <h4>Ineligibility Reason:</h4>
              <p>{ineligibilityReason}</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default CheckEligibility;
