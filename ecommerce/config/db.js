const mongoose = require("mongoose");
const MONGO_URL=require("../config/db.js")

const connectDB = async ()=>{
    try{
        const connect= await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to mongondb `)
    }
    catch(error)
{
console.log(`Error in Mongodb ${error}`.bgRed.white)
    }
}


module.exports=connectDB;
