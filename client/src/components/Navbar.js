import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import { Button } from './Button';

const Navbar = () => {


  return (
    <header className="navHeader">
    <nav>
      <div>
        <Link to= "/">Home</Link>
        <Link to= "/candles">Candle</Link>
        <Link to= "/review">Reviews</Link>
        

      </div>
    </nav>
    </header>
  )}

export default Navbar;

