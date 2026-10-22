const express = require('express')
const app = express();

app.use(express.json())

app.get("/",()=>{
    res.send('server is runing ')
})

app.listen(3000,()=>{
    console.log('server runing in on port number 3000');
    
})