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
    <nav>
      <div>
        <Link to= "/">Home</Link>
        <Link to= "/candles">Candle</Link>
        <Link to= "/faq">FAQ</Link>

      </div>
    </nav>
  )}

export default Navbar;

