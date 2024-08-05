const express = require("express");
const colors= require("colors");
const nodemon= require("nodemon");
const dotenv= require('dotenv').config()
const morgan= require("morgan");
const connetDB = require("./config/db");

const app= express();
const PORT= process.env.PORT || 5000;

connetDB();


 app.use(express.json());

 app.get("/",(req,res)=>{
    console.log("welcome to express");
 });

 app.listen(PORT,()=>{
    console.log(`server is listining on ${PORT}`.yellow);
 });