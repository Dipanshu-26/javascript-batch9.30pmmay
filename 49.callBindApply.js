//call, apply, and bind is to show that they are used to control the value of this when executing a function.

let adi = {
    fname: "Aditya",
    lname: "Masalkar",
    display: function () {
        console.log(this.fname + " " + this.lname)
    }
}

let dip = {
    fname: "Dipanshu",
    lname: "chawde"
}

adi.display()


//1. Method borrowing---------------------------------
dip.display = adi.display
dip.display()


//2. call() Method ----------------------------------------------------
//call() executes the function immediately and allows us to set this.

let dipanshu = {
    fname: "dipanshu",
    lname: "chawde",
    display: function () {
        console.log(this.fname + " " + this.lname)
    },
    displayInfo: function (city, country) {
        console.log(this.fname + " " + this.lname + " " + city + " " + country)
    }
}

let aditya = {
    fname: "Aditya",
    lname: "Masalkar"}

let rucha ={
    fname : "rucha",
    lname : "gaware"
}    

rucha.display=dipanshu.display
rucha.display()

//call
dipanshu.display.call(aditya)
dipanshu.displayInfo.call(rucha,"pune","india")

//4. apply() Method---------------------------------------------------

dipanshu.displayInfo.call(rucha,"pune","india")
dipanshu.displayInfo.apply(rucha,["pune","india"])
dipanshu.displayInfo.apply(aditya,["mumbai","india"])

//5. bind() Method ----------------------------------------------------

//bind() does not execute immediately. It returns a new function with fixed this.

let ruchaBind = dipanshu.display.bind(rucha)

ruchaBind()

let adiBind = dipanshu.displayInfo.bind(aditya,"pune","india")
adiBind()

// // bind() → creates new function
// // call() → executes immediately
// // apply() → executes immediately
