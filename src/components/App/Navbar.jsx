import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar-container">
      <ul className="Navbar-list">
        <Link to={'/'}><li className="Navbar-element">Home</li></Link>
        <Link to={'/login'}><li className="Navbar-element">Ingresa</li></Link>
        <Link to={'/register'}><li className="Navbar-element">Registrate</li></Link>
      </ul>
    </nav>
  );
};

export { Navbar };
