// class Student{
//    constructor(fn,ln,dob){
//     this.fname = fn
//     this.lname=ln
//     this.dob = dob
//    }
//     displayName(){
//         console.log(this.fname + " " + this.lname)
//     }
// }

// class Teacher{
//     constructor(fn,ln,dob,sal){
//     this.fname = fn
//     this.lname=ln
//     this.dob = dob
//     this.salary=sal
//    }
//     displayName(){
//         console.log(this.fname + " " + this.lname)
//     }
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// //
// s1 = new Student("aditya", "masalkar","02-04-1990")
// t1 = new Teacher("dipanshu","Chawde","01-01-90",10000)

//-------------------------------------------------------------------
//oops concepts 
// “Inheritance allows one class to reuse properties and methods of another class.”
// Parent class → Student
// Child class → Teacher

//only parent class is having constructior
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

// class Teacher extends Students {
//     salary = 10000
//     displaySalary() {
//         console.log(this.salary)
//     }
// }

// s1 = new Students("aditya","masalkar","01-01-90")
// t1= new Teacher("dipanshu","chawde","02-02-89")

// s1.displayName()
// t1.displayName()
// //s1.displaySalary()
// t1.displaySalary()

//----------------------------------------------------------------------------
//both parent and child class is having constructor

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

class Teacher extends Students {
    constructor(fn, ln, dob, sal) {
        super(fn, ln, dob)
        this.salary = sal
    }
    displaySalary() {
        console.log(this.salary)
    }
}

s1 = new Students("aditya","masalkar","01-01-90")
t1= new Teacher("dipanshu","chawde","02-02-89",50000)

s1.displayName()
t1.displayName()
//s1.displaySalary()
t1.displaySalary()


// super() (VERY IMPORTANT)
// “super() is used to call the parent constructor.”

// Rules:
// super() must be called before this
// Without super(), JavaScript throws an error
// super() passes data to parent

//Child object can access both parent and child methods.

// Teacher constructor
//         ↓
//       super()
//         ↓
// Student constructor