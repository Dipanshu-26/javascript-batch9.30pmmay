let arr = [1,2,3,4,5,6,7]
console.log(arr[0])
arr[0]=11
console.log(arr)

let str = "dipanshu"
console.log(str)
console.log(str[0])
console.log(str[4])
console.log(str[10])

str[0]='x'
console.log(str[0])

let x= "dipanshu"
let y ="chawde"

//concatination

console.log("My name is " +x+ ". My surname is " +y+"." )

console.log(`My name is ${x}. My surname is ${y}.`)

let a=10
let b = 'x'
let c= 20
let d ='y'

console.log(b+d)
console.log(a+c)

console.log(b+c)
console.log(a+b)


let city = "ahilyanagar"
console.log(city.length)
// 0   1   2   3   4   5   6   7   8   9   10
// a   h   i   l   y   a   n   a   g   a   r

for(let i=0;i<city.length;i++){
    console.log(city[i])
}

let a1=0
while(a1<city.length){
    console.log(city[a1])
    a1++
}

//----------------------------------
//includes(), toUpperCase(), toLowerCase()
a ="diPAshu cHAwde"

console.log(a.toLowerCase())
console.log(a.toUpperCase())

console.log(a.includes("dip"))

console.log(a.toLowerCase().includes("dip"))


console.log(a.includes("DIP"))

console.log(a.toUpperCase().includes("DIP"))

console.log(a.includes("cha"))

console.log(a.toLowerCase().includes("cha"))