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

// app.post("/users", async (req, res) => {
//   try {
//     const users = await User.create(req.body);
//     res.status(201).json(users);
//   } catch (error) {
//     res.status(500).json({ message: "faild to create user!" });
//   }
// });

// app.delete("users/:id", (req, res) => {
//   try {
//     const users = User.findByIdAndDelete(req, params.id);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.json({ message: "user deleted succsessfully " });
//   } catch (error) {
//     res.status(500).json({ message: "Internal Server Error " });
//   }
// });

// app.delete("/users/:id", (req, res) => {
//   try {
//     const users = User.findByIdAndDelete(req, params.id);

//     if(!user){
//         return res.status(404).json({message:"not found "})
//     }
//     res.json({message:"user deleted succsessfully "})
 
//   } catch (error) { 
   
//    }
//   });  
  
 

const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("server runing");
});

app.listen(3000, () => {
  console.log("server runig in port 3000");
});

const express = require('express')
const app = require();

app.get((req,res)=>{
  res.send("Server is Runing ")
});

app.listen(3000,()=>{
console.log("Server Runing in Port 3000 ");
})
    

