//conditional statements 

//if -else , ternary operator, switch case 

//if else 
//num 1 -5 =10%  , 6 to 10 = 20% , >10 = 30%

let num = -5 
if(num>=1 && num <=5){
    console.log("10% discount")
}
if(num >=6 && num <=10){
    console.log("20% discount")
}
if(num >10){
    console.log("30% discount")
}

//----------------------------------------------------

num = -5 
if(num>=1 && num <=5){
    console.log("10% discount")
}
else if(num >=6 && num <=10){
    console.log("20% discount")
}
else if(num >10){
    console.log("30% discount")
}
else {
    console.log("please enter proper number")
}