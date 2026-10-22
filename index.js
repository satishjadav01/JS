const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is runing ");
});

app.listen(3000, () => {
  console.log("server runing on port 3000");
});
