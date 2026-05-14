//conditional statements 
// one input and multiple output
//if - else , switch case , ternary operator

//short hand 
//condition ? stmt1 (if true) : stmt 2 (if false)

//can drive ? age >=18
let age = 6

//condition ? stmt1 (if true) : stmt 2 (if false)
age>=18 ? console.log("can drive") : console.log("can not drive")

age < 18 ? console.log("can not drive") : console.log("can drive")
// even odd 

let number = 23

//condition   ?    stmt1 (if true)  : stmt 2 (if false)
number%2 == 0 ? console.log("even") : console.log("odd")

number%2 != 0 ? console.log("odd") : console.log("even")

if(number%2==0){
    console.log("even")
}
else{
    console.log("odd")
}


if(number%2!=0){
    console.log("odd")
}
else{
    console.log("even")
}
//------------------------------------------------------------

//opsitive negative
let n=-12

n>=0 ? console.log("+ve") : console.log("-ve")

n<0 ? console.log("-ve") :console.log("+ve")

//------------------------------------------------------------

//login check 
let isLogin =true

isLogin ? console.log("Welcome!!!") : console.log("Please login first..")

//------------------------------------------------------------
//find greater number

let x=100
let y=20 
x>y ? console.log("x is greater") : console.log("y is greater")