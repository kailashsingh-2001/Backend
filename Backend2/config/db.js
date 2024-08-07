const mongoose= require("mongoose");
const colors= require("colors");


const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Database connected successfully`.bgGreen.white);
    }
    catch(error){
        console.log(`error occured:${error}`.bgRed.white);
    }
};

module.exports=connectDB;