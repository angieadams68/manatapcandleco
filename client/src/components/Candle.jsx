import React from 'react';
import './Candle.css';
import CandleItem from './CandleItem';
import { useState, useEffect } from 'react'
import axios from 'axios'


function Candle() {
  const [candles, setCandles] = useState([])

  useEffect(() => {
    async function getCandles() {
      const res = await axios.get(`http://localhost:3001/candles`)
      console.log(res.data)
      setCandles(res.data)
      
 
    }
    getCandles()
  },[])


  return (
    <div className='Candle'>
      <h1>Check out these MTG Candles!</h1>
      <div className='Candle__container'>
        <div className='Candle__wrapper'>
          <ul className='Candle__items'>
            {candles.map(candle =>(
              <CandleItem
              src=''
              aromas={candle.aromas}
              description={candle.description}
              name={candle.name}
            />
            ))}
            
            <CandleItem
              src=''
              aromas=''
              label='White'
              path='/candles'
            />
          </ul>
          <ul className='Candle__items'>
            <CandleItem
              src=''
              aromas=''
              label='Pink'
              path='/candles'
            />
            <CandleItem
              src=''
              text=''
              label='Purple'
              path='/candles'
            />
            <CandleItem
              src=''
              text=''
              label='Black'
              path='/candles'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Candle;
