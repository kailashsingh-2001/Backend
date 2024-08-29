const User= require('../models/User');
const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken');
const secret = 'wedrfuiofdsghjklkjhmnvcxvbnmlkjytertyuiouy'


// post user
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

exports.getAllUser =async(req, res)=>{
   const user = await User.find();
    res.status(201).json(user)
}

// exports.getSingleUser = async(req,res){
//     console.log()
// }

// sign up
exports.signupdata= async(req, res)=>{
    
    const {email,password,name}=req.body
    console.log(req.body)
    // return
 
    // const {email, password,name} = req.body
    const salt= bcrypt.genSaltSync(10);
    const hash=bcrypt.hashSync(password, salt);
    // console.log(hash);
    
    if(!(name && email && password)){
        return res.status(400).json({message:"all feild are required"})

    }
    
    const existingUser= await User.findOne({email});
    if(existingUser){
        return res.status(400).json({message:"user already exists"})
    }
    const data = {email , name, password:hash}
    const user= new User(data)
    await user.save();
    res.status(201).json(user)

}
  

// login
exports.login= async(req,res)=>{
    const {email, password,name} = req.body  

    if(!(email && password && name)){
        return res.status(400).json({message:"all Feild are requird"})
    }

    const existingUser = await User.findOne({email},)
    // console.log(`>>>>>>>>>>>existingUser>>>>>>>>>`,existingUser);

    if(!(existingUser)){
        return res.status(400).json({message:"User not found"})
    }

    const match = await bcrypt.compare(password, existingUser.password);
    // console.log(`>>>>>>>>match>>>>>>>>>>`,match);
    if(!match){
        return res.status(400).json({message:"Invalid password"})
    }
    const token = jwt.sign({id:existingUser._id}, secret
        // , { expiresIn: '1m' }
    );
    // console.log(`>>>>>>token>>>>>>>>>>>`,token);
    
    res.json({token,existingUser})

}

// generate otp

// exports.generateotp= async(req,res)=>{
    // const otp=
function  generate(){
    // const randomnumber= Math.random*4;
    // // return randomnumber
    // console.log(randomnumber)
    const jjj=(Math.random()*10000)

    console.log(jjj);
    
}

generate()
// }







