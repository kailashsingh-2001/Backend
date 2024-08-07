const rootcontroller= (req,resp)=>{
    resp.status(200).send({
        message:"welcome to the root controller",
    });

};
module.exports=rootcontroller;