import React, { useState } from 'react';
import './loancalculator.css';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState('');

  const calculateEMI = (e) => {
    e.preventDefault();

    // Convert annual interest rate to monthly interest rate
    const monthlyInterestRate = interestRate / (12 * 100);

    // Convert tenure in years to months
    const totalMonths = tenure * 12;

    // EMI formula: EMI = [P x r x (1+r)^n] / [(1+r)^n - 1]
    const emiValue =
      (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) /
      (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

    setEmi(emiValue.toFixed(2)); // Round off to two decimal places
  };

  return (
    <section className="loancalculator-wrapper">
      <h2 className="loancalculator-title">Loan EMI Calculator</h2>
      <p className="loancalculator-description">Calculate your monthly EMI easily.</p>

      <form className="calculator-form" onSubmit={calculateEMI}>
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
          <label>Annual Interest Rate (%):</label>
          <input
            type="number"
            placeholder="Enter Annual Interest Rate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
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

        <button type="submit">Calculate EMI</button>
      </form>

      {emi && (
        <div className="emi-result">
          <h3>Estimated EMI</h3>
          <p>₹{emi} per month</p>
        </div>
      )}
    </section>
  );
};

export default LoanCalculator;
