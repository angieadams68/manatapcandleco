const { Schema } = require("mongoose");

const Candle = new Schema(
  {
    candleName: { type: String, required: true },
    description: { type: String, required: true },
    price: {type: Number, required: true},
    aromas: { type: String, required: true },
    image: {type: String, required: true}
  },
  { timestamps: true }
);

module.exports = Candle;
