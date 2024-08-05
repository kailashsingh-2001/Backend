//1. aapko arrow function ke madad se 4 input lena hai aur uska sum calculate karna hai'

var sum=(a,b,c,d)=>
   {
   return a+b+c+d;
   }
   sum(3,5,4,6);
   
    

// 2. using annoymous arrow function create a function which does factorial of 5 
     const factorialof5 =(n=>{
        const factorial =num => num<=1 ? 1 :num * factorial(num-1);
        return factorial(n);
     })(5)
     .console.log(factorialof5);
// 3. use the concept of hoisiting and call a factorial function without declaring it and then define after calling
   console.log(factorial(5)); 

   function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


// 4. use the concept of immediately invoked function to check whether a number is even or odd. 

var result =(function (a){
  if(a%2 ===0 ){
      console.log("even")
  }
  else{
   console.log("odd")
  }
})(3);
console.log(result);

   
// 5. u// Define a parameterized function constructor for calculating factorial
const Factorial = new Function(`'n',
   if (n === 0 || n === 1) {
       return 1;
   } else {
       return n * arguments.callee(n - 1);
   }
`);


const result = Factorial(5); 
console.log(result); 


