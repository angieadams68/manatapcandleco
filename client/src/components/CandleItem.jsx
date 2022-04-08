import React from "react"
// import axios from "axios";


// const updateCandle = (props) => {
  
// }

const CandleItem = (props) => {
  return (
    <div>
      <ul>
        <li>{props.aromas}</li>
        <li>{props.description}</li>
        <li>{props.name}</li>
        <li>{props.price}</li>
        <li>{props.image}</li>
        <img alt="candle" src={props.image} /> 
      </ul>
      <button onClick={()=>props.updateCandle(props.id)}>Update Candle</button>
      <button onClick={()=>props.deleteCandle(props.id)}>Delete Candle</button>
    </div>
  );
};

export default CandleItem;

