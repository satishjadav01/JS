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

// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: "server error" });
//   }
// });

app.post("/users", async (req, res) => {
  try {
    const users = await User.create(req.body);
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ message: "faild to create user!" });
  }
});
