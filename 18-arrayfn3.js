//calculate age
let byear = [1990,1983,2000,2024,2008]
let age=[]
for(let i=0;i<byear.length;i++){
    age.push(2026-byear[i])
}

console.log(age)    //[ 36, 43, 26, 2, 18 ]

//above 40   
let marks = [45,67,99,87,23,53,45,12,34,22]
let above40 = []
for(let i=0;i<marks.length;i++){
    if(marks[i]>40){
        above40.push(marks[i])
    }
}

console.log(above40)

//below40
let below40 =[]
for(let i=0;i<marks.length;i++){
    if(marks[i]<40){
        below40.push(marks[i])
    }
}

console.log(below40)

//want to print welcome to cityname Welcome to Pune!!!!

let city=['Pune','Nagpur','Banglore','Delhi','Raipur']

for(let i=0;i<city.length;i++){
    console.log(`Welcome to ${city[i]}`)
}
