import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css"; 

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
       <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FiX /> : <FiMenu />}
      </div>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/menu" onClick={toggleMenu}>Menu</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        <li><a href="tel:+9786676674">Call Now! 978-667-6674</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
