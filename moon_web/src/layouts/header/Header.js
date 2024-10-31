 
import logo from '../../assets/images/logo.png'
import './header.css'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
 
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">
         <img src={logo} alt='logo'/>
      </div>
      <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/career">Career</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
      </ul>
      <button className="mobile-menu-icon" onClick={handleToggleMenu}>
        {isMobile ? '✖️' : '☰'}
      </button>
    </nav>
  );
};

export default Header;

 
