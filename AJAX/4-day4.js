//promise combinators
// Promise.all()
// Promise.race()
// Promise.any()
// Promise.allSettled()

//promise.all()
//will execute promises till it get first reject ... 
//after getting first reject it will through shortcircut

//promise.any()
//it will exectue till it get first resolve 

//promise.allsettled()
//it will execute all and return whatever is result in array..
//if resolve return output ..if reject return reason 

//promise.race()
//it will race betweenthe promises and returns first executed promise
//---------------------------------------------------------------------

//promise.all

// async function PromiseAll() {
//     let users = await Promise.all([
//         Promise.resolve("hello1"),
//         Promise.resolve("hello2"),
//         Promise.resolve("hello3"),
//         Promise.reject('bye'),
//         Promise.resolve("hello4")
//     ])
//     console.log(users)
// }

// PromiseAll()
//----------------------------------------------------------------------
//promise.any
// async function PromiseAny() {
//     let users = await Promise.any([
//         Promise.reject('bye1'),
//         //Promise.resolve("hello4"),
//         Promise.reject('bye2'),
//         Promise.reject('bye3'),
//         //Promise.resolve("hello1"),
//         Promise.reject('bye4'),
//         Promise.resolve("hello5")
        
//     ])
//     console.log(users)    
// }
// PromiseAny()
//--------------------------------------------------------------------------
// async function PromiseAllSettle() {
//     let users = await Promise.allSettled([
//         Promise.reject('bye1'),
//         Promise.resolve("hello4"),
//         Promise.reject('bye2'),
//         Promise.reject('bye3'),
//         Promise.resolve("hello1"),
//         Promise.reject('bye4'),
//         Promise.resolve("hello5")
//     ])
//     console.log(users)
// }

// PromiseAllSettle()
//-----------------------------------------------------------------------------

//promise.race

function addTime1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("hello1")
        },3000)
    })
}

function addTime2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("hello2")
        },7000)
    })
}

function addTime3(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("hello3")
        },5000)
    })
    
}

function addTime4(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("hello4")
        },2000)
    })
}

async function promiseRace() {
    let res = await Promise.race([
        addTime1(),
        addTime2(),
        addTime3(),
        addTime4()
    ])
    console.log(res)
}

promiseRace()