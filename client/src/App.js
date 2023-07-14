import React, { useState } from 'react';

function App() {
  const [carNumberPlate, setCarNumberPlate] = useState('');
  const [ownerNames, setOwnerNames] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (carNumberPlate && ownerNames && phoneNumber) {
      // Implement logic for processing the form data, such as sending it to the server
      alert('Form submitted successfully!');
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
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Owner's Official Names:</label>
          <input
            type="text"
            className="form-control"
            value={ownerNames}
            onChange={(e) => setOwnerNames(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number:</label>
          <input
            type="text"
            className="form-control"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
