const jwt= require('jsonwebtoken');
const secret= "wedrfuiofdsghjklkjhmnvcxvbnmlkjytertyuiouy";
const User= require('../models/User');

module.exports=async(req,res,next)=>{

    try{
        const header =req.headers.authorization
    
        console.log(">>>>>>>>>>>>>>>>>>>",header);


     if(!header){
        return res.status(401).json({message:'no header provided'})
     }
     const token= header.split(" ")[1]
     console.log(token);
     if(!token){
        return res.status(401).json({message:"no tokken kprovided"})
     }
     const decode=jwt.verify(token, secret)
     console.log( ">>>>>>>>>>>",decode);
     if(!decode){
        return res.status(401).json({message:"invalid user"})
     }
   

     const {email}=decode;

     const user=await User.findOne({email})
     console.log(user);          
     if(!user){
        return res.status(401).json({message:"user no found"})
     }
   
    }
    
    catch(err){
        return  console.log(err)

    }
     
     

     next();
     
}