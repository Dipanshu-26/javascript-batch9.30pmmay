//Falsy : false ,0 ,undefined, null, NaN, ""
// true , any thing other than falsy values are truthy

if(0){
    console.log("hi")
}
else{
    console.log("bye")
}

if(undefined){
    console.log("hi")
}
else{
    console.log("bye")
}

if(null){
    console.log("hi")
}
else{
    console.log("bye")
}

if(NaN){
    console.log("hi")
}
else{
    console.log("bye")
}

if(''){
    console.log("hi")
}
else{
    console.log("bye")
}

//-----------------------------------------------
if('abc'){
    console.log("hi")
}
else{
    console.log("bye")
}
if(123){
    console.log("hi")
}
else{
    console.log("bye")
}

if([]){
    console.log("hi")
}
else{
    console.log("bye")
}

//---------------------------------------------------
let x = 1
if(x == 0){
    console.log("hi")
}
else{
    console.log("bye")
}

//------------------------------------------------
x = undefined
if(x == undefined){
    console.log("hi")
}
else{
    console.log("bye")
}

//------------------------------------------------
x = NaN
if(isNaN(x)){
    console.log("hi")
}
else{
    console.log("bye")
}

//------------------------------------------------

//loops 
//for , while, do-while 
//iteration
//inilization --start
//condition -- where to stop
//increment / decrement

//print 1 t 10
for(let x=1;x<=10;x++){            //x=x+1   // x=1,2,3....10,11
    console.log(x)                           //1,2,3....10
}

//print table of 2
for(let x=2;x<=20;x=x+2){
    console.log(x)
}

//print table of 2 in reverse
for(let x=20; x>=2;x=x-2){            //x=20,18,16......2,0
    console.log(x)                    //20,18,16.....2
}

//-----------------------------------------
// break and continue 
// break -->exit the loop
// continue -->skip

// print 1 to 10 7 ==> exit 
for(let i=1;i<=10;i++){           //x=1,2......6,
    console.log(i)                //1,2.....6,7
    if(i==7){                     //x=7
        break
    }
    //console.log(i)                //1,2.....6
}

// print 1 to 10 7 ==> skip
//1,2,3,4,5,6,8,9,10

for(let i=1;i<=10;i++){
    if(i==7){
        continue
    }
    console.log(i)
}

// printtable of 2 16 ==> skip
//1,2,3,4,5,6,8,9,10

for(let i=2;i<=20;i+=2){
    console.log("i = ",i)
    if(i==16){
        continue
    }
    console.log(i)
}

// printtable of 2 17 ==> skip
//1,2,3,4,5,6,8,9,10

for(let i=2;i<=20;i+=2){
    //console.log("i = ",i)
    if(i>17){
        continue
    }
    console.log(i)
}
console.log("-----------------")
//--------------------------------------------------------------
// inilization 
// while(condition) 
// inc/dec    

//print 1 to 10
let a = 1
while(a<=10){
    console.log(a)
    a++
}

//print table of 2

a =2
while(a<=20){
    console.log(a)
    a+=2                 //a=a+2
}

//break , continue
// print 1 to 10 7 ==> exit

a=1
while(a<=10){
    console.log(a)
    if(a==7){
        break
    }
    //console.log(a)
    a++
    
}

// print 1 to 10 7 ==> skip

a=1
while(a<=10){         //a=1,2......6,7,8
    if(a==7){
        a++           //8
        continue      //skip
    }
    console.log(a)       //1,2,6,8
    a++                  //a=2,3,7
}
console.log("------------------")
//-------------------------------------------------------
//print 1 to 10
let y = 11
do{
    console.log(y)
    y++
}while(y<=10)


// let password  
// do{
//     password = prompt("Enter password : ")
    
// }while(password !== "Admin@123")

// console.log("Access Granted")








