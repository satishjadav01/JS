const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("server runing");
});

app.listen(3000, () => {
  console.log("server runig in port 3000");
});


// GET API 

