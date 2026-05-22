//loops in javascript

//hello 3 times 

// console.log("hello")
// console.log("hello")
// console.log("hello")

// //hello 50 times 

// // 1 to 10 
// console.log(1)
// console.log(2)
// console.log(3)

//print hello 3 time 

// for loop, while 

// for 
// syntax 
// for (inilization; condition; inc/dec)

// for(let i =1 ; i<=3 ; i++){      //i++ = => i=i+1     i =1 ,2,3,4
//     console.log("hello")         //hello ,hello
// }

// //print 1 to 10

// for(let x=1;x<=10;x++){       //x= 1,2,3....10,11
//     console.log(x)           // 1,2,3.....10
// }

//print 0 to 10
// for(let x=0;x<=10;x++){       //x=0, 1,2,3....10,11
//     console.log(x)           // 0,1,2,3.....10
// }

//print table of 2

// for(let i=2;i<=20;i=i+2){
//     console.log(i)
// }

//-----------------------------------------
// for(let i=1;i<=10;i++){         //i=1,2,3.....10,11
//     console.log(i*2)            //1*2 = 2,4,6.....20
// }


// //print table of 5 
// for(let i=5;i<=50;i=i+5){
//     console.log(i)
// }

// //--------------------------------------------
// //print 0 to 10 in reverse

// for(let i=10;i>=0;i--){         //i=10,9,8.....0,-1
//     console.log(i)              //10,9,8.....0
// }

// //--------------------------------------------
// //print 1 to 10 in reverse

// for(let i=10;i>0;i--){         //i=10,9,8.....1,0     
//     console.log(i)              //10,9,8.....1
// }

// // i>=0    ==>0 
// // i>0    ==>1 

//--------------------------------------------
//print table of 2 in reverse
// for(let i=20;i>=2;i=i-2){
//     console.log(i)
// }


//--------------------------------------------
// //print table of 2 in reverse
// for(let i=10;i>=1;i--){
//     console.log(i*2)
// }

// //print table of 5 in reverse

//------------------------------------------------
//print 1 to 10 

// for(let i=1;i<=10;i++){
//     console.log(i)
// }

//-------------------------------------------------
//break and continue
//print 1 to 10 ==> 7 exit 

// for(let i=1;i<=10;i++){           // i=1,2,3...6,7
//     if(i==7){                    // i=7
//         break 
//     }
//     console.log(i)              //1,2,3...6,
// }

//-------------------------------------
// for(let i=1;i<=10;i++){           // i=1,2,3...6,7
//     console.log("hello")
//     console.log(i)              //1,2,3...6,7
//     if(i==7){                    // i=7
//         break 
//     }
//     console.log("bye")
// }
//------------------------------------------

//print table of 2  ==> 16 exit

// for(let i=2;i<=20;i=i+2){
//     if(i==16){
//         break
//     }
//     console.log(i)
// }

//------------------------------------------

//print table of 2  ==> 17 exit

// for(let i=2;i<=20;i=i+2){     //i= 2 ,4,6,8,10,12,14,16,18,20,22(condition false)
//     if(i==17){
//         break
//     }
//     console.log(i)
// }

//------------------------------------------------------
//print table of 2  ==> 17 exit

// for(let i=2;i<=20;i=i+2){     //i= 2 ,4,6,8,10,12,14,16,18,20,22(condition false)
//     if(i>=17){
//         break
//     }
//     console.log(i)          //i= 2 ,4,6,8,10,12,14,16
// }
//-----------------------------------------------------------------
//print 1 to 10 ==> 7 skip
//1,2,3,4,5,6, 8,9,10

for(let i=1;i<=10;i++){
    console.log("hello")
    if(i==7){
        continue
    }
    console.log(i)
}
//-----------------------------------------
for(let i=1;i<=10;i++){
    console.log("hello")
    console.log(i)
    if(i==7){
        continue
    }
    
}







