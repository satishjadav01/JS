const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  req.send("server is runing ");
});

app.listen(3000, () => {
  console.log("server is runing on port number 3000");
});
