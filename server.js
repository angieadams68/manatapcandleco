const { Candle, Review } = require('./models')
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')

const app = express()


/////////////// MIDDLEWARE ////////////////

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'))


//////// ROUTES ////////

app.get('/', (req, res) => {
  res.send('This is root!')
})


app.get('/candles', async (req, res) => {
    const candles = await Candle.find({});
    res.json(candles);
  });




  app.get('/reviews', async (req, res) => {
    const reviews = await Review.find({});
    res.json(reviews);
  });





/////////////// EXPRESS SERVER LISTEN TO PORT //////////////////

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})



















