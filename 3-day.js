//functions 
//functions without parameter and without return type 
//function defination
function greet(){
    console.log("Hello Dipanshu..")
}

//call
greet()
greet()
greet()

//------------------------------------------------------
function calculator(){
    console.log(20+10)
    console.log(20-10)
    console.log(20*10)
    console.log(20/10)
    console.log(20%10)
}

calculator()
// command to execute L:  node filename.js

//------------------------------------------------------------------
//function with parameter and function without return type
function greet2(name){                       //name = parameters
    console.log(`Hello ${name} ...`)
}

greet2("neel")             // arguments
greet2("Tanish")

//------------------------------------------------------------------
function calculator2(a,b){
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
    console.log(a%b)
}
//          a  b
calculator(100,2)
//------------------------------------------------------------------

//function with parameter and function with return type
//find average of 3 numbers 
function average(x,y,z){
    let res = (x+y+z)/3
    return res
}
//                 x  y  z
let avg = average(11,22,33)
console.log(avg)

avg = average(123,456,789)
console.log(avg)

//let , const

let a=20
a=30
a="dip"
console.log(a)
//let a=100        //SyntaxError: Identifier 'a' has already been declared

const cst = 100
console.log(cst)
//cst =200      // TypeError: Assignment to constant variable.