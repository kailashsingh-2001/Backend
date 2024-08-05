// 1. calculate the factorial of 5 using reduce method
// keep
//   var factorial = (n) =>{
//     let num= Array.from({length:i},(_,index)=>index+1);
//     let result=num.reduce((acc,currentvalue)=>acc*currentvalue,1);
//     return result;
//   }
//    var factorialof5 =fact(5);
//    console.log(factorialof5)

// 2. find the maximum of n numbers passed from function using reduce
    //  const max=(...num)=>{
    //     if(num.length===0){
    //         return noresult;
    //     }
  
    //  const findmax=num.reduce((aMax,bvalue)=>{
    //     return bvalue>aMax ? bvalue:aMax;

    //  },num[0])};
    //  console.log(max(4,5,6,7));


// 3. pass more than one string argument from function and check whether the name prajjal is appear how many times

// const frequencycount = (...string) => {
//   return string.reduce((count, str) => {
//     if (str === "prajjal") return count + 1;
//     else return count;
//   }, 0);
// };

// console.log(frequencycount("rahul", "prajjal", "john", "mohan", "hari", "prajjal", "keshav", "mohit", "prajjal", "kailash"));
