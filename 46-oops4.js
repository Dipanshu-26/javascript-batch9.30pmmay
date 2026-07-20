// OOPs Concepts in JavaScript

// JavaScript supports OOP using:
//     class
//     constructor
//     extends
//     super
//     getters/setters

// The 4 main OOPs concepts are:
//     Encapsulation
//     Abstraction
//     Inheritance
//     Polymorphism
//     Static Methods

// 1. Encapsulation — Protecting and Controlling Data
//---------------------------------------------------------
// Encapsulation means keeping data and the methods that operate on that data together inside a class, 
// while controlling direct access to internal data.

// In JavaScript, # creates a private field.

class BanckAccount {
    #balance = 10000 //private property
    deposit(amt) {
        this.#balance += amt
    }
    getBalance() {
        return this.#balance
    }
    withdraw(amt) {
        this.#balance -= amt
    }
}

let en = new BanckAccount()
en.deposit(5000)
console.log(en.getBalance())
en.withdraw(2500)
console.log(en.getBalance())
//console.log(en.#balance)      //SyntaxError: Private field '#balance' must be declared in an enclosing class

//------------------------------------------------------------------------------------------------------------------
// 2. Abstraction — Hiding Implementation Details
//  Abstraction means hiding complex internal implementation and showing only what the user needs to use.

class Car {
    start() {
        this.#startEngine()
        this.#supplyFuel()
    }
    #startEngine() {
        console.log("Engine Started...")
    }
    #supplyFuel() {
        console.log("Supplying Fuel...")
    }
}

let cr = new Car()
cr.start()
//cr.#startEngine()    //SyntaxError: Private field '#startEngine' must be declared in an enclosing class
//----------------------------------------------------------------------------------------------------------

// 3. Inheritance — Reusing Parent Class Features
// Inheritance allows one class to inherit properties and methods from another class.
// In JavaScript, we use extends.

// class Animal {
//     eat() {
//         console.log("Animal is eating");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Dog is barking");
//     }
// }

// const dog = new Dog();

// dog.eat();   // Inherited from Animal
// dog.bark();  // Dog's own method

// A Manager is an Employee, so the Manager can inherit common Employee functionality.
// Remember: Inheritance = Reuse functionality from a parent class
//----------------------------------------------------------------------------------------------------------

// 4. Polymorphism — Same Method, Different Behavior
// Polymorphism means the same method name can behave differently depending on the object.
// A common example is method overriding.
class Animal {
    sound() {
        console.log("Animal makes a sonund")
    }
}

class Dog extends Animal {
    sound() {
        console.log("Bho Bho")
    }
}

class Cat extends Animal {
    sound() {
        console.log("mew mew")
    }
}    

let dg = new Dog()
let ct = new Cat()

dg.sound()
ct.sound()

//Remember: Polymorphism = Same method/interface + Different behavior
//--------------------------------------------------------------------------------------------
// Encapsulation: Using private fields and methods to hide data.
// Abstraction: Exposing methods without implementation details.
// Inheritance: Using extends to reuse class behavior.
// Polymorphism: Same method name behaving differently at runtime.

//--------------------------------------------------------------------------------------------------
//Static method
// A static method belongs to the class and is called using the class name, 
// while a non-static method belongs to an instance (object) and requires an object to call it.

class Employee{
    //non static method
    showName(){
        console.log("Dipanshu")
    }

    //static method 
    static showCompany(){
        console.log("abc Technology")
    }
}

let emp = new Employee()
emp.showName()

//emp.showCompany()   //TypeError: emp.showCompany is not a function

Employee.showCompany()
