import React from 'react';
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { Link } from "react-router-dom";
import Candle from './components/Candle';
import axios from 'axios'
import Review from './components/Review';




const App = () => {

  
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route  path="/" element={ <Home /> } />
          <Route path="/candles" element={ <Candle  />} />
          <Route path="/reviews" element={ <Review  />} />
        </Routes>
      </main>
    </div>
  )
}




export default App;