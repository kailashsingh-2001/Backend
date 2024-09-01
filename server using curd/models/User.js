const mongoose= require('mongoose');

const userSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        password:{
            type:String,
            require:true,

        },
        otp:{
            type:Number,
            require:true,

        },
        expireotp:{
            type:Number,
            require:true,

        }

    },
    {
        timestamps:true,versionKey:false
    }
);
module.exports= mongoose.model("User",userSchema)