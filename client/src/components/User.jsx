import React, { useState } from 'react';
import axios from 'axios';

function User() {
  const [carNumberPlate, setCarNumberPlate] = useState('');
  const [ownerNames, setOwnerNames] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (carNumberPlate && ownerNames && phoneNumber) {
      try {
        await axios.post('/users/submit_form', {
          carNumberPlate,
          ownerNames,
          phoneNumber,
        });
        alert('Form submitted successfully!');
        // Reset the form
        setCarNumberPlate('');
        setOwnerNames('');
        setPhoneNumber('');
      } catch (error) {
        alert('An error occurred while submitting the form.');
        console.error(error);
      }
    } else {
      alert('Please fill in all the required fields.');
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Parking Application</h1>

      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Car Number Plate:</label>
          <input
            type="text"
            className="form-control"
            value={carNumberPlate}
            onChange={(e) => setCarNumberPlate(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Owner's Official Names:</label>
          <input
            type="text"
            className="form-control"
            value={ownerNames}
            onChange={(e) => setOwnerNames(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number:</label>
          <input
            type="text"
            className="form-control"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default User;