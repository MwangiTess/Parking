import React from 'react';
import User from './User';
import './Home.css'; // Import the CSS file for Home component

function Home() {
  return (
    <div className="container home-container">
      <h1 className="my-4">Welcome to Crusade Event</h1>
      <p>Please click on the Register button below to book parking.</p>
      <div className='user-container'>
      <User />
      </div>
    </div>
  );
}

export default Home;