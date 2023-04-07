import React from 'react';
import { FaUser } from 'react-icons/fa';
import Navbar from './Navbar';

const Header = () => (
  <header>
    <div className="left-content">
      <h1>Bookstore App</h1>
      <Navbar />
    </div>
    <div className="user">
      <FaUser className="fa-user" />
    </div>
  </header>
);

export default Header;
