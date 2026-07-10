class Person {
    setFirstName(fn){
        this.fname = fn
    }

    setLastName(ln){
        this.lname = ln
    }

    getFirstName(){
        return this.fname
    } 

    getLastName(){
        return this.lname
    }

}

let dip = new Person()
dip.setFirstName("dipanshu")
console.log(dip.getFirstName())


//--------------------------------------------------------------------
//get set keywords 

class PersonB{
    set firstName(fn){
        this.fname=fn
    }
    set lastName(ln){
        this.lname=ln
    }
    get lastN(){
        return this.lname
    }
    get firstN(){
        return this.fname
    }  
}

let adi = new PersonB()
adi.firstName = "aditya"
adi.lastName = "masalkar"

console.log(adi.lastN)
console.log(adi.firstN)