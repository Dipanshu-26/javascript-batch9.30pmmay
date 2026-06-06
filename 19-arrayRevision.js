//map 
let byear = [2009, 2022, 2008, 1999, 1990]
let age = []

for (let i = 0; i < byear.length; i++) {
    age.push(2026 - byear[i])
}
console.log(age)

//---------------------------------------

let age2 = byear.map(function (el, index, arr) {
    return 2026 - el
})
console.log(age2)

//---------------------------------------
//filter 
//            0   1   2   3   4  5    6   7  8
let marks = [28, 90, 87, 66, 45, 11, 33, 34, 99]

let passM = []
//               9<9
for (let i = 0; i < marks.length; i++) {    //i=0,1,2,3....8
    if (marks[i] >= 35) {            //marks[0],marks[1]......marks[8]
        passM.push(marks[i])
    }
}
console.log(passM)
let failM=[]
for (let i = 0; i < marks.length; i++) {    //i=0,1,2,3....8
    if (marks[i] < 35) {            //marks[0],marks[1]......marks[8]
        failM.push(marks[i])
    }
}
console.log(failM)

//------------------------------------------------------------------

let passM2 = marks.filter(function(el,index,arr){
    return el>=35
})

console.log(passM2 )

let failM2= marks.filter(function(el,index,arr){
    return el<35
})

console.log(failM)

//------------------------------------------------------------------

//reduce 
let nums = [28, 90, 87, 66, 45, 11, 33, 34, 99]

let total=0
for(let i=0;i<nums.length;i++){
    total=total+nums[i]            //0+28,28+90,118+87
}

console.log(total)

//---------------------------------------------------

let sum=nums.reduce(function(acc,el,index,arr){
    return acc+el                //0+28,28+90,118+87
},0)

console.log(sum)
//---------------------------------------------------

//forEach ==>forloop   ==> Hello ! name , How are you?
let names = ["ram","sham","seeta","geeta"]

for(let i=0;i<names.length;i++){
    console.log(`Hello ! ${names[i]} , How are you?`)
}

//---------------------------------------------------
names.forEach(function(el,index,arr){
    console.log(`Hello ! ${el} , How are you?`)
})

