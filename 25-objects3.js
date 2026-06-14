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

console.log(students[0])

console.log(students[0].firstName)
console.log(students[0]['firstName'])

console.log(students[0].skills)
console.log(students[0].skills[0])
console.log(students[0].skills[1])

console.log(students[2])

console.log(students[2].firstName)
console.log(students[2]['firstName'])

console.log(students[2].skills)
console.log(students[2].skills[0])
console.log(students[2].skills[1])

//----------------------------------------------------------------------
console.log("----------------------------------")

//get addition of marks of each students 
//students[el].marks

//reduce 

let totalM = students.reduce(function(acc,el,index,arr){
    return acc + el.marks                               // 0 ,1,2 ,3 //students[0].marks
},0)
acc = 0, el= 0
//0 + students[0].marks     0+50
//50 + students[1].marks   50+100
console.log(totalM)

//----------------------------------------------------------------------
console.log("----------------------------------")
//find students having marks > 35

let passM = students.filter(function(el){
    return el.marks >35
})
console.log(passM)

console.log("----------------------------------")
//find students having marks <= 35

let failM = students.filter(function(el){
    return el.marks <=35
})
console.log(failM)

console.log("----------------------------------")
//want to increase marks of students 10 marks grace for fail students 

//method chaining

// [   // input for forEach
//   {
//     firstName: 'Sathish',
//     lastName: 'kumar',
//     age: 45,
//     city: 'nashik',
//     skills: [ 'katlon', 'selenium', 'react', 'python' ],
//     marks: 35
//   },
//   {
//     firstName: 'rama',
//     lastName: 'kant',
//     age: 30,
//     city: 'nagpur',
//     skills: [ 'python', 'javascript' ],
//     marks: 23
//   }
// ]

// students.filter(function(el){
//     return el.marks <=35
// }).forEach(function(el){
//     el.marks = el.marks+10
//     //console.log(el)
// })

// console.log(students)

//------------------------------------------------------------------
//name of students who are fail after giving grace

students.filter(function(el){
    return el.marks <=35
}).forEach(function(el){
    el.marks = el.marks+10
    //console.log(el)
    if(el.marks <35){
        console.log(el.firstName)
    }
})

