const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PTOT || 5000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("car doctor server recap...bot bot...");
});

app.listen(port, () => {
  console.log(`The Car Doctor server is running from port ${port}`);
});
