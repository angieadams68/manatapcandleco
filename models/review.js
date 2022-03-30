const { Schema } = require('mongoose')

const Review = new Schema(
  {
    name: { type: String, required: true },
    review: { type: String, required: true },
    candle_id: { type: Schema.Types.ObjectId, ref: 'candle_id' }
  },
  { timestamps: true }
)

module.exports = Review