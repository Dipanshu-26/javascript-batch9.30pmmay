//comparision , logical operator

//==,!=,>=,>,<,<=
//=== , !==
//and && , or ||, not !

console.log(4 == 4)
console.log(4!=4)

console.log(7>3)
console.log(7>7)

console.log(7>=3)

console.log(7<4)
console.log(7<=4)

//===,!==

let a= 2 
let b="2"
console.log(typeof(a))
console.log(typeof(b))

console.log(a==b)
console.log(a===b)         //value and datatype are same 

console.log("dip" === "dip")
console.log("dip" !== "dip")

console.log(a !== b)     //value and datatype are not same

//logical 
// and &&  : true if all inputs are true false when any of input is false 
// T T = T 
// T F = F 
// F T = F 
// F F = F

console.log( 3<4 && 3>2)
console.log( 3>4 && 3>2)
console.log( 3>4 && 3<2)
console.log( 3>4 && 3>2)
console.log( 3>4 && 3<2)

// or ||  : true if any of input is true false when all of inputs are false 
// ip1 ip2 = op
// T    T  = T 
// T    F  = T 
// F    T  = T 
// F    F  = F

console.log( 3<4 || 3>2)
console.log( 3>4 || 3>2)
console.log( 3<4 || 3<2)
console.log( 3>4 || 3<2)

// not !
//true == false 
//false == true

console.log(!(7>6))
//         not true

console.log(!(7<6))
//       not false 

console.log(!("4" == 4  && 4 > 3))
//     not     true    and true 
//   not     true 

console.log(!("4" === 4  && 4 > 3))
//     not     false    and true 
//   not     false  


console.log(!("4" === 4  || 4 > 3))
//     not     false    or  true 
//   not     true