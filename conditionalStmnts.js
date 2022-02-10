

/*

6+5*4  -math expression
(6,5,4, operands )
+* operators
compariosn operators  ==  === , < > <= >= 
logical operators  &&   || 
bitwise operator   & | !
asginemnt operator  = 
*/

/*
if , else , else if 
Switch case 
Ternary operator 


*/

let age= 30;

if(age == 25){
    console.log("eligible");
}
else if(age>25){
    console.log("yes Eligible")
}
else{
    console.log("not Eligible")
}

//switch case  weeks [ ]

let num1 = 10;
let num2 =20;
let opr = "?"; 

switch(opr){
    case "+" : console.log(num1+num2); break ;
    case "-" : console.log(num1-num2); break;
    case "*" : console.log(num1*num2); break;
    default : console.log("invalid operation")
}


//ternary operator 

//(condition) ? (true) : false

(age==25)? console.log("eligoble") : console.log("not eligible");

