import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">Parking Application</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className="nav-link">User</Link>
          </li>
          <li className="nav-item">
            <Link to="/admin" className="nav-link">Admin Panel</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;