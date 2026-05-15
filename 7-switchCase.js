//switch case 

// switch(value){
//     case v1 :
//         .....
//         break
//     case v2 : 
//          ....
//          break
// }

let city = "jaipur"
switch(city){                  //switch("jaipur")
    case "pune":
        console.log("welcome")
        console.log("MH")
    case "banglore":
        console.log("welcome")
        console.log("KA")   
    case "jaipur":
        console.log("welcome")
        console.log("RJ")     
}
console.log("--------------------------------")
//--------------------------------------------------------------
city = "Jaipur"
switch(city){                  
    case "pune":
        console.log("welcome")
        console.log("MH")
        break
    case "banglore":
        console.log("welcome")
        console.log("KA")
        break   
    case "jaipur":
        console.log("welcome")
        console.log("RJ") 
        break 
    default :  
        console.log("enter proper city name...")     
}
//-------------------------------------------------------------------------

city = "Jaipur"
switch(city){                  
    case "pune":
    case "Pune" :     
        console.log("welcome")
        console.log("MH")
        break
    case "banglore":
    case "Banglore" :    
        console.log("welcome")
        console.log("KA")
        break   
    case "jaipur":
    case "Jaipur":    
        console.log("welcome")
        console.log("RJ") 
        break 
    default :  
        console.log("enter proper city name...")     
}
console.log("-----------------------------------")
//------------------------------------------------------------------
city = "Pune"
switch(city){                     // switch("pune")
    case (city == "pune" || city == "Pune"):     //case true :
        console.log("MH")
        break
    case (city == "banglore" || city == "Banglore")  :     //case false
        console.log("KA") 
        break 
    case (city == "jaipur" || city == "Jaipur")  :              //case false
        console.log("RJ") 
        break 
    default:
        console.log("enter proper city name..") 
              
}

//------------------------------------------------------------------
city = "Banglore"
let isFlag = true
switch(isFlag){                     // switch(true)
    case (city == "pune" || city == "Pune"):     //case false :
        console.log("MH")
        break
    case (city == "banglore" || city == "Banglore")  :     //case true
        console.log("KA") 
        break 
    case (city == "jaipur" || city == "Jaipur")  :              //case false
        console.log("RJ") 
        break 
    default:
        console.log("enter proper city name..") 
              
}

//------------------------------------------------------------------
let x=100
let y=20
isFlag=true
switch(isFlag){
    case (x>y):
        console.log("x is greater")
        break
    case (y>x):
        console.log("y is greater")  
        break
    default:
        console.log("both are equal")          
}

//------------------------------------------------------------------
let a=300
let b=300
let c=300
isFlag=true
switch(isFlag){
    case(a>b && a>c):
        console.log("a is greater")
        break
    case(b>a && b>c):
        console.log("b is greater")
        break 
    case(c>a && c>b):
        console.log("c is greater")
        break 
    default :
        console.log("either all or bigger 2 are equal...")          
}
