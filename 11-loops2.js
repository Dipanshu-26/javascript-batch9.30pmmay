//while loop




//print 1 to 10 
// inilization
// while(condition){
//     stmts1
//     stmts2 
//     inc/dec
// }

let i=1
while(i<=10){
    console.log(i)
    i++
}

//---------------------------------------
//print table of 2 
i=2
while(i<=20){
    console.log(i)
    i=i+2
}


//---------------------------------------
//print table of 2 
i=5
while(i<=50){
    console.log(i)
    i=i+5
}

//-------------------------------------------
//print 1 to 10 ==> exit at 7

// i=1
// while(i<=10){
//     if(i==7){
//         break
//     }
//     console.log(i)
//     i++
// }

//-------------------------------------------

//print 1 to 10 ==>7 skip

i=1
while(i<=10){          //1,2,3...6,7,8,9,10
    if(i==7){         //7
        i++
        continue
        
    }
    console.log(i)      //1,2,3...6,8,9,10
    i++                  //2,3,4 ...7,9,10,11
}
//--------------------------------------------------------
console.log("--------------")
i=1
while(i<=10){
    i++
    console.log(i)
    
}