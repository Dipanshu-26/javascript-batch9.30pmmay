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

//-------------------------------------------------------------

//condition ? stmt 1 if true : stmt 2 if false 

//even odd

let num=18
num%2 == 0 ? console.log("even"):console.log("odd")

num%2 != 0 ?console.log("odd") : console.log("even")

//can drive 
let age = 19
age >=18 ? console.log("can drive") : console.log("can not drive")

let isLogin = false

isLogin ? console.log("welcome!!") : console.log("please login again..")

//-----------------------------------------------------------------------------------

//swich case 
let food = "Milk"
switch(food){
    case "banana":
    case "Banana":
        console.log("fruits")
        break
    case "potato":
    case "Potato":    
        console.log("vegitables") 
        break  
    case "milk":
    case "Milk":
        console.log("dairy")  
        break
    default:
        console.log("snacks")       
}


food = "Banana" 
let isTrue = true
switch(isTrue){                                              //switch (true)
    case (food == "banana" || food == "Banana"):               //false 
        console.log("fruits")
        break
    case(food == "potato" || food== "Potato"):              //false
                console.log("vegitables") 
        break  
    case (food == "milk" || food == "Milk"):                //case true
            console.log("dairy")  
        break
    default:
        console.log("snacks")       
}
