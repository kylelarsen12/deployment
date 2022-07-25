//Dependencies
const express = require("express");
const app = express();

//Get homepage
app.get("/", (req, res) => {
  res.send("waddup");
});

app.listen(3000);
