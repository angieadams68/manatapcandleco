const { Schema } = require('mongoose')

const Candle = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    url: { type: String, required: true },
    body: { type: String, required: true },
    candle_id: { type: Schema.Types.ObjectId, ref: 'candle_id' }
  },
  { timestamps: true }
)

module.exports = Candle