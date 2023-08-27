const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/home", (rep, res) => {
  res.send("Hello There");
});

module.exports = app;
