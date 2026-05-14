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
city = "nashik"
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
