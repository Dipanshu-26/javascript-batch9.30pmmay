// Strings
 
//trim(), trimStart(), trimEnd(), slice(), split()
// repeat(), charAt() , charCodeAt(), replace() , replaceAll(), // join()
// split() 
// padEnd()
    //(method) String.padEnd(maxLength: number, fillString?: string | undefined): string

//padStart()    
//(method) String.padStart(maxLength: number, fillString?: string | undefined): string


//trim()

let city = "  goa   "
console.log(city.trim())
console.log(city)

console.log(city.trimStart())

console.log(city.trimEnd())

// padEnd()
    //(method) String.padEnd(maxLength: number, fillString?: string | undefined): string

//padStart()    
//(method) String.padStart(maxLength: number, fillString?: string | undefined): string

city="pune"

console.log(city.padStart(10,0))
console.log(city.padStart(10,'-'))

console.log(city.padEnd(10,0))
console.log(city.padEnd(10,'-'))

//join ==> array,  conbverts in string
// split ==>string  converts in array

let nm =["aa","bb","cc"]
console.log(nm.join("-"))

let str="i am learning javascript"
let sp_arr = str.split(" ")
console.log(sp_arr)

str="dipanshu@gmail.com"
let arr1 = str.split("@")
console.log(arr1)    //[ 'dipanshu', 'gmail.com' ]
console.log(arr1[1])
console.log(str.split("@")[0])


let str2 = "20/-rs"               //  0     1
console.log(str2.split("/")[0])   //[20, "-rs"]

console.log("---------------------------")
// replace , replaceAll

let str3 = "i an learning javascript and javascript is easy to go language"
console.log(str3.replace("javascript","python"))
console.log(str3.replaceAll("javascript","python"))

console.log("---------------------------")
//method chaining

let fn= "DipAnsHu ChawDE"

console.log(fn.toLowerCase().split(" ")[0])

console.log(fn.toUpperCase().split(" ")[0])

console.log(fn.toLowerCase().split(" ")[1])

console.log(fn.toUpperCase().split(" ")[1])

let name = "dipanshu"

console.log(name.split("").reverse().join(""))
console.log(name.split(""))
console.log(name.split("").reverse())
console.log(name.split("").reverse().join(""))

// [d,i,p,a,n,s,h,u]
// [u,h,s,n,a,p,i,d]
// uhsnapid



let arr = [1,2,3,4,5]
console.log("-------------")
// let strx = "dipanshu nitin chawde"
// console.log(strx.split(" "))

name = "dipanshu"
revstr = ""
for(let i=0;i<name.length;i++){
    revstr=name[i]+revstr               
}
console.log(revstr)

//revstr=name[i]+revstr 
//""
//d+""= d
//i+d = id
//p+id = pid
//a + pid= apid
//n +apid = napid
//s+napid = snapid
//...
//uhsnapid

//nitin
name = "nitin"
revstr = ""
for(let i=0;i<name.length;i++){
    revstr=name[i]+revstr               
}
if(name == revstr){
    console.log("palandrome")
}
else{
    console.log("not palandrome")
}