//Array - is a Data structire which stores data in continous memory location
//indexes    0   1  2  3  4  5
let marks = [10,20,30,40,50,60];

console.log(marks[2]);//

let arr1 =[];
let arr2 = new Array();


console.log(marks);

//marks[0]

// for(let i=0; i<marks.length ;i++){
//     console.log(marks[i]);
// }

//for in for of 

//for in 

for(let i in marks ){
    console.log(marks[i]);
}

for(let i of marks){
    console.log(i);
}

//array methods

let arr = [3,4,5];
//psuh -> adds values to the last index
arr.push(6);
console.log(arr);

//pop() - > it will renove value from the last index
arr.pop();
console.log(arr);

//unshift - add value to first index
arr.unshift(2);
console.log(arr);

//shift()-> reoves firsyt value

arr.shift();
console.log(arr);

let newArr = [2,3,5,4,3];//  [0:2,1:3]<= 62330 <= A2FF(reference value)  <= newArr   //newAr = newArr 
//splice 
// arrayName.splice(startIndex, number of values to be removed , values to be added );

newArr.splice(3,1, 10)
console.log(newArr);


//reverse()

newArr.reverse();
console.log(newArr);


let num = 5;  //[5]<= 62530 <= num
let num2 = num ;//[5] <=63550 <= num2




//slice 
//arrayNAme.slice(startIndex, endIndex+!)
// console.log("newArr",newArr)
// let newArr3 = newArr;
// newArr3.pop();
// console.log(newArr,newArr3)


let newArr2 = newArr.slice(1);

console.log(newArr2);



//sort () - alphabatic sort 

let arr3 =[6,3,1,7,11 ,33];//[1,3,6,7];



console.log(arr3.sort(function(num1,num2){return num1-num2;}));//numeric sort 

console.log(arr3.sort((num1,num2)=> num1-num2 ));


//map 
//index    0 1 2 3
let arr4 =[2,5,4,3];//4

//[0, 5 ,8 , 9]
let res3 =[];
for(let i=0 ; i<arr4.length ; i++){
    res3.push(i*arr4[i]);
}
console.log(res3);

/*
[]
loop
push 

*/

//syntax   arrayName.map((value, index , arr)=>{retunr })

/*
[0,5,8,9]

*/
let res4 =  arr4.map((value,index)=> value*value);

console.log(res4);


let arr5 =[5,6,4,2,8];

// [6,4,2,8]
let evenValues=[];
for(let i=0 ; i<arr5.length ; i++){
    if(arr5[i]%2 ==0){
      evenValues.push(arr5[i]);
    }
}
console.log(evenValues);


/*

[]
for loop
if
push
*/

let evenNumbers = arr5.filter((value)=>value%2==0)
console.log(evenNumbers);
///

/*
[6,4,2,8]

*/


// reduce 

let arr6 =[2,3,4,1,5];
//

let sum =0; 
for(let i=0;i<arr6.length ;i++){
    sum = sum + arr6[i]; // sum = 2+ 3
}
console.log(sum);


let sum2 = arr6.reduce((acc,val2)=>{return acc+val2 ;} , 10)
console.log(sum2)

/*
val1 =2 val2 = 3    =>  5;
val1 = 5 val2 = 4 =>  9 
val1 = 9 val2 = 1  => 10
val1 =10 val2 =5 => 15


*/

let forEachResult = arr6.forEach((val)=> {return val*val;});
console.log(forEachResult);
//forEach - doesnt return anything , it will give undefined ;


/*



i want u to return true only when all the values of array are < 10 
else return false ]


let arr8 = [6,7,8,9,15];
//return true if atleast one value is > 10 else return false 

*/


let arr7 = [4,5,3,7];   //true / false 
let result = true;
for(let i=0;i<arr7.length ;i++){

    if (arr7[i] < 10) {
        result = true;
        
    }
    else {
        result = false;
    }
}
console.log(result);


let arr8 = [6,7,8,9,15];  //true / false 
let results = true;
for(let i=0;i<arr8.length ;i++){

    if (arr8[i] > 10) {
        results = true;
        
    }
    else {
        results = false;
    }
}
console.log(results);


