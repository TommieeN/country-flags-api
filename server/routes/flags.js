const express = require("express");
const router = express.Router();
const fs = require("fs");

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
        id: flag.alpha3Code,
        image: flag.flags.svg,
        name: flag.name,
        nativeName: flag.nativeName,
        population: flag.population,
        region: flag.region,
        subregion: flag.subregion,
        capital: flag.capital,
        topLevelDomain: flag.topLevelDomain,
        currencies: flag.currencies,
        languages: flag.languages,
        borders: flag.borders,
      };
    });
    res.json(flagData);
  } catch (error) {
    res.status(500).send("Internal Server / route Error");
  }
});

// FLAG DETAIL ROUTE
router.get("/:flagId", (req, res) => {
  try {
    const flagData = readAndParseData();
    const foundFlag = flagData.find((flag) => flag.alpha3Code === req.params.flagId);
    res.json(foundFlag);
  } catch (error) {
    res.status(500).send("Internal Server id route Error");
  }
});

module.exports = router;