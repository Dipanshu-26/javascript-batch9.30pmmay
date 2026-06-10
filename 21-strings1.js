
let a ="dipanshu chawde"

console.log(a)
console.log(typeof(a))

let b=[]
console.log(b)
console.log(typeof(b))

let c=""
console.log(c)
console.log(typeof(c))

//-------------------------------------------------------

let fname = "dipanshu"
let mname = "nitin"
let lname = "chawde"

//string interpolation
console.log(`My firstname is ${fname}, my middle name is ${mname}, my surname is ${lname}...`)

console.log(`My firstname is ${fname}, my middle name is ${mname}, my middle name is${lname}...`)

//string concatination
console.log("My firstname is "+fname+", my middle name is "+mname+", my middle name is"+lname+"...")

//-------------------------------------------------------

let city = "ahilyanagar"

// 0   1   2   3   4   5   6   7   8   9   10
// a   h   i   l   y   a   n   a   g   a   r

console.log(city[0])
console.log(city[5])

console.log(city.length)

console.log("--------------")
//--------------------------------------------------------------

let x= 10
let y = "dip"
let z = 11
let j="abc"
//concat ==>+

console.log(x+z)
console.log(x+y)
console.log(y+x)
console.log(y+j)

// string + string =======> string 
// number + string =======> string 
// string + number =======> string 
// number + number =======> number

console.log(typeof(y+x))

//loops 
city = "ahilyanagar"

for(let i=0;i<city.length;i++){
    console.log(city[i])
}

let a1 = 0
while(a1<city.length){
     console.log(city[a1])
     a1++
}

//----------------------------------
//toUpperCase()
let nm = "DipAnshU ChAwdE"
let q1 = nm.toUpperCase()
console.log(q1)
console.log(nm)

//toLowerCase()
console.log(nm.toLowerCase())

//----------------------------------
//includes()
a ="dipanshu chawde"

console.log(a.includes("dip"))
console.log(a.includes("Dip"))
console.log(a.includes("d ip"))
console.log(a.includes("cha"))
console.log(a.includes(" cha"))
console.log(a.includes("shu cha"))

//------------------------------------------
//indexOf

console.log(a.indexOf("d"))
console.log(a.indexOf("c"))
console.log(a.indexOf(" "))
console.log(a.indexOf("z"))

//----------------------------------------------
//repeat()
let n="aditya"
console.log(n.repeat(3))

//----------------------------------------------
//startswith()
a ="dipanshu chawde"

console.log(a.startsWith("d"))
console.log(a.startsWith("D"))

console.log(a.startsWith("dip"))
console.log(a.startsWith("din"))

console.log(a.endsWith("e"))
console.log(a.endsWith("de"))
console.log(a.endsWith("awde"))
console.log(a.endsWith("awdez"))

//----------------------------------------------
//charAt(), charCodeAt()

city = "ahilyAnagar"

// 0   1   2   3   4   5   6   7   8   9   10
// a   h   i   l   y   a   n   a   g   a   r

console.log(city.charAt(5))
console.log(city.charAt(8))

console.log(city.charCodeAt(5))
console.log(city.charCodeAt(8))