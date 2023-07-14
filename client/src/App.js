import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Admin from './components/Admin';

function App() {
  return (
    <>

      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </>
  );
}

export default App;