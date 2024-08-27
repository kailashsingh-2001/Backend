const userModel=require('../models/userModel')
const hashPassword=require('../helpers/authHelper')

const registerController = async (req,res)=>{

    try{
        const {name,email,password,phone,address}= req.body

        if(!name){
            return res.send({error:'Name is Required'})
        }
        if(!email){
            return res.send({error:'Email is Required'})
        }
        if(!password){
            return res.send({error:'Password is Required'})
        }
        if(!phone){
            return res.send({error:'Phone is Required'})
        }
        if(!address){
            return res.send({error:'Address is Required'})
        }
// checking user
        const existinguser = await userModel.findOne({email});
     if(existinguser){
        return res.status(200).send({
            success:true,
            message:'Already Register Please login'
        })
     }

    //  register user

    const hashedPassword= await hashPassword(password)

    const user= new userModel({name,email,phone,address,password:hashedPassword}).save()
     
    res.status(201).send({
        success:true,
        message:'user Register successfully',
        user
    })
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Registration',
            error
        })
    }

};

module.exports= registerController