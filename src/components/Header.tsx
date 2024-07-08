import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../style/Header.css';
import logo from '../assets/logo.png'; // Update this with the correct image path

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate('/')}>
        <img src={logo} alt="Glocal Logo" />
        <span id='G' onClick={() => navigate('/')}>G</span>
        <span id='local' onClick={() => navigate('/')}>local</span>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/categories" activeClassName="active">Categories</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
          <li><NavLink to="/products" activeClassName="active">Products</NavLink></li>
          <li><NavLink to="/pet-care" activeClassName="active">Pet Care</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button id='btu-singin'>Sign In</button>
        <button id='btu-register'>Register</button>
      </div>
    </header>
  );
};

export default Header;