import { BrowserRouter } from 'react-router-dom';
import React from 'react'
import './index.css'
import ReactDOM from 'react-dom';
import App from './App';
import Review from './components/Review'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)



