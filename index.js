const express = require('express')
const app = express();

app.use(express.json())

app.get("/",()=>{
    res.send("Server is runing ")
});

app.listen(3000,()=>{
    console.log('server is runing at 3000 port ');
})