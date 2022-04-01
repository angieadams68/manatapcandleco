const { Candle, Review } = require("./models");
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const PORT = process.env.PORT || 3001;
const db = require("./db");
const req = require("express/lib/request");
const res = require("express/lib/response");

const app = express();

/////////////// MIDDLEWARE ////////////////

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

//////// ROUTES ////////

app.get("/", (req, res) => {
  res.send("This is root!");
});

app.get("/candles", async (req, res) => {
  const candles = await Candle.find({});
  res.json(candles);
});

app.post("/reviews", async (req, res) => {
  const Review = await Review.create(req.body);
  await res.json(Review);
});

app.put("/update", async (req, res) => {
  const updateCandle = req.body.updateCandle;
  const id = req.body.id;

  try {
    await UpdateModel.findbyId(id, (err, updateCandle) => {
      updateCandle.candleName = UpdateCandle;
      updateCandle.save();
      res.send("update");
    });
  } catch (err) {
    console.log(err);
  }
});


app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  await Candle.findByIdAndRemove(id).exec();
  res.send("deleted");
})





/////////////// EXPRESS SERVER LISTEN TO PORT //////////////////

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
