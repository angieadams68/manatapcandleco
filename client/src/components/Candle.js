import React from 'react';
import './Candle.css';


function Candle() {
  return (
    <div className='Candle'>
      <h1>Check out these MTG Candles!</h1>
      <div className='Candle__container'>
        <div className='Candle__wrapper'>
          <ul className='Candle__items'>
            <CandleItem
              src=''
              text=''
              label='Blue candle'
              path='/candles'
            />
            <CandleItem
              src=''
              text=''
              label='White'
              path='/candles'
            />
          </ul>
          <ul className='Candle__items'>
            <CandleItem
              src=''
              text=''
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
