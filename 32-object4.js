//object with methods

let car = {
    barnd : "Audi",
    number : 1234,
    start : function(){
        console.log("car started")
    },
    stop : function(){
        console.log("car stoped")
    }

}

console.log(car)
console.log(car.barnd)
console.log(car.number)
console.log(car.start())

car.start()
car.stop()