import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Pentathon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
