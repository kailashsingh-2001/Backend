const User= require('../models/User');

exports.createUser= async(req,res)=>{
    const data= req.body
    const {email}=req.body

    console.log(data);
    const existingUser= await User.findone({email});
    if(existingUser){
        return res.status(400).json({message:"user already exists"})
    }
    const user = new User(data)
    await user.save();
    res.status(201).json(user)

}

exports.getAllUser =async(req, res)=>{
   const user = await User.find();
    res.status(201).json(user)
}

// exports.getSingleUser = async(req,res){
//     console.log()
// }