//array in JS
//An array is a list used to store multiple values in a single variable.
//values of array accessed through index  (starts from 0)

let a =10 
let b = "abc"
a=20

//marks 
//arrays 

//            0   1  2  3  4  5  6 7
let marks  = [23,56,89,90,99,84,65,43]
console.log(marks)
console.log(marks[0])
console.log(marks[4])

//lentngth of array

console.log(marks.length)

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(marks))


//java script is dynamically typed language

//object 
//prperties 
//methods


// person 
// prperties == name, height, weight, ...
// methods == walk() , talk()
// method ==> action   
//           return 
// walk()  ==> 

//             0            1          2          3
let arr1 = ["javascript","python","playwright","sql"]

console.log(arr1[2])

console.log(arr1)

//              0         1  2   3      4       5
let arr2 = ["dipanshu", 33, 78, true,[12,23],undefined]

console.log(arr2)
console.log(arr2.length)

console.log(arr2[4])

//CRUD 
//create , retrive , update , delete

//update 
arr2[0]="neel"
console.log(arr2)

//------------------------------------------------------------
//create 
let cities = ["nagpur","pune","mumbai","nashik","nagar"]
//                0      1       2        3        4

//retrive
console.log(cities)
console.log(cities[0])
console.log(cities[1])

//update 
cities[0] = "delhi"
console.log(cities)

//---------------------------------------------
// let a1 =[]
// console.log(a1)
// a1[0]=11
// a1[1]=22
// console.log(a1)

//------------------------------------------------
cities = ["nagpur","pune","mumbai","nashik","nagar"]
//           0      1       2        3        4

for(let i=0;i<=4;i++){
    //console.log(i)    //0,1,2,3,4
    console.log(cities[i])     //cities[0]  , cities[1]  ,cities[2] ,cities[3],cities[4]
}


let nums = [11,22,33,44,55,66,77,88,99,0,1,23,14]
// nums.length 
//nums.length -1 

for(let i=0;i<=nums.length-1;i++){
    console.log(nums[i])
}

console.log("------------------")
for(let i=0;i<nums.length;i++){
    console.log(nums[i])
}

// i<8   stop 7 
// i<=8   8 