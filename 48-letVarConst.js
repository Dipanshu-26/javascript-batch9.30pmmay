// Difference between var, let, and const in JavaScript

// 1. var --- Function scoped, Can be re-declared, Can be re-assigned,
// Causes unexpected behavior → not recommended

// 2. let  --- Block scoped, Cannot be re-declared in the same scope, Can be re-assigned
// Preferred for variables whose value changes

// 3. const --- Block scoped, Cannot be re-declared, Cannot be re-assigned
// Must be initialized at declaration, Used for constant values

let a=10
console.log(a)
a=20
console.log(a)
//let a= 30     //SyntaxError: Identifier 'a' has already been declared

//const c         //SyntaxError: Missing initializer in const declaration
const c =100
console.log(c)
//c=20             //TypeError: Assignment to constant variable.

let b
console.log(b)
b=20
console.log(b)

//----------------------------------------------------------------------------------------------
console.log("-----------------------------")
//var 

var v1 = 25
console.log(v1)
v1=50
console.log(v1)
var v1 = 65
console.log(v1)
v1=75
console.log(v1)

//---------------------------------------------------------------------------------------------
console.log("-----------------------------")
let b1=10
console.log(b1)
{
    let b2=20
    console.log(b2)
    console.log(b1)
}
console.log(b1)
//console.log(b2)   //ReferenceError: b2 is not defined
//---------------------------------------------------------------------------------------------
console.log("-----------------------------")
let c1="dip"
console.log(c1)
{
    let c1 = "neel"
    console.log(c1)
}

console.log(c1)
//---------------------------------------------------------------------------------------------
console.log("-----------------------------")

function scopeTest(){
    if(true){
        var v1 = "i am var"
        let v2 = "i am let"
    }
    console.log(v1)
    //console.log(v2)   //ReferenceError: v2 is not defined
}
scopeTest()
//---------------------------------------------------------------------------------------------
console.log("-----------------------------")

// In JavaScript, var, let, and const are all hoisted, but they behave differently.

// | Keyword | Hoisted? | Initialized during hoisting? | Can access before declaration? | Result           |
// | ------- | -------- | ---------------------------- | ------------------------------ | ---------------- |
// | `var`   | ✅ Yes    | ✅ Yes, with `undefined`      | ✅ Yes                          | `undefined`      |
// | `let`   | ✅ Yes    | ❌ No                         | ❌ No                           | `ReferenceError` |
// | `const` | ✅ Yes    | ❌ No                         | ❌ No                           | `ReferenceError` |

// 1. var Hoisting
////The declaration is hoisted, but the assignment is not.
console.log(x)
var x=10
console.log(x)

//conceptually executes like below
// var x            //declaration
// console.log(x)   //undefined
// x=10             //assignment
// console.log(x)    //10


// 2. let Hoisting
//let and const is hoisted but remains in the TDZ Temporal Dead Zone until its declaration is reached.
//console.log(y)    //ReferenceError: Cannot access 'y' before initialization
let y=20
console.log(y)

//----------------------------------------------------------------------------------------------------------

let z
console.log(z)
z=200
console.log(z)