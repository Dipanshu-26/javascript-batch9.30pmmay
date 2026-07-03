let map1 = new Map([
    [1,"admin"],
    [2,"manager"],
    [3,"customer"]
]) 
//retrive
console.log(map1)
console.log(map1.get(1))
let q1 = map1.get(3)
console.log(q1)

//add/update
map1.set(4,"trainee")
map1.set(2,"project manager")

console.log(map1)

//detete

let q2 = map1.delete(4)
console.log(q2)
console.log(map1)

let q3 = map1.delete(5)
console.log(q3)
console.log(map1)

//if key exist
console.log(map1.has(2))
console.log(map1.has(7))

//loops
for(let k of map1.keys()){
    console.log(k)
}

for(let v of map1.values()){
    console.log(v)
}

for(let e of map1.entries()){
    console.log(typeof(e))
}

for(let [k,v] of map1){         //[ 1, 'admin' ]
    console.log(`key = ${k} , values = ${v}`)
}

//-----------------------------------------------------

let response  = [                            //k   v
    {id : 1 , name : "aaa"},                //[1,"aaa"]
    {id : 2 , name : "bbb"},
    {id : 3 , name : "ccc"},
    {id : 4 , name : "ddd"},
    {id : 5 , name : "bbb"}
]

let map2 = new Map()
response.forEach(function(el){
    //console.log(el.id, el.name)
    map2.set(el.id,el.name)
})

console.log(map2)

for(let [k,v] of map2){
    if(v=="bbb"){
        console.log(k,v)
        
    }
}