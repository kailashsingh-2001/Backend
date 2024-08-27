const mongoose= require("mongoose");

const studentSchema=  new mongoose.Schema(
    {
        student_id:{
            type:Number,
            require:true

        },
        first_name:{
            type:String,
            require:true

        },
        Last_name:{
            type:String,
            require:true

        },
        

        Dob:{
            type:Date,
            require:true

        },
        Gender:{
            type:String,
            require:true

        },
        email:{
            type:String,
            require:true,
            uniqure:true

        },
        phone_number:{
            type:Number,
            require:true

        },
        Address:{
            type:String,
            require:true

        },
        course:{
            type:String,
            require:true

        },



    },
    {
        timestamps:true,versionKey:false
    }

)
module.exports= mongoose.model("student",studentSchema)
