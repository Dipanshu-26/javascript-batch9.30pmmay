//method overloading
//Method Overloading -- Same method name, same class, but different method signatures (number/type of parameters)
//Method Overriding -- Same method name, same signature, but in child class with inheritance.

//Method Overloading -- Same method name, same class, but different method signatures (number/type of parameters)
// import java.util.*;

// public class Main {
//     public static void main(String[] args) {
//       System.out.println("Hello, World!");
//       addition(10,20);
//       addition(10,20,30);
//       addition(10,20,30,40);
//     }

//     public static void addition(int x , int y){
//       System.out.println(x+y);
//     }

//     public static void addition(int x, int y, int z){
//       System.out.println(x+y+z);
//     }

//     public static void addition(int x, int y, int z,int a){
//       System.out.println(x+y+z+a);
//     }
// }

//------------------------------------------------------------------------------------------

class calc{
    addition(x=undefined,y=undefined,z=undefined,a=undefined){
        if(x!=undefined && y!=undefined && z!=undefined && a!=undefined){
            console.log(x+y+z+a)
        }
        else if(x!=undefined && y!=undefined && z!=undefined){
            console.log(x+y+z)
        }
        else if(x!=undefined && y!=undefined){
            console.log(x+y)
        }
        else{
            console.log("please enter atleast 2 numbers")
        }
    }
}

let add = new calc()
add.addition(10,20)
add.addition(11,22,33)
add.addition(10,20,30,40)

//----------------------------------------------------------------------------------------------
//Method Overriding -- Same method name, same signature, but in child class with inheritance.

// class WorldBank{
//     loan(){
//         console.log("wB -loan")
//     }
//     save(){
//         console.log("wB -save")
//     }
// }

// class SBI{
//      loan(){
//         console.log("SBI -loan")
//     }
//     save(){
//         console.log("SBI -save")
//     }
// }

// let sbi = new SBI()
// sbi.loan()
// let wb = new WorldBank()
// wb.save()

// //--------------------------------------------------------------------------------------------
// class WorldBank{
//     loan(){
//         console.log("wB -loan")
//     }
//     save(){
//         console.log("wB -save")
//     }
// }

// class SBI extends WorldBank{
//      loan(){
//         console.log("SBI -loan")
//     }
//     save(){
//         console.log("SBI -save")
//     }
// }

// let sbi = new SBI()
// sbi.loan()
// let wb = new WorldBank()
// wb.save()

//--------------------------------------------------------------------------------------------
class WorldBank{
    loanInterestRate(){
        return 6 
    }
    saveInterest(){
        return 4
    }
}

class SBI extends WorldBank{
    loanInterestRate(){
        return super.loanInterestRate() + 2    //6+2
    }
    saveInterest(){
        return super.saveInterest() + 2      //4+2
    }
}

let sbi = new SBI()
let int_sbi = sbi.loanInterestRate()
console.log(int_sbi)
let sav_sbi = sbi.saveInterest()
console.log(sav_sbi)

let wb = new WorldBank()
console.log(wb.saveInterest())
console.log(wb.loanInterestRate())
//-----------------------------------------------------------------------------------

//duck typing

function makeSound(animal){
    animal.sound()
}

let dog={
    sound(){
        console.log("Bark")
    }
}

let cat = {
    sound(){
        console.log("mew")
    }
}

let human = {
    sound(){
        console.log("talk")
    }
}

makeSound(dog)
makeSound(cat)

//-----------------------------------------------------------------------
class Dog{
    talk(){
        console.log("Bho Bho")
    }
}

class Cat{
    talk(){
        console.log("Mew Mew")
    }
}

class Duck{
    talk(){
        console.log("Quack Quack")
    }
}

function call_talk(obj){
    obj.talk()
}

let d = new Dog()
let c = new Cat()
let dk = new Duck()

call_talk(d)
call_talk(dk)

//--------------------------------------------------------------------------

class Audi{
    start(){
        console.log("Audi satrts")
    }

    stop(){
        console.log("Audi stops")
    }
}

class Bike{
    start(){
        console.log("Bike satrts")
    }

    stop(){
        console.log("bike stops")
    }
}

function call_start(obj){
    obj.start()
}

function call_stop(obj){
    obj.stop()
}

let ad = new Audi()
let bk = new Bike()

call_start(ad)
call_stop(ad)