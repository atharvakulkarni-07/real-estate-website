import React, { useState } from 'react';
import './faqs.css';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqList = [
    {
      id: 1,
      question: 'How can I apply for a loan?',
      answer: 'You can apply for a loan through our Apply Loan section.'
    },
    {
      id: 2,
      question: 'What is the eligibility criteria?',
      answer: 'Eligibility criteria depends on your income and loan amount.'
    },
    {
      id: 3,
      question: 'How can I contact support?',
      answer: 'You can reach out through our Contact Support section.'
    },
    {
      id: 4,
      question: 'What are the benefits of buying a property?',
      answer: 'Buying a property provides long-term financial security and stability.'
    },
    {
      id: 5,
      question: 'How do I know if a property is a good investment?',
      answer: 'A good investment property should have potential for appreciation and rental income.'
    },
    {
      id: 6,
      question: 'Can I rent a property through your platform?',
      answer: 'Yes, you can rent properties through our Rent section.'
    },
    {
      id: 7,
      question: 'How do I sell my property?',
      answer: 'You can sell your property by listing it in our Sell section.'
    },
    {
      id: 8,
      question: 'What are the fees associated with selling a property?',
      answer: 'Fees vary depending on the services used, such as listing and marketing.'
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqs-wrapper">
      <h2 className="faqs-title">Frequently Asked Questions</h2>

      <ul className="faq-list">
        {faqList.map((faq, index) => (
          <li key={faq.id} className="faq-item">
            <div className="faq-question" onClick={() => handleToggle(index)}>
              <h3>{faq.question}</h3>
              <span className={`faq-icon ${activeIndex === index ? 'active' : ''}`}></span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQs;
