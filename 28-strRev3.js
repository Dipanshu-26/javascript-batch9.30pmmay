//join() , split(), replace() , replaceAll() 

//join() : array to string
let arr = ["dipanshu","nitin","chawde"]
let arrs = arr.join("-")
console.log(arrs)
console.log(typeof(arrs))

console.log(arr.join(""))

//---------------------------------------------------
//split() : string to array
let str = "dipanshu"
console.log(str.split(""))

str = "dipanshu nitin chawde"
stra = str.split(" ")
console.log(stra)
console.log(typeof(stra))
console.log(stra[0])

console.log(str.split(" ")[1])

//--------------------------------------------------

let price  = "20/-kg"
let q1 = price.split("/")
console.log(q1[0])

//----------------------------------------------------------
//replace()  : first matching replace
let str1 = "i am learning javascript and javascript is easy to go language"

let str2 = str1.replace("javascript","python")
console.log(str2)

//replaceAll()

let q2 = str1.replaceAll("javascript","python")
console.log(q2)

//---------------------------------------------------------------------

//repeat()
str = "dipanshu nitin chawde"
console.log(str.repeat(3))

//---------------------------------------------------------------------
//print string in reverse 

let s1="dipanshu"
console.log(s1.split("").reverse().join(""))

console.log(s1.split(""))
console.log(s1.split("").reverse())
console.log(s1.split("").reverse().join(""))

//-------------------------------------------------------------------------
s1="nitindg"
let rev_str = ""
for(let i=0;i<s1.length;i++){      //npid
    rev_str = s1[i]+rev_str
}
console.log(rev_str)

// s1[i]+rev_str
//d
//i+d ==>id
//p+id ==> pid
//a + pid ==>apid
//----------------------------------------------

//nitin

if(s1==rev_str){
    console.log("palandrome")
}
else{
    console.log("not palandrome")
}
//