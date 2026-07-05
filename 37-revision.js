// //destructuring  (unpacking values from arrays or objects into variables)
// // Destructuring is a JavaScript feature that allows you to extract values from 
// // arrays or objects and store them into variables in a clean and readable way.
// // Instead of accessing values one by one, destructuring lets you do it in a single line.

// let arr = [11, 22, 33, 44]

// let q1 = arr[0]
// let q2 = arr[1]

// let [a, b, c, d] = arr

// console.log(a)
// console.log(b)

// let map1 = new Map([
//     [1, 'a'],
//     [2, "b"],
//     [3, "c"]
// ])

// for (let [k, v] of map1) {
//     console.log(k, v)
// }

// //---------------------------------------------------
// let info = {
//     firstName: "neel",
//     lastName: "chawde",
//     age: 10,
//     class: 4
// }

// // let {firstName,lastName} = info 
// // console.log(info.firstName)
// // console.log(firstName)

// // let {firstName : fn, class : cl, age : ag} = info
// // console.log(fn)
// // console.log(cl)
// // console.log(ag)

// let info2 = {
//     firstName: "neel",
//     lastName: "chawde",
//     age: 10,
//     class: 4,
//     parents: {
//         mother: "dipanshu",
//         father: "nitin"

//     },
//     marks: [11, 22, 33, 44]
// }

// let { firstName: fn, lastName: ln, parents: { mother: mom, father: dad }, marks: [x, y, z] } = info2
// console.log(mom)
// console.log(dad)
// console.log(z)

// let info3 = [
//     {firstName: "neel",lastName: "chawde"},
//     {firstName: "dipanshu",lastName: "nitin"}
// ]
// // //   0 1 
// // let [x,y] = info3
// // console.log(y)

// let [{firstName :fn, lastName : ln} ,{firstName : fn2, lastName : ln2}] = info3

// console.log(ln2)

//---------------------------------------------------------------------
//rest, sperad

let arr = [11, 22, 33, 44,55,66,77,88]

let [a,b, ...restArr] = arr 
console.log(a)
console.log(b)
console.log(restArr)


let info = {
    firstName: "neel",
    lastName: "chawde",
    age: 10,
    class: 4
}

let {firstName , lastName , ...rest_info} = info
console.log(firstName)
console.log(rest_info)


let {age:ag , class:cl, ...rest_info1} = info
console.log(rest_info1)
console.log(ag)
console.log(cl)

//--------------------------------------------------
let a1 = [11,22,33,44]
let a2 = ['a','b','c']

let a3 = [...a1, ...a2]
console.log(a3)

let a4 = [...a2, ...a1]
console.log(a4)


//---------------------------------------------------

//-------------------------------------------
let info3 = {
    name :"dipanshu",
    surname : "chawde",
  }

let info4 = {
    location : "mumbai",
    marks : 99
}

let all_info = {...info3, ...info4}
console.log(all_info)

let all_info2 = {info3, info4}
console.log(all_info2)