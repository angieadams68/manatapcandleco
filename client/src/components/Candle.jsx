import React from "react";
import "./Candle.css";
import CandleItem from "./CandleItem";
import { useState, useEffect } from "react";
import axios from "axios";
import App from "../App";

function Candle() {
  const [candles, setCandles] = useState([]);
  const [candleItem] = useState([]);
  const [updateCandleItem] = useState("");

  useEffect(() => {
    async function getCandles() {
      const res = await axios.get(`http://localhost:3001/candles`);
      console.log(res.data);
      setCandles(res.data);
    }
    getCandles();
  }, []);

  const updateCandle = (id) => {
    axios.put(`http://localhost:3001/update`, {
      id: id,
      updateCandle: updateCandle,
    });
  };
  return (
    <div className="Candle">
      <h1>Create a Candle with your own Color, Scent and Image! </h1>
      <div className="Candle__container">
        <div className="Candle__wrapper">
          <ul className="Candle__items">
            {candles.map((candle) => (
              <CandleItem
                src=""
                aromas={candle.aromas}
                description={candle.description}
                name={candle.name}
              />
            ))}
            <h2>Tap</h2>
            {candleItem.map((val, key) => {
              return (
                <div key={key} className="candle">
                  <h1> {val.candleName}</h1>
                  <input type="text" placeholder="Udate your Candle..." onChange={(event) => {
                  setUpdateCandle(event.target.value)
                  }}
                  
                   />
                  <button onClick={()=> updateCandle(val._id)}>Update Candle</button>
                  <button>Add to Cart</button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Candle;
