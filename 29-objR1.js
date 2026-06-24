//objects in js 

let arr =["dipanshu","chawde",23, 34]

console.log(arr[0])
arr[0]="neel"
console.log(arr)
arr.push(11)
arr.pop()
arr.unshift("tanish")
arr.shift()
console.log(arr)
//----------------------------------------------

//objects ==> key : value 
let info = {
    firstName : "neel",
    lastName: "chawde",
    age : 10,
    rollNo : 23
}

console.log(info)

//CRUD 
//retrive

//dot notataion 
console.log(info.firstName)
console.log(info.age)


//bracket notation
console.log(info["firstName"])
console.log(info['rollNo'])

//update 

info.firstName="tanish"
console.log(info)

info['age'] = 18
console.log(info)

info.language = "marathi"
console.log(info)

info['language'] = "english"
console.log(info)

//delete

delete info.age
console.log(info)

delete info['rollNo']
console.log(info)

console.log(arr.length)
//console.log(info.length)    //undefined

for(let key in info){
    // console.log(key)
    // //console.log(info.key)
    // console.log(info[key])
    console.log(`${key} : ${info[key]}`)
}

// [{},{},{},[],true,11,"abc"]