const express = require("express");
const app = express();
const flagData = require("./routes/flags.js");
const cors = require("cors");
const PORT = 8008;

app.use(cors());
app.use(express.json());
app.use("/flags", flagData);
app.use("/flags/:flagId", flagData);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})