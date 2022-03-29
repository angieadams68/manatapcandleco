import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    
      <nav className="navbar">
        <div className="navbar-container">
          
          <div className="menu-icon" onClick={handleClick}>
        
          </div>
          

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className='menu'> ≡ </li>
        <li className={click ?  'active' : ''}> <a href=''> Home </a> </li>
        <li className={click ?  'active' : ''}> <a href=''> Candles </a> </li>
        <li className={click ?  'active' : ''}> <a href=''> Aromas </a> </li>
        <li className={click ?  'active' : ''}> <a href=''> FAQ </a> </li>
    </ul> 
</div>
</nav>
  );
}

export default Navbar;

