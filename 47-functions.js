// functions 

//function declaration 
//---------------------

function greet(){
    console.log("hello")
}
greet()

//hoisting
//can call before definitation
greet2()

function greet2(){
    console.log("hello2")
}


//function expression
//----------------------
//greet3()    //ReferenceError: Cannot access 'greet3' before initialization

let greet3 = function(){
    console.log("hello3")
}

greet3()
console.log(greet3)

//is it hoisted  = No.

//arrow function
//----------------------
//greet4()    //ReferenceError: Cannot access 'greet4' before initialization

let greet4 = () => {
    console.log("hello4")
}

greet4()
//is it hoisted  = No.

//short form :
//---------------
// add = function(a,b) =>return a+b
let add = (a,b) => a+b

let q1 = add(10,20)
console.log(q1)

//Anonymous Function
// setTimeout(function(){
//     console.log("Run")
// }, 2000)

//function as parameter

let sub = (x,y) => x-y 
console.log(sub(40,20))

let mul = (x,y) => x*y 
let div = (x,y) => x/y 
let mod = (x,y) => x%y
 

function calc(fn,a,b){
    let ans = fn(a,b)
    return ans 
}

let q2 = calc(sub,100,50)
console.log(q2)

let q3  = calc(mul, 20,2)
console.log(q3)

let q4 = calc(add,30,5)
console.log(q4)

//function as return type 


function substraction(){
    return (x,y) => x-y
}

let q5=substraction()
let ans = q5(100,40)
console.log(ans)