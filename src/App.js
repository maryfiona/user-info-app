import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    dob: '',
    gender: '',
    image: null,
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: imageFile,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPopup(true);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label className='lab'>
          Full Name:
          <input 
          className='in'
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </label>
        <label className='lab'>
  Email Address:
  <input
    className='in'
    type="email"
    name="email"
    value={formData.email}
    onChange={handleInputChange}
    required
  />
</label>
<label className='lab'>
  Address:
  <input
    className='in'
    type="text"
    name="address"
    value={formData.address}
    onChange={handleInputChange}
    required
  />
</label>
<label className='lab'>
  Date of Birth:
  <input
    className='in'
    type="date"
    name="dob"
    value={formData.dob}
    onChange={handleInputChange}
    required
  />
</label>
<label className='lab'>
Gender:
  <select
    name="gender"
    value={formData.gender}
    onChange={handleInputChange}
    required
  >
    <option value="">Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
</label>
<label>
  <input
    type="file"
    name="image"
    accept="image/*"
    onChange={handleImageChange}
    required
  />
</label>




        
        {/* Add similar input fields for other form fields */}
        <button className='sub' type="submit">Submit</button>
      </form>

{showPopup && (
  <div className="PopupOverlay">
    <div className="PopupContent">
      <h2>Submitted Information:</h2>
      <ul>
        <li>
          <strong>Full Name:</strong> {formData.fullName}
        </li>
        <li>
          <strong>Email Address:</strong> {formData.email}
        </li>
        <li>
          <strong>Address:</strong> {formData.address}
        </li>
        <li>
          <strong>Date of Birth:</strong> {formData.dob}
        </li>
        <li>
          <strong>Gender:</strong> {formData.gender}
        </li>
      </ul>
      {formData.image && (
  <div className="ImageContainer">
    <img
      src={URL.createObjectURL(formData.image)}
      alt="User's chosen file"
      className="ImagePreview"
    />
  </div>
)}

      <button className="CloseButton" onClick={() => setShowPopup(false)}>
        Close
      </button>
    </div>
  </div>
)}

    </div>
  );
}

export default App;
