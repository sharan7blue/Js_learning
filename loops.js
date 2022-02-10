



/*

for(initialization  ; condition ; incr/decr){
//code 
}

*/

//     1         2      4
for( let i =0  ; i<=11 ; i++){
    console.log(i);//3 0 1 
    for(let j=0 ; j<2 ;j++){
        console.log("hello");//heelo hello
    }
}

let num = 5; 
// num++ ;//post increment 

// num--; //post decrement 
// --num ;//pre decrement 
// ++num ; //pre increment

console.log(num , num++ , num , --num , num , num-- ,num , ++num );
//           5     5      6      5      5      5      4     5

let j=1;
// while(j<5){
//     console.log(j);
//     j++
// }

do{
    console.log(j);
    j++;
}while(j>5)


//for in , for of 
var str = 'abc';
var arrForOf = [];
var arrForIn = [];

// for(value of str){
//   arrForOf.push(value);
// }

// for(value in str){
//   arrForIn.push(value);
// }

console.log(arrForOf); 
// ["a", "b", "c"]
console.log(arrForIn); 