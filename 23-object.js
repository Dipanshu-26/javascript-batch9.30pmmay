//arrays 
//strings
//map
//tuple
//set

//object 

let arr = ["dipanshu","chawde",23,34,"abc"]
arr.pop()
arr.push(111)
arr.shift()
arr.unshift("aaa")
console.log(arr)
//----------------------------------------------------------

//objects = key: value pair 

let info = {
    fname : "neel",
    lname : "chawde",
    age : 10,
    rno : 23,
    marks : [23,45,67,99],
    ispass : true
}

console.log(info)

//CRUD
//methods

//[1,2,3,4,5]
//[{},{},{},{},1,[],()]

//CRUD --> create, retrive, update, delete

//retrive
//dot notation
console.log(info.fname)
console.log(info.marks)
console.log(info.marks[1])    //marks : [23,45,67,99]

let marks = [1,2,3,4]
console.log(marks[2])

//bracket natation
console.log(info['fname'])
console.log(info['marks'])
console.log(info['marks'][1])

//update 
info.rno = 30
console.log(info)

info['fname'] = 'tanish'
console.log(info)

info.language = 'marathi'
console.log(info)

info['language'] = 'english'
console.log(info)

//delete
delete info.fname
console.log(info)

delete info['language']
console.log(info)

//loops

for(let el in info){
    // console.log(el)   //keys
    // console.log(info[el])     //values
    console.log(`${el} : ${info[el]}`)
}

//console.log(info.length)


// marks : [23,45,67,99],

for(let i=0;i<info.marks.length;i++){
    console.log(info.marks[i])
}

//change marks 23 to 75

info.marks[0]=75
console.log(info)

info.marks.pop()
console.log(info)

//---------------------------------------------------------------------

let car = {
    color : "silver",
    model : "sedan",
    Number: 1234,
    color : 'black'
}
console.log(car)

//array of objects 