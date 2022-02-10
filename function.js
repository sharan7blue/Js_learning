//function  - > block of code that can invoked/calleld when ever neccesary 
//code reusability 


function Sum(a,b ){ //function declaration 
    let res = a+b; // function definition
      return  (
      res);//5
      console.log("done");///unreachable code 
}

let result = Sum(2,3);//function call 

console.log(result);//5

Sum(4,5);



let sum2 = function (a,b){
console.log(a+b);
}//anonymous function 

sum2(4,5);


//Arrow function 

let Square= a => { 
    return Math.pow(a,2)};

let res2 = Square(5);
console.log(res2);

//