let vech = {
    type : "sedan",
    color : "black",
    number : 123456,
    color : "silver"
}
console.log(vech)

//----------------------------------------------

let info = {
    fname : "neel",
    lname : "chawde",
    class : 4,
    div : "A",
    subjects : ["maths","english","science","computer"],
    marks : [78,89,76,56],
    isPass : true
}

console.log(info)

console.log(info.fname)

console.log(info['lname'])

console.log(info.div)

console.log(info.marks)

console.log(info.subjects)

console.log(info.subjects[0])

console.log(info.marks[2])

//---------------------------------------
for(let ks in info){
    console.log(ks + ' : ' + info[ks] )
}

//----------------------------------------
console.log(Object.keys(info))
console.log(typeof(Object.keys(info)))

//--------------------------------
console.log(Object.values(info))

//--------------------------------------
console.log(Object.entries(info))

//--------------------------------------------

let q1 = info.hasOwnProperty("fname")
console.log(q1)


q1 = info.hasOwnProperty("lanhuage")
console.log(q1)

// [{},{},{},{}]