// generate otp
exports.generate=()=>{
    const otp= Math.floor((Math.random()*10000));
    return otp;
  }
 // expire otp
  exports.expriesotp=()=>{
      const start=Date.now()+(10 *(60 *1000));
      
      return start
  
  }