import React, { useState } from 'react';
import './postproperty.css';

const PostProperty = () => {
  const [formData, setFormData] = useState({
    propertyType: '',
    location: '',
    price: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    description: '',
    amenities: '',
    images: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Property Posted:', formData);
    alert('Your property has been posted successfully!');
    setFormData({
      propertyType: '',
      location: '',
      price: '',
      area: '',
      bedrooms: '',
      bathrooms: '',
      description: '',
      amenities: '',
      images: ''
    });
  };

  return (
    <section className="postproperty-wrapper">
      <h2 className="postproperty-title">Post Your Property</h2>
      <p className="postproperty-description">List your property for sale and reach potential buyers easily.</p>

      <form className="postproperty-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Property Type:</label>
          <select name="propertyType" value={formData.propertyType} onChange={handleInputChange}>
            <option value="">Select Type</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Plot">Plot</option>
          </select>
        </div>

        <div className="form-group">
          <label>Location:</label>
          <input type="text" name="location" placeholder="Enter Location" value={formData.location} onChange={handleInputChange} required />
        </div>

        <div className="form-group">
          <label>Price:</label>
          <input type="number" name="price" placeholder="Enter Price" value={formData.price} onChange={handleInputChange} required />
        </div>

        <div className="form-group">
          <label>Area (sqft):</label>
          <input type="number" name="area" placeholder="Enter Area" value={formData.area} onChange={handleInputChange} required />
        </div>

        <div className="form-group">
          <label>Number of Bedrooms:</label>
          <input type="number" name="bedrooms" placeholder="Enter Bedrooms" value={formData.bedrooms} onChange={handleInputChange} required />
        </div>

        <div className="form-group">
          <label>Number of Bathrooms:</label>
          <input type="number" name="bathrooms" placeholder="Enter Bathrooms" value={formData.bathrooms} onChange={handleInputChange} required />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" placeholder="Enter Description" value={formData.description} onChange={handleInputChange} required />
        </div>

        <div className="form-group">
          <label>Amenities:</label>
          <textarea name="amenities" placeholder="Enter Amenities" value={formData.amenities} onChange={handleInputChange} required />
        </div>

        <div className="form-group">
          <label>Upload Images:</label>
          <input type="file" name="images" multiple />
        </div>

        <button type="submit">Post Property</button>
      </form>
    </section>
  );
};

export default PostProperty;
