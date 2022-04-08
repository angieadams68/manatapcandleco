const db = require("../db");
const { Review } = require("../models");


db.on("error", console.error.bind(console, "MongoDB connection error:"));


const main = async () => {
  const reviews = [
    {
      name: "Ian Adams",
      review:
        "I cant get over the scents!"
    },
    {
      name: "Tommy S",
      review:
        "Why wasnt this around when I was a teen?! "
    },
    {
      name: "Anida Mann",
      review: "I enjoyed the surprise card!!"
    },
    {
      name: "Chaz J",
      review:
        "This is really awesome "
    },
  ];

  await Review.insertMany(review);
  console.log("Created some review!");
};
const run = async () => {
  await main();
  db.close();
};

run();
