const express = require("express");
const router = express.Router();
const fs = require("fs");
// const { v4: uuid } = require("uuid");

// MIDDLEWARE
router.use(express.json());


// READ AND PARSE DATA FUNCTION
function readAndParseData() {
  const data = fs.readFileSync("./data/data.json", "utf8");
  return JSON.parse(data);
}

// FLAG LIST ROUTE
router.route("/").get((req, res) => {
  try {
    const flagData = readAndParseData().map((flag) => {
      return {
        // id: uuid(),
        image: flag.flags.svg,
        name: flag.name,
        population: flag.population,
        region: flag.region,
        capital: flag.capital,
      };
    });
    res.json(flagData);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;