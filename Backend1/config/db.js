const mongoose = require("mongoose");
const colors = require("colors");



// asynchoronous javascript

const connetDB = async ()=>{
    try{
      await  mongoose.connect(process.env.MONGO_URL);
      console.log("data base connected");

    }
    catch(error){
        console.log(error)
    }
};


module.exports = connetDB;