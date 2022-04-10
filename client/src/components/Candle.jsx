import React from "react";
import CandleItem from "./CandleItem";

function Candle(props) {
  return (
    <div className="Candle">
      <h3>Create with your own Color, Scent and Image! </h3>
      <div className="Candle__container">
        <div className="Candle__wrapper">
          <ul className="Candle__items">
            {props.candles.map((candle) => (
              <div>
                {console.log(candle)}
                <CandleItem
                  updateCandle={props.updateCandle}
                  deleteCandle={props.deleteCandle}
                  id={candle._id}
                  aromas={candle.aromas}
                  description={candle.description}
                  name={candle.candleName}
                  image={candle.image}
                  price={candle.price}
                />
              </div>
            ))}
          </ul>
        </div>
        <h1>The power lies in your mind Planes-walker!</h1>
      </div>
    </div>
  );
}

export default Candle;
