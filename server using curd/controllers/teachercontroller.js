const teacher= require('../models/teacher')

exports.createteacher=async(req,res)=>{
    const data=req.body
    // console.log(data)
    const {teacher_id}=req.body
    const id= await teacher.findOne({teacher_id})    
    if(id){
        return res.status(400).json({message:"student already exists"})
    }

    const  teacher= new  teacher(data);
    await teacher.save();
    res.status(201).json(teacher)

    
}