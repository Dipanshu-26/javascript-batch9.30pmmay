//Promise.allsettled()
//Promise.any()
//Promise.all()
//Primise.race()

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

function addTime1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("hello1")
        },6000)
    })
}

function addTime2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject("bye2")
        },1000)
    })
}

function addTime3(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("hello3")
        },2000)
    })
}

function addTime4(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject("bye4")
        },7000)
    })
}


////promise.all

// async function promiseall(){
//     let pro = await Promise.all([
//         addTime1(),
//         addTime2(),
//         addTime3(),
//         addTime4()
//     ])
//     console.log(pro)
// }

// promiseall()

//-----------------------------------------------------------------

// async function promiseany(){
//     let pro = await Promise.any([
//         addTime1(),
//         addTime2(),
//         addTime3(),
//         addTime4()
//     ])
//     console.log(pro)
// }

// promiseany()

//--------------------------------------------------------------------

// async function promiseAllSettle(){
//     let pro = await Promise.allSettled([
//         addTime1(),
//         addTime2(),
//         addTime3(),
//         addTime4()
//     ])
//     console.log(pro)
// }

// promiseAllSettle()

//-------------------------------------------------------------------

async function promiseRace(){
    let pro = await Promise.race([
        addTime1(),
        addTime2(),
        addTime3(),
        addTime4()
    ])
    console.log(pro)
}

promiseRace()