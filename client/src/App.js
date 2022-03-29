import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { Link } from "react-router-dom";
import Candles from './pages/Candles';
import Aromas from './pages/Aromas';
import FAQ from './pages/FAQ';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
          <Route path='/' exact element={<Home></Home>} />
          <Route path='/candles' element={<Candles></Candles>} />
          <Route path='/aromas' element={<Aromas></Aromas>} />
          <Route path='/faq' element={<FAQ></FAQ>} />
      </Routes>
    </>
  );
}

export default App;