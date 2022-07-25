//Dependencies
const express = require("express");
const app = express();
require("dotenv").config();

//Get homepage
app.get("/", (req, res) => {
  res.send("waddup");
});

app.listen(process.env.PORT);
