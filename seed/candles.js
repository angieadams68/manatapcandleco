const db = require('../db')
const { Candle } = require('../models')

/////// Connect to database

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const candles = [
    {
      name: 'Planeswalker Candle',
      description: 'White jar. Scent: Vanilla',
      aromas: "Rosemary scent",
      price: "$15",
      

    },
    {
      name: 'Midnight',
      description: 'Black jar. Scent: Woodsy',
      aromas: "Lavender scent"

    },
    {
        name: 'Dungeons and Dragons',
        description: 'Red jar. Scent: Sick mints',
        aromas: 'Peppermint scent'

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