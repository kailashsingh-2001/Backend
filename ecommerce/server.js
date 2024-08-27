const express = require('express');
const colors=require("colors");
const dotenv=require("dotenv").config()
const morgan=require("morgan");
const connectDB = require('./config/db');
const authRoutes= require('./routes/authRoutes')



const PORT=process.env.PORT || 5000;



const app= express();
connectDB()


app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/v1.auth',authRoutes)

app.get('/',(req,res)=>{
    res.send('<h1>welcome to ecommerce website </h1>');
});

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
});
