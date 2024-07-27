const express = require("express")
const colors = require("colors")
const dotenv= require("dotenv").config()
const app = express();
 
app.get('/',(require)=>{
    res.send('hello world');
})
app.listen(5000,()=>{
    console.log("app is listening")
})




