let info = {
    name : "neel",
    surname  : "chawde",
    age : 10,
    rollno : 33,
    location : "pune",
    subjects : ["maths","english","science","IDP","marathi"],
    isPass : true
}

console.log(info)

console.log(info.name)
console.log(info['surname'])

console.log(info.subjects)

console.log(info.subjects[1])
console.log(info.subjects.length)

info.rollno =35

info['age'] =11
info.language="marathi"
info.language="hindi"
console.log(info)

//loops

for(let k in info){
    console.log(k)
    console.log(info[k])
}

//--------------------------------------------------------
console.log("-----------------")
console.log(Object.keys(info))
console.log("-----------------")
console.log(Object.values(info))
console.log("-----------------")
console.log(Object.entries(info))
console.log("-----------------")

let q1 = info.hasOwnProperty('name')
console.log(q1)

//--------------------------------------------------------
