//rest, spread operator

//spread operator (VERY IMPORTANT)
//“Spread operator is used to spread the elements of an array or object into individual elements.”

let a = [10,20,30,40]
let b=[11,22,33,44]

let c=[...a,...b]
console.log(c)

let info1 = {
    name :"dipanshu",
    surname : "chawde"
}

let info2 = {
    location : "pune",
    marks : 90
}

let all_info = {...info1,...info2}
console.log(all_info)
//-------------------------------------------
let info3 = {
    name :"dipanshu",
    surname : "chawde",
    location : "pune",
    marks : 90
}

let info4 = {
    name :"neel",
    surname : "ch",
    location : "mumbai",
    marks : 99
}

let all_info2 = {...info3,...info4}
console.log(all_info2)

// let obj = {
//     fname : "rajasi",
//     marks : 89,
//     location : 'pune',
//     marks : 77
// }
// console.log(obj)

//---------------------------------------------
// Rest Operator (VERY IMPORTANT)
// “Rest operator is used to collect the remaining elements into an array.” 

let num = [10,20,30,40,50,60,70]
// x=10
// y=[20,30,40,50,60,70]

let [x,...y]=num
console.log(x)
console.log(y)

let [a1,a2,...a3]=num
console.log(a1)
console.log(a2)
console.log(a3)

//------------------------------------
info3 = {
    name :"dipanshu",
    surname : "chawde",
    location : "pune",
    marks : 90
}

// let {name : fn, ...info}=info3
// console.log(fn)
// console.log(info)

let {name : fn, surname : ln,...info}=info3
console.log(fn)
console.log(ln)
console.log(info)

//map, set