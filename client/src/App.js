import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { Link } from "react-router-dom";
import Candles from './components/Candles';
import Aromas from './components/Aromas';
import FAQ from './components/FAQ';

function App() {
  return (
    <>
      <Routes>
        <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/candles' component={Candles} />
          <Route path='/aromas' component={Aromas} />
          <Route path='/faq' component={FAQ} />
      </Routes>
    </>
  );
}

export default App;