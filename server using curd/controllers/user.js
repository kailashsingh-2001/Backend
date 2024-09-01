const User= require('../models/User');
const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken');

const secret="wedrfuiofdsghjklkjhmnvcxvbnmlkjytertyuiouy";

// creating new user
exports.createUser= async(req,res)=>{
    const data= req.body
    const {email}=req.body

    // console.log(data);
    const existingUser= await User.findOne({email});
    if(existingUser){
        return res.status(400).json({message:"user already exists"})
    }
    const user = new User(data)
    await user.save();
    res.status(201).json(user)

}
// getting all user
exports.getAllUser =async(req, res)=>{
   const user = await User.find();
    res.status(201).json(user)
}



// sign up
exports.signupdata= async(req, res)=>{
   const {email,password,name}=req.body
    console.log(req.body)

    const otp=Math.floor((Math.random()*10000));
    // console.log(otp);
    
    const expireotp=Date.now()+(10 *(60 *1000));
    // console.log(expireotp);
    

    const salt= bcrypt.genSaltSync(10);
    const hash=bcrypt.hashSync(password, salt);
   
    
    if(!(name && email && password)){
        return res.status(400).json({message:"all feild are required"})

    }
    
    const existingUser= await User.findOne({email});
    if(existingUser){
        return res.status(400).json({message:"user already exists"})
    }
    const data = {email , name, password:hash,otp, expireotp}
    console.log(data);
    
    const user= new User(data)
    await user.save();
    res.status(201).json(user)

}
  

// login
exports.login= async(req,res)=>{
    const {email, password,name,otp} = req.body  
   if(!(email && password && name && otp)){
        return res.status(400).json({message:"all Feild are requird"})
    }
   const existingUser = await User.findOne({email});
    if(!(existingUser)){
        return res.status(400).json({message:"User not found"})
    }
 const match = await bcrypt.compare(password, existingUser.password);
    // console.log(`>>>>>>>>match>>>>>>>>>>`,match);
    if(!match){
        return res.status(400).json({message:"Invalid password"})
    }

    const currentTime=Date.now();

    if(!(otp === existingUser.otp)&& currentTime<=expireotp){
        return res.status(400).json({message:"wrong otp"})
    }
    const token = jwt.sign({id:existingUser._id}, secret
        // , { expiresIn: '1m' }
    );
    // console.log(`>>>>>>token>>>>>>>>>>>`,token);
    
    res.json({token,existingUser})

}

// generate otp










