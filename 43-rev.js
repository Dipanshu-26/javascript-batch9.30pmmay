let adi = {
    fname: "aditya",
    lname: "masalkar",
    dob: "02-04-1990",
    displayName: function () {
        console.log(this.fname + " " + this.lname)
    }
}

let dip = {
    fname: "dipanshu",
    lname: "masalkar",
    dob: "01-01-1990",
    displayName: function () {
        console.log(this.fname + " " + this.lname)
    }
}


//100 students == 100 objects

// class Students{
//     fname = undefined
//     lname = undefined
//     dob = undefined
//     displayName(){
//         console.log(this.fname + " " + this.lname)
//     }
// }

// //class : blueprint 
// //object : instance of class

// let s1=new Students()
// s1.fname = "aditya"
// s1.lname = "masalkar"
// s1.dob = "02-02-1990"

// let s2=new Students()
// s2.fname = "dipanshu"
// s2.lname = "chawde"
// s2.dob = "01-01-1990"

// s1.displayName()
// s2.displayName()

// console.log(s1.fname)
// console.log(s2.dob)

//-----------------------------------------------------------------------------------

//constructor

// class Students{
//     constructor(fn,ln,dob){
//         this.fname = fn 
//         this.lname = ln 
//         this.dob = dob
//     }
//     displayName(){
//         console.log(this.fname + " " + this.lname)
//     }
// }

// let s1=new Students("aditya", "masalkar","02-02-1990")
// let s2=new Students("dipanshu","chawde","01-01-1990")

// s1.displayName()
// s2.displayName()
// console.log(s1.dob)
// console.log(s2.dob)

//-----------------------------------------------------------------------------

// class Students{
//     constructor(fn,ln,dob){
//         this.fname = fn 
//         this.lname = ln 
//         this.dob = dob
//     }
//     displayName(){
//         console.log(this.fname + " " + this.lname)
//     }
// }


// class Teachers{
//     constructor(fn,ln,dob,sal){
//         this.fname = fn 
//         this.lname = ln 
//         this.dob = dob
//         this.salary = sal
//     }
//     displayName(){
//         console.log(this.fname + " " + this.lname)
//     }
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let s1=new Students("aditya", "masalkar","02-02-1990")
// let s2=new Teachers("dipanshu","chawde","01-01-1990",10000)

// s1.displayName()
// s2.displayName()
// console.log(s1.dob)
// console.log(s2.salary)
// s2.displaySalary()

//----------------------------------------------------------------------------------
//inheritance 

//single inheretance
//students = parent class


// class Students {
//     constructor(fn, ln, dob) {
//         this.fname = fn
//         this.lname = ln
//         this.dob = dob
//     }
//     displayName() {
//         console.log(this.fname + " " + this.lname)
//     }
// }

// class Teachers extends Students {
//     salary = 10000

//     displaySalary() {
//         console.log(this.salary)
//     }
// }

// let s1 = new Students("aditya", "masalkar", "02-02-1990")
// let t2 = new Teachers("dipanshu", "chawde", "01-01-1990")

// s1.displayName()
// t2.displayName()
// console.log(s1.dob)
// console.log(t2.salary)
// t2.displaySalary()

//s1.displaySalary()
//-------------------------------------------------------------------------------

//both child and parets having constructor
class Students {
    constructor(fn, ln, dob) {
        this.fname = fn
        this.lname = ln
        this.dob = dob
    }
    displayName() {
        console.log(this.fname + " " + this.lname)
    }
}


class Teachers extends Students {
    constructor(fn, ln, dob, sal) {
        super(fn, ln, dob)
        this.salary = sal
    }
    displaySalary() {
        console.log(this.salary)
    }
}


let s1 = new Students("aditya", "masalkar", "02-02-1990")
let t2 = new Teachers("dipanshu", "chawde", "01-01-1990",50000)

s1.displayName()
t2.displayName()
console.log(s1.dob)
console.log(t2.salary)

console.log(s1.fname)
console.log(t2.fname)