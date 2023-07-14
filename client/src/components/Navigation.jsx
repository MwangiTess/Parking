import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Import the CSS file for Navigation component

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navigation-container">
      <div className="container">
        <Link to="/" className="navbar-brand">Parking Application</Link>
        <button className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`} type="button" onClick={handleMenuToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto">
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
      </div>
    </nav>
  );
}

export default Navigation;