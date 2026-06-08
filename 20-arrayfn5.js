//map(),reduce(),filter(),forEach()
//some(),every(),find(),findIndex()

// some()
// some(function(el, index, arr)
// action => checks if at least one element satisfies the condition
// return => true if any element matches, otherwise false

let nums = [45,78,98,43,20,11,3,69,99]

let q1 = nums.some(function(el,index,arr){
    //return el>40
    return el>200
})

console.log(q1)

//every 
// every(function(el, index, arr)
// action => checks if all elements satisfy the condition
// return => true if all elements match, otherwise false
let q2 = nums.every(function(el,index,arr){
    //return el>40
    return el > 2
})
console.log(q2)

//find 
// find(function(el, index, arr)
// action => finds the first element that satisfies the condition
// return => element (if not found, returns undefined)
nums = [45,78,98,43,20,11,3,69,99]

let q3 = nums.find(function(el,idx,ar){
    //return el>90
    return el <20 
})
console.log(q3)


let q4 = nums.findIndex(function(el,id,a){
    return el <20 
})
console.log(q4)

console.log("---------------------------")
//--------------------------------------------------------------------------------------------------
// some() , every(), find(),findIndex()

let marks = [90,40,78,23,11,56,99,34]

let a1 = marks.some(function(el){            //el = 90,4,78,23,11,56,99,34
    return el < 20
})
console.log(a1)

let a2 =  marks.every(function(el){
    //return el < 20
    return el<100
})
console.log(a2)

let a3  = marks.find(function(el){
    return el<20
})

console.log(a3)

let a4  = marks.findIndex(function(el){
    return el<20
})

console.log(a4)

// some()
// some(function(el, index, arr)
// action => checks if at least one element satisfies the condition
// return => true if any element matches, otherwise false