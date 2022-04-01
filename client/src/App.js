import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { Link } from "react-router-dom";
import Candle from "./components/Candle";
import axios from "axios";
import Review from "./components/Review";
import Button from "./components/Button";
import CandleItem from "./components/CandleItem";
import ChangeScent from "./components/Changescent";
import Listing from "./components/Listing";

////////////////////// COMPONENT FUNCTION //////////////
const App = () => {
  const [candles, setCandles] = useState([""]);
  const [candleItem] = useState([]);
  const [updateCandleItem] = useState("");
  const [setUpdateCandle] = useState([]);

  

  let navigate = useNavigate();
  async function getCandles() {
    const res = await axios.get("http://localhost:3001/candles");
    console.log(res.data);
    setCandles(res.data);
  }
  useEffect(() => {
    getCandles();
  }, []);

  const updateCandle = (id) => {
    console.log(id);
    navigate(`/candles/${id}/update`);
  };

  const deleteCandle = async (id) => {
    const stat = await axios.delete(`http://localhost:3001/delete/${id}`, {});
    getCandles();
  };

  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/candles"
            element={
              <Candle
                candles={candles}
                updateCandle={updateCandle}
                deleteCandle={deleteCandle}
              />
            }
          />
          <Route path="/review" element={<Review />} />
          <Route path="/candles/:id/update" element={<ChangeScent />} />
        </Routes>

        <div>
          <Button />
        </div>
      </main>
    </div>
  );
};

export default App;
