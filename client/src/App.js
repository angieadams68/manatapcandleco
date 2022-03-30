import React from 'react';
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { Link } from "react-router-dom";
import Candle from './components/Candle';
import axios from 'axios'




const App = () => {

  
  return (
    <div className="app">
      <Candle />
    </div>
  )
}












// function App() {
//   return (
//     <>
//     <Navbar />
//       <Routes>
//           <Route path='/' exact element={<Home></Home>} />
//           <Route path='/candles' element={<Candles></Candles>} />
//       </Routes>
//     </>
//   );
// }

export default App;