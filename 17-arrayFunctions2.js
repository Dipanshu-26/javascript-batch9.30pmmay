//indexOf()


//indexOf()
//action=>finds index of char in array 
//retuen=> index, if not present return -1  

//           0  1  2  3  4  5
let nums = [11,22,33,44,55,66]
//         -6  -5 -4  -3 -2 -1

console.log(nums.indexOf(44))

console.log(nums.indexOf(99))

// at()
// action => returns the element at the given index in an array
// return => element value, if index is invalid returns undefined

console.log(nums.at(5))
console.log(nums.at(6))

console.log(nums.at(-1))
console.log(nums.at(-5))

console.log(nums.at(-7))


console.log("-----------------------------------------")
// slice()
// syntax => slice(startIndex,EndIndex(not included))
// action => extracts a portion of the array from startIndex to before endIndex
// return => a new array (sliced elements)    



//              0        1         2        3          4         5
let city2 = ["pune","mumbai","banglore","chennai","kolkata","mysore"]
//              -6        -5      -4        -3         -2         -1

let q1 = city2.slice(0,3)
console.log(q1)

q1 = city2.slice(1,5)
console.log(q1)

q1 = city2.slice(4,1)
console.log(q1)

q1 = city2.slice(-5,-1)
console.log(q1)


q1 = city2.slice(1,-1)
console.log(q1)

q1 = city2.slice(-1,-5)
console.log(q1)

q1 = city2.slice(-5,-1)
console.log(q1)


q1 = city2.slice(2,-3)
console.log(q1)

q1 = city2.slice(2,-4)
console.log(q1)

//-------------------------------------------------------------------------------

// splice()
// syntax => splice(startIndex, deleteCount, item1, item2, ...)
// action => removes elements from the array starting at startIndex and optionally inserts new elements
// return => array of deleted elements (original array gets updated)

//               from where   how many              replace by 1,2,3....
//animals.splice(index,numberOfElmentstoBeDeleted,rep1,rep2)
//               0        1      2        3       4        5
let animals = ["tiger","lion","wolf",'camel',"rabbit","snake"]

//lion","wolf"
// let q2 = animals.splice(1,2)
// console.log(q2)       //[ 'lion', 'wolf' ]
// console.log(animals)  //[ 'tiger', 'camel', 'rabbit', 'snake' ]

//-----------------------------------------------------------------
//"lion","wolf",'camel' ==> replace with peacock
// let q2 = animals.splice(1,3,'peacock')
// console.log(q2)       
// console.log(animals)

// //----------------------------------------------------------------
// let q2 = animals.splice(1,4)
// console.log(q2)       
// console.log(animals)

// //----------------------------------------------------------------
// let q2 = animals.splice(1,4,'aa','bb','cc','dd','ee')
// console.log(q2)       
// console.log(animals)

//----------------------------------------------------------------
let q2 = animals.splice(1,2,'aa','bb','cc','dd','ee')
console.log(q2)       
console.log(animals)

//-----------------------------------------------------------------

//fill()


// fill()
// syntax => fill(value, startIndex?, endIndex?)  // endIndex not included
// action => fills array elements with the given value from startIndex to before endIndex
// return => updates the existing array

//           0  1  2  3  4  5
let num2 = [11,22,33,44,55,66]

num2.fill('abc',2,5)
console.log(num2)


let aa = ['a','b','c','d','e']
aa.fill(undefined, 1,3)
console.log(aa)

//------------------------------------------------------------------

// sort()
// action => sorts the array elements (alphabetically by default, ascending order)
// return => updates the existing array

let country = ["india","srilanka","bangladesh","japan"]
console.log(country.sort())
console.log(country)

let num3=[88,99,55,77,33,11,0,7,4]
num3.sort()
console.log(num3)
