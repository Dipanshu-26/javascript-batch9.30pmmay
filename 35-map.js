//js datatype 
//number
//string 
//boolean

//array
//objects
//map
//set

let a=10
console.log(typeof(a))

a=10.5
console.log(typeof(a))

a="10"
console.log(typeof(a))

a=[10,20]
console.log(typeof(a))

a={marks : 10}
console.log(typeof(a))
//--------------------------------------------------------------

let obj = {
    name : "dipanshu",
    marks : 90,
    10 : true
}
console.log(obj)

//------------------------------------------------------
// In JavaScript, Map is a built-in collection object that stores key-value pairs.
// Unlike a normal object ({}), a Map:
//     - allows any datatype as a key
//     - maintains insertion order
//     - provides useful methods like set(), get(), has(), and delete()

//map 
//key , value 

let map1 = new Map([
    ["fn" , "dipanshu"],
    ["ln" , "chawde"],
    [1, "javascript"],
    [true , "hasVechile"]
])

console.log(map1)
console.log(map1.size)

//CRUD ==> create , retrive , update , delete
//update

//set
map1.set("fn","neel")
map1.set("language" ,"marathi")
console.log(map1)

//------------------------------------

let map2 = new Map()

map2.set("name" ,"rajasi")
map2.set("class" , 5)
map2.set(1,"science")
console.log(map2)

map2.set(1,"maths")
console.log(map2)

map2.set(2,"maths")
map2.set([11,22,33] , "marks")
map2.set({loc:"pune"} , "info")

console.log(map2)

//----------------------------------------------------
//retrive

let q1 = map2.get("name")
console.log(q1)

console.log(map2.get(1))

console.log(map2.get([11,22,33]))
console.log(map2.get({loc:"pune"}))

//--------------------------------------------------------------
let x=[1,2]
let y=[1,2]

console.log(x==y)

console.log(JSON.stringify(x) == JSON.stringify(y))
//-------------------------------------------------------------


