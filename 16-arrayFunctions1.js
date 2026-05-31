//array

// array functions
// push(arg), unshift(arg),pop(), shift(), 
// reverse(),join(arg),concat(arg), flat()
// includes(arg), indexOf(arg-el),at(arg-index), 


//              0        1      2       3        4       5
let names = ["virat","dhoni","sachin","rohit","sourav","ravi"]

// length==>  6
// last index  === > length -1

console.log(names.length)
console.log(names)

console.log(names[0])

for(let x=0; x<names.length;x++){
    console.log(names[x])
}

let i=0
while(i<names.length){
    console.log(names[i])
    i++
}

//in js everything is object 
//object ==> prperties , methods 

//methods ==> action , return 

//person ==> 
//properties==> name,height, weight...
//methods==> walk(),talk(),gym()
//walk()  ==> walking , return reaching to other place 


console.log("---------------------------------------")
//---------------------------------------------------
// push()
// action - add the element to end of array
// return - new length  of array

//              0        1      2       3        4       5
//let names = ["virat","dhoni","sachin","rohit","sourav","ravi"]

let q1 = names.push("gill")
console.log(names)
console.log(q1)

console.log("---------------------------------------")
//---------------------------------------------------
// unshift()
// action - add the element at 0th index of array
// return - new length  of array 

let q2= names.unshift("akash")
console.log(names)
console.log(q2)

console.log("---------------------------------------")
//---------------------------------------------------

// pop()
// action - remove the last element
// return -- returns the deleted element

let q3=names.pop()
console.log(names)
console.log(q3)

console.log("---------------------------------------")
//---------------------------------------------------
//shift()
// action - remove the first element
// return -- returns the deleted element

let q4=names.shift()
console.log(names)
console.log(q4)


console.log("---------------------------------------")
//---------------------------------------------------
//reverse()
let nums = [11,22,33,44,55,66,77,88]
console.log(nums)

nums.reverse()
console.log(nums)

console.log("---------------------------------------")
//---------------------------------------------------
//concat()
let a=[1,2,3]
let b=['a','b','c']

console.log(a)
console.log(b)

let q5=a.concat(b)
console.log(q5)            // [ 1, 2, 3, 'a', 'b', 'c' ]
console.log(a)
console.log(b)

// [ 1, 2, 3 ]
// [ 'a', 'b', 'c' ]
// [ 1, 2, 3, 'a', 'b', 'c' ]
// [ 1, 2, 3 ]
// [ 'a', 'b', 'c' ]


let q6=b.concat(a)
console.log(q6)           //[ 'a', 'b', 'c', 1, 2, 3 ]
console.log(a)
console.log(b)

console.log("---------------------------------------")
//---------------------------------------------------
//join()==> converts array in strings

let str = "dipanshu nitin chawde"
let arr=["dipanshu","nitin","chawde"]

let q7= arr.join(" - ")
console.log(q7)
console.log(typeof(q7))

arr=[11,22,33,44]

q7= arr.join(" - ")
console.log(q7)
console.log(typeof(q7))

console.log("---------------------------------------")
//---------------------------------------------------

//        00 ,01 , 10, 11, 20,21 
//           0       1       2
let arr1=[[11,22],[33,44],[55,66]]
console.log(arr1[0])
console.log(arr1[0][0])
console.log(arr1[0][1])
console.log(arr1[2][0])

console.log("---------------------------------------")
//---------------------------------------------------

let q8= arr1.flat()
console.log(q8)
console.log(arr1)

// includes(arg), indexOf(arg-el),at(arg-index) 