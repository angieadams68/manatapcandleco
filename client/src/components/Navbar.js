import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <header className="navHeader">
      <nav>
        <div>
          <Link to="/">Home</Link>
          <Link to="/candles">Candle</Link>
          <Link to="/review">Reviews</Link>
          <Link to="/review/new">Leave a Review</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
