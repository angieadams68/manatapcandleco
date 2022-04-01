const db = require('../db')
const { Candle } = require('../models')


/////// Connect to database

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const candles = [
    {
      candleName: 'Planeswalker Candle',
      description: 'White jar. Scent: Vanilla',
      aromas: "Rosemary scent",
      price: 15,
      image:"https://i.imgur.com/sHNvwJS.jpeg"
      

    },
    {
      candleName: 'Midnight',
      description: 'Black jar. Scent: Woodsy',
      aromas: "Lavender scent",
      price: 12,
      image:"https://i.imgur.com/sHNvwJS.jpeg"

    },
    {
        candleName: 'Dungeons and Dragons',
        description: 'Red jar. Scent: Sick mints',
        aromas: 'Peppermint scent',
        price: 20,
      image:"https://i.imgur.com/sHNvwJS.jpeg"

    }
]

  await Candle.insertMany(candles)
  console.log('Created candles!')
}
const run = async () => {
  await main()
  db.close()
}

run()