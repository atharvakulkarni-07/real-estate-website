import React, { useState } from 'react';
import './support.css';

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Support Request Submitted:', formData);
    alert('Your message has been sent to our support team!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-wrapper">
      <h2 className="contact-title">Contact Support</h2>
      <p className="contact-description">Reach out to us for assistance or inquiries.</p>

      <div className="contact-info">
        <h3>Contact Details:</h3>
        <ul>
          <li><strong>Phone:</strong> +91 1234567890</li>
          <li><strong>Email:</strong> <a href="mailto:info@pandasparadise.com">info@pandasparadise.com</a></li>
          <li><strong>Location:</strong> 123, Main Street, City, State, India</li>
        </ul>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" name="name" placeholder="Your Full Name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email Address:</label>
          <input type="email" name="email" placeholder="Your Email Address" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Your Message:</label>
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactSupport;
