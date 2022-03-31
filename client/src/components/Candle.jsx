import React from "react";
import "../App.css";
import CandleItem from "./CandleItem";
import { useState, useEffect } from "react";
import axios from "axios";
import App from "../App";

function Candle(props) {

  const [candles, setCandles] = useState([""]);
  const [candleItem] = useState([]);
  const [updateCandleItem] = useState('');
  const [updateCandle] = useState('');
  const [deleteCandle] = useState('')
  const [setUpdateCandle] = useState([])


  return (
    <div className="Candle">
      <h1>Create a Candle with your own Color, Scent and Image! </h1>
      <div className="Candle__container">
        <div className="Candle__wrapper">
          <ul className="Candle__items">
            {props.candles.map((candle) => (
              <CandleItem
                src=""
                aromas={candle.aromas}
                description={candle.description}
                name={candle.name}
              />
            ))}
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Candle;
