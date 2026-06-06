//map(), filter(), reduce(),forEach()


//calculate age
// let byear = [1990,1983,2000,2024,2008]
// let age = []
// for(let i=0;i<byear.length;i++){
//     age.push(2026-byear[i])
// }
// console.log(age)


// map(function(el, index, arr)
// action => performs an operation on each element of the array
// return => new array with modified values

//el == element
//index ==> index of element

let byear = [1990,1983,2000,2024,2008]

let age = byear.map(function(el, index,arr){
            return 2026-el         // 2026-1990, 2026-1983, 2026-2000.... 2026-2008
})

console.log(age)

//----------------------------------------------------------------------------------------

//above 40   
// let marks = [45,67,99,87,23,53,45,12,34,22]
// let above40 = []
// for(let i=0;i<marks.length;i++){
//     if(marks[i]>40){
//         above40.push(marks[i])
//     }
// }
// console.log(above40)


// filter(function(el, index, arr)
// action => filters elements based on a condition (true/false)
// return => new array with matching elements
let marks = [45,67,99,87,23,53,45,12,34,22,40]

let above40 = marks.filter(function(el,index,arr){
    return el>40                   //45,67,99,87,23,53,45,12,34,22
})
console.log(above40)

//below 40

let below40 = marks.filter(function(el){
    return el<=40
})

console.log(below40)

//----------------------------------------------------------------------
// marks = [45,67,99,87,23,53,45,12,34,22,40]

// total = 0
// for(let i=0;i<marks.length;i++){
//     total = total+marks[i]     //0+45 , 45+67, 112+99 ....
// }
// console.log(total)

// reduce(function(acc, el, index, arr), initialValue)
// acc => accumulator (acts as a temporary variable)
// action => reduces all elements to a single value
// return => single value (number / string / object)
marks = [45,67,99,87,23,53,45,12,34,22,40]
let total = marks.reduce(function(acc,el,index,arr){
    return acc+el          ////0+45 , 45+67, 112+99 ....
},0)

console.log(total)
//----------------------------------------------------------------------
marks = [2,4,5,8,2,4,7,1]

mul_res = 1
for(let i=0;i<marks.length;i++){
    mul_res = mul_res*marks[i]     //1*2, 2*4, 8*5, 40* 8....
}
console.log(mul_res)

let mul_res2 = marks.reduce(function(acc,el){
        return acc * el
},1)
console.log(mul_res2)

//----------------------------------------------------------------------

//want to print welcome to cityname Welcome to Pune!!!!

let city=['Pune','Nagpur','Banglore','Delhi','Raipur']

// forEach(function(el, index, arr))
// action => performs an operation on each element of the array
// return => undefined (does NOT create new array)

city.forEach(function(el,index,arr){
    console.log(`Welcome to ${el}`)
})
