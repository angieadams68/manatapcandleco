import React from "react";
import CandleItem from "./CandleItem";
import { useState, useEffect } from "react";
import axios from "axios";

function Candle(props) {


  return (
    <div className="Candle">
      <h1>Create a Candle with your own Color, Scent and Image! </h1>
      <div className="Candle__container">
        <div className="Candle__wrapper">
          <ul className="Candle__items">
            {props.candles.map((candle) => (
              <CandleItem
                src="" 
                id={candle._id} 
                updateCandle={props.updateCandle}
                deleteCandle={props.deleteCandle}
                aromas={candle.aromas}
                description={candle.description}
                name={candle.name}
              />
            ))}
          </ul>
        </div>
        <h1>Create your own Candle!</h1>
        <button>Add</button>
      </div>
    </div>
  );
}

export default Candle;
