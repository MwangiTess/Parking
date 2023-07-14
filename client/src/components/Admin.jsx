import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function AdminPanel() {
  const [parkingEntries, setParkingEntries] = useState([]);

  // Simulated data for demonstration purposes
  const initialEntries = [
    { id: 1, carNumberPlate: 'ABC123', ownerNames: 'John Doe', phoneNumber: '1234567890' },
    { id: 2, carNumberPlate: 'XYZ789', ownerNames: 'Jane Smith', phoneNumber: '9876543210' },
  ];

  useState(() => {
    // Fetch parking entries from the server or local storage
    setParkingEntries(initialEntries);
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Admin Panel</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Entry ID</th>
            <th>Car Number Plate</th>
            <th>Owner's Official Names</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {parkingEntries.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.id}</td>
              <td>{entry.carNumberPlate}</td>
              <td>{entry.ownerNames}</td>
              <td>{entry.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPanel;
