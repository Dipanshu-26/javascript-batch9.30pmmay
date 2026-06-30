//destructuring  (unpacking values from arrays or objects into variables)
// Destructuring is a JavaScript feature that allows you to extract values from 
// arrays or objects and store them into variables in a clean and readable way.
// Instead of accessing values one by one, destructuring lets you do it in a single line.

//program 1
let names = ['dipanshu','nitin','neel','tanish']

// let n1 = names[0]
// console.log(n1)

// let n2 = names[1]
// let n3 = names[2]
// let n4 = names[3]
// console.log(n2)
// console.log(n3)
// console.log(n4)


//destructuring  (unpacking values from arrays or objects into variables)

let [a1,a2,a3] = names
console.log(a1)
console.log(a2)
console.log(a3)

// let [a1,a2,a3,a4,a5] = names
// console.log(a5)

//destructuring  (unpacking values from arrays or objects into variables)

let info = {
    firstName : "sajal",
    lastName : "chawde"
}

// let {firstName,lastName} = info
// console.log(firstName)
// console.log(lastName)

// let {firstName : fn , lastName : ln} = info
// console.log(fn)
// console.log(ln)

//---------------------------------------------------------------------------------

// let obj = {
//     k1:"a",
//     k2 : 123,
//     k3 : [1,2,3,4],
//     k4 : {fn : "dipanshu"}
//  }


let info2 = {
    firstName : "akay",
    lastName : "masalkar",
    age : 2,
    parents : {
        mother : "shivani",
        father : "aditya"
    }
}

// let {firstName : fn1 , lastName : ln1, parents : {mother,father}} = info2
// console.log(fn1)
// console.log(ln1)
// console.log(mother)
// console.log(father)

console.log("----------------")
// let {firstName : fn1 , lastName : ln1, parents : {mother : mom ,father : dad }} = info2
// console.log(fn1)
// console.log(ln1)
// console.log(mom)
// console.log(dad)

let {firstName , lastName , parents : {mother  ,father }} = info2

console.log(firstName)
console.log(lastName)
console.log(mother)
console.log(father)

console.log(info2.firstName)

