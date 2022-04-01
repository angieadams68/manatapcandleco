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




////////////////////// COMPONENT FUNCTION //////////////
const App = () => {
  const [candles, setCandles] = useState([""]);
  const [candleItem] = useState([]);
  const [updateCandleItem] = useState("");
  const [setUpdateCandle] = useState([])
  
  async function getCandles() {
    const res = await axios.get("http://localhost:3001/candles");
    console.log(res.data);
    setCandles(res.data);
  }
  useEffect(() => {
    
    getCandles();
  }, []);

  const updateCandle = (id) => {
    console.log (id)
    // axios.put("http://localhost:3001/update", {
    //   id: id,
    //   updateCandle: updateCandle,
    // });
  };

  const deleteCandle = async (id) => {
   const stat = await axios.delete(`http://localhost:3001/delete/${id}`, {
    });
   getCandles()
  };


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
          <Route path="/candles" element={<Candle candles={candles}updateCandle={updateCandle}deleteCandle={deleteCandle} />} />
          <Route path="/review" element={<Review />} />
        </Routes>


       
            
      </main>
      
    </div>
  );
};

export default App;




//////
// const Candle = require("../model/Candle”);

// router.get("/", candles.getAllCandles);
// router.post("/", candles.addCandle);
// router.get("/:id", candles.getById);
// router.put("/:id", candles.updateCandle);
// router.delete("/:id", candles.deleteCandle);

// module.exports = router;






