//includes(), toUpperCase(), toLowerCase(), stratsWith(), endsWith()
//charAt(). charCodeAt()
//trim() , trimStart(), trimEnd()
//padStart(), padEnd()
let a ="diPAshu cHAwde"

//includes()
console.log(a.includes("di"))
console.log(a.includes("diP"))
console.log(a.includes("dip"))
console.log(a.includes("shu"))
console.log(a.includes("u cH"))

console.log(a.toUpperCase())
console.log(a.toLowerCase())

//---------------------------------
//repeat()
let b="neel"
console.log(b.repeat(3))

//------------------------------------------
a="dipanshu chawde"
console.log(a.startsWith("d"))
console.log(a.startsWith("D"))
console.log(a.startsWith("dippp"))

console.log(a.endsWith("de"))
console.log(a.endsWith("dee"))

//------------------------------------------
// 0  1  2  3  4  5  6  7  8  9  10 11 12 13
//"d  i  p  a  n  s  h  u  c  h  a  w  d  e"

//last index=13  (length -1)
//length = 14
a="dipAnshuchawde"

console.log(a.charAt(6))
console.log(a.charAt(10))
console.log(a.charAt(15))


console.log(a.charCodeAt(5))
console.log(a.charCodeAt(3))

//-------------------------------------------

let str="   pune    "
console.log(str)
console.log(str.length)

console.log(str.trim())
console.log(str.trimEnd())
console.log(str.trimStart())

//-------------------------------------------

str = "goa"
console.log(str.padStart(6,0))
console.log(str.padStart(6,'_'))
console.log(str.padStart(10,'*'))

console.log(str.padEnd(10,'*'))

//join , split
//replace() , replaceAll(), // join()
// split() 