//Array of objects and array methods on it(imporatnt for testing)
let students = [
    {
        firstName: "jaya",
        lastName: "kumari",
        age: 25,
        city: "nashik",
        skills: ["java", "python"],
        marks: 50
    },
    {
        firstName: "Vishal",
        lastName: "Raut",
        age: 30,
        city: "Pune",
        skills: ["js", "salesforce", "cypress"],
        marks: 100
    },
    {
        firstName: "Sathish",
        lastName: "kumar",
        age: 45,
        city: "nashik",
        skills: ["katlon", "selenium", "react", "python"],
        marks: 35
    },
    {
        firstName: "teja",
        lastName: "kulkarni",
        age: 23,
        city: "Sangamner",
        skills: ["katlon"],
        marks: 45
    },
    {
        firstName: "rama",
        lastName: "kant",
        age: 30,
        city: "nagpur",
        skills: ["python", 'javascript'],
        marks: 23
    }

]

console.log(students.length)
console.log(students[1])

console.log(students[4].firstName)
console.log(students[4].city)

console.log(students[4].skills)
console.log(students[4].skills[0])
console.log(students[4].skills[1])

console.log(students[2].skills[1])

//----------------------------------------------------------------------
console.log("----------------------------------")

//get addition of marks of each students 
//map, reduce,filter,forEach, some, every,find,findIndex

console.log(students[0].marks)

let sumM =students.reduce(function(acc,el){
    return acc + el.marks
},0)

console.log(sumM)

//----------------------------------------------------------------------
console.log("----------------------------------")
//find students having marks > 35

let marksP = students.filter(function(el){
    return el.marks > 35
})

console.log(marksP)

console.log("----------------------------------")
//find students having marks <= 35

let marksF = students.filter(function(el){
    return el.marks <= 35
})

console.log(marksF)

console.log("----------------------------------")
//want to increase marks of students 10 marks grace for fail students 

// students.filter(function(el){
//     return el.marks <= 35
// }).forEach(function(el){
//     el.marks=el.marks+10
//     //console.log(el)
// })

// console.log(students)

//------------------------------------------------------------------
//name of students who are fail after giving grace

students.filter(function(el){
    return el.marks <= 35
}).forEach(function(el){
    el.marks=el.marks+10
    //console.log(el)
    if(el.marks <35){
        console.log(el.firstName)
    }
})
