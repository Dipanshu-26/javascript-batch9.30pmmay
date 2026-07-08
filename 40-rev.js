//class : blueprint 
// object :instance of class

class Person{
    fname = undefined
    lname = undefined
    displayName(){
        console.log(this.fname + " " + this.lname)     //this object  
    }
}

let s1 = new Person()
s1.fname = "dipanshu"
s1.lname = "chawde"

let s2 = new Person()
s2.fname = "aditya"
s2.lname  = "masalkar"

// let arr = [1,2,3,4,5]
// console.log(arr.length)
// arr.push(100)

console.log(s1.fname)
console.log(s1.lname)
s1.displayName()     //this = s1

s2.displayName()

//constructor 

class PersonB{
    constructor(fn,ln){
        this.fname = fn
        this.lname = ln
    }
    displayName(){
        console.log(this.fname + " " + this.lname)     //this object  
    }
}

let dip = new PersonB("dipanshu","chawde")
console.log(dip.fname)
dip.displayName()

let adi = new PersonB("aditya","masalkar")
console.log(adi.fname)
adi.displayName()