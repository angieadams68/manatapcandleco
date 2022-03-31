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



////////////////////// COMPONENT FUNCTION //////////////
const App = () => {
  const [candles, setCandles] = useState([""]);
  const [candleItem] = useState([]);
  const [updateCandleItem] = useState("");
  const [setUpdateCandle] = useState([])
  

  useEffect(() => {
    async function getCandles() {
      const res = await axios.get("http://localhost:3001/candles");
      console.log(res.data);
      setCandles(res.data);
    }
    getCandles();
  }, []);

  const updateCandle = (id) => {
    axios.put("http://localhost:3001/update", {
      id: id,
      updateCandle: updateCandle,
    });
  };

  const deleteCandle = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`, {
    });
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
          <Route path="/candles" element={<Candle candles={candles} />} />
          <Route path="/review" element={<Review />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>


        <h2>MTGCC</h2>
            {candleItem.map((val, key) => {
              return (
                <div key={key} className="candle">
                  <h1> {val.candleName}</h1>
                  <input type="text" placeholder="Update your Candle..." onChange={(event) => {
                  setUpdateCandle(event.target.value)
                  }}
                   />
                  <button onClick={()=> updateCandle(val._id)}>Update Candle</button>
                  <button onClick={()=> deleteCandle(val._id)}>Delete Candle</button>
                  <button>Add to Cart</button>
                </div>
              );
            })}
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






