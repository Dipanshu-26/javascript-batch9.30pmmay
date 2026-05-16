console.log("hello")

//aritamnatic operators  +,-,*,/,%
//comparision operators ==,!=,>=,<=,===, !==
//logical operators and && , or ||, ! not 
//conditional statements if else , ternary op, switch case 
//functions

//functions without parameter without return type
//function defination
function calculator(){
    console.log(20+10)
    console.log(20-10)
}

//call
calculator()
calculator()

//functions with parameter without return type
function calculator2(x,y){
    console.log(x-y)
    console.log(x+y)
}

calculator2(200,2)
calculator2(123,2)

////functions with parameter with return type

function simpleInterest(p,n,r){
    let si =(p*n*r)/100
    return si
}

let result = simpleInterest(20000, 3,6.5)
console.log(`simple interest = ${result} rs`)

//----------------------------------------------------------------------
//single input multiple output
// //if else
    
//find greater number from 3 numbers    
let x=200
let y=200 
let z=200

if(x>y && x>z){
    console.log("x is greater")
}
else if(y>x && y>z){
    console.log("y is greater")
} 
else if(z>x && z>y){
    console.log("z is greater")
} 
else {
    console.log("bigger 2 or all are equal")
}