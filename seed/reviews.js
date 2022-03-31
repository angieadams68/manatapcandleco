const db = require('../db')
const { Candle, Review } = require('../models')

///// Connecy to the database /////
db.on('error', console.error.bind(console, 'MongoDB connection error:'))



const main = async () => {
  const candles = await Candle.find()

  const reviews = [
    {
      name: '',
      review: '',
      candle_id: candles[0]._id
    },
    {
      name: '',
      review: '',
      candle_id: candles[1]._id
    },
    {
      name: ' ',
      review: '',
      candle_id: candles[2]._id
    }
  ]

  await Review.insertMany(reviews)
  console.log('Created reviews!')
}
const run = async () => {
  await main()
  db.close()
}

run()