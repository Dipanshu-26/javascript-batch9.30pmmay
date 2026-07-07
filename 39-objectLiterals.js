// Object Literal (short note)
// An object literal is a simple way to create an object using key–value pairs.
// Functions inside an object are called methods.
// `this` refers to the current object.

//object key value pair 

let dip = {
    fname: "dipanshu",
    lname: "chawde",
    displaName: function () {
        console.log(this.fname + " " + this.lname)
    }
}

console.log(dip.fname)
dip.displaName()

//console.log(dip.displaName())

let adi = {
    fname: "aditya",
    lname: "masalkar",
    displaName: function () {
        console.log(this.fname + " " + this.lname)
    }
}

console.log(adi.fname)
adi.displaName()

//200 ==> 200 objects 
console.log("-----------------------")
//class 

class Person {
    fname = undefined
    lname = undefined
    displaName() {
        console.log(this.fname + " " + this.lname)
    }
}


// A s is a blueprint
// Objects are created from this blueprint
// Method is written once, reused everywhere

// “Methods in classes do NOT use the function keyword.”

//Creating Objects (Instances)
let dip1 = new Person()

let adi1 = new Person()

dip1.fname = "dipanshu"
dip1.lname = "chawde"

adi1.fname = "aditya"
adi1.lname = "masalker"

dip1.displaName()

adi1.displaName()

console.log(dip1.fname)
console.log(adi1.fname)

console.log(dip1.lname)
console.log(adi1.lname)
console.log("-----------------------")
//----------------------------------------------------------
// PART 4: Constructor
// “What if we want values at the time of object creation?”

// class Person {
//     fname = undefined
//     lname = undefined 
//     displaName(){
//         console.log(this.fname + " " +this.lname)
//     }
// }

class PersonB {
    constructor(fn, ln) {
        this.fname = fn
        this.lname = ln
    }
    displaName() {
        console.log(this.fname + " " + this.lname)
    }
}

let d1 = new PersonB("dipanshu","chawde")
let a1 = new PersonB("aditya" , "masalkar")

console.log(d1.fname)
console.log(a1.fname)

d1.displaName()
a1.displaName()