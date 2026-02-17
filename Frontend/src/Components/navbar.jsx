import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="logo">Pentathon</a>
        <ul className="nav-links">
          <li><a href="#herosection">Home</a></li>
          <li><a href="#tracks">Tracks</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#registration">Register</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
