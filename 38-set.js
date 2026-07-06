//set 

//set stores unique values

let arr=[11,22,33,44,11,22,33]
let arr2 =[]
console.log(arr2)

//CRUD

//define

let s1 = new Set()

console.log(s1)
console.log(typeof(s1))

//add 
s1.add(1)
s1.add(2)
s1.add("dip")
s1.add(true)
s1.add("dip")

console.log(s1)

let s2 = new Set([1,2,3,4,5,1,2,3,4])
console.log(s2)

let arr3 = [1,2,3,4,5,1,2,3,4]
console.log(arr3)


//Set Methods -------------------------------------------

// add() ==>	Add value
// delete()	=> Remove value
// has() =>	Check value exists
// clear()	=> Remove all
// size	Count total values

console.log(s2.size)

console.log(s2.has(2))

console.log(s1.has("dip"))

console.log(s2.has(7))

console.log(s1.has("dipa"))

s1.add([11,22,33])     //stored with reference 
console.log(s1)

console.log(s1.has([11,22,33]))

let x=['a','b']

s1.add(x)
console.log(s1)

console.log(s1.has(x))

//delete 
s1.delete("dip")
console.log(s1)
s1.delete(1)
console.log(s1)

//loops
let st = new Set(["dipanshu","rucha","aditya","shivani"])

for(let el of st){
    console.log(el)
}

st.forEach(function(el){
    console.log(el)
})

//-----------------------------------------------------

for(let [a,b,c] of st){               
    console.log(a,b,c)
}

// iteration 1 = >(el1) "dipanshu" ==>  [a,b,c] 
// iteration 2 = >(el2) "rucha" ==>  [a,b,c] [r,u,c]

//----------------------------------------------------------

let a1 = ["rahul","neel","neha","raj","rahul","neha"]

let unique_st = new Set(a1)

console.log(typeof(unique_st))

console.log("------------")
let a2 = new Array(unique_st)
console.log(a2)

let a3 = [...unique_st]
console.log(a3)


//----------------------------------------------------------------

let ar1 = [1,2,3,4,5,1,2,7,8,9,4,5]
console.log(ar1)

let st1 = new Set(ar1)
console.log(st1)
//Set(8) { 1, 2, 3, 4, 5, 7, 8, 9 }
let ar2 = [...st1]
console.log(ar2)

let ar3 = Array.from(st1)
console.log(ar3)

console.log('--------------------')
let ar4 = Array.from(new Set(ar1))
console.log(ar4)

//-------------------------------------------------
//remove duplicates from ar1 
ar1 = [1,2,3,4,5,1,2,7,8,9,4,5]
console.log(ar1)
ar1 =Array.from(new Set(ar1))
console.log(ar1)