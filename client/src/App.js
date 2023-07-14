import React, { useState } from 'react';
import QRCode from 'qrcode.react';

import './App.css';

function App() {
  const [carNumberPlate, setCarNumberPlate] = useState('');
  const [ownerNames, setOwnerNames] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [generatedQRCode, setGeneratedQRCode] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate the form inputs here (e.g., check for empty fields)

    // Generate the QR code value by combining the inputs
    const qrCodeValue = carNumberPlate + ownerNames + phoneNumber;

    // Update the generated QR code state
    setGeneratedQRCode(qrCodeValue);
  };

  return (
    <div className="App">
      <h1>Parking Application</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Car Number Plate:
          <input
            type="text"
            value={carNumberPlate}
            onChange={(e) => setCarNumberPlate(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Owner's Names:
          <input
            type="text"
            value={ownerNames}
            onChange={(e) => setOwnerNames(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Generate QR Code</button>
      </form>

      {generatedQRCode && (
        <div className="qrcode-container">
          <h2>Generated QR Code</h2>
          <QRCode value={generatedQRCode} size={200} />
        </div>
      )}
    </div>
  );
}

export default App;
