import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { Link } from "react-router-dom";
import Candle from "./components/Candle";
import axios from "axios";
import Review from "./components/Review";
import Button from "./components/Button";
import CandleItem from "./components/CandleItem";
import Checkout from "./components/Checkout"

const App = () => {
  

  return (
    <div className="App">
      <div>
        <Button />
      </div>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/candles" element={<Candle />} />
          <Route path="/review" element={<Review />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
    
      </main>
    </div>
  );
};

export default App;
