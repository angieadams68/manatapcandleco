import React from "react";
import CandleItem from "./CandleItem";
import { useState, useEffect } from "react";
import axios from "axios";

function Candle(props) {
  return (
    <div className="Candle">
      <h1>Create with your own Color, Scent and Image! </h1>
      <div className="Candle__container">
        <div className="Candle__wrapper">
          <ul className="Candle__items">
            {props.candles.map((candle) => (
              <CandleItem
                id={candle._id}
                updateCandle={props.updateCandle}
                deleteCandle={props.deleteCandle}
                aromas={candle.aromas}
                description={candle.description}
                name={candle.name}
                image={candle.image}
                price={candle.price}
              />
            ))}
          </ul>
        </div>
        <h1>The power lies in your mind Planes-walker!</h1>
      </div>
    </div>
  );
}

export default Candle;
