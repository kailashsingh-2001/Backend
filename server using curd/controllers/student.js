
const students= require('../models/student');
  

exports.createStudent=async(req,res)=>{
    const data=req.body
    // console.log(data)
    const {student_id}=req.body
    const id= await students.findOne({student_id})    
    if(id){
        return res.status(400).json({message:"student already exists"})
    }

    const student = new  students(data);
    await student.save();
    res.status(201).json(student)

    
}