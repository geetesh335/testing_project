// Header.tsx
import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1 style={{fontSize:40}}>TechAshtra</h1>
        {/* <h1>Immense Knowledge Power</h1> */}
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
