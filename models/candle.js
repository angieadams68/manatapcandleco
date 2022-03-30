const { Schema } = require('mongoose')

const Candle = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    aromas: { type: String, required: true}
    
  },
  { timestamps: true }
)

module.exports = Candle