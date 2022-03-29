const mongoose = require('mongoose')
const ReviewSchema = require('./review')
const CandleSchema = require('./candle')

const Review = mongoose.model('Review', ReviewSchema)
const Candle = mongoose.model('Candle', CandleSchema)

module.exports = {
  Review,
  Candle
}