//Object - > Object is a Data Structure which stores data in form of key value pairs.



//Car 

let Car ={
    model : "civic",
    color:"white",
    fuelType :"petrol",
    seatingCapacity: 5
}


//let obj = {}

//let obj = new Object ()



//console.log( Car. model)

//for in 
let values = [];
for(let i in Car){
    values.push(Car[i])
}
console.log(values)

//Object.values(objectName)
let valuesArr = Object.values(Car);
console.log(valuesArr)

let keysArr = Object.keys(Car);
console.log(keysArr)

let Car2 = Object.assign({mfg:2021 , sunroof:"yes"} , Car , {country:"India" , state:"Del"});
console.log(Car2);

/*
carModel  : Civic
Color: white
fuelType : petrol
seatingCapacity :5 


*/