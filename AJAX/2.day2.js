//promise 
//pending, resolved, rejected
//program 1 
// let pro = new Promise(function(resolve,reject){
//     let a= 10
//     let b=5
//     if(a>b){
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }
// })

//consume
// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })
//pro.then(fn(resolve),fn(reject))
//-------------------------------------------------------------------------
//program 2 

//then catch 

// let pro2 = new Promise(function(reject,resolve){
//     let a=10
//     let b=50
//     if(a>b){
//         resolve([11,22,33,44])
//     }
//     else{
//         reject([1,2,3,4])
//     }
// })


// pro2.then(function(res1){
//     console.log(res1)
// }).catch(function(res2){
//     console.log(res2)
// })

//--------------------------------------------------------------------------------
//program 3 

// let pro3 = new Promise(function(resolve,reject){
//     let a ="Dipanshu"
//     if(a.startsWith("d")){
//         resolve(a)
//     }
//     else{
//         reject("bye")
//     }
// })

// pro3.then(function(res1){
//     console.log(res1)
// }).catch(function(res2){
//     console.log(res2)
// })
//----------------------------------------------------------------------------

//program 4

// let pro4 = new Promise(function(resolve,reject){
//     let a= "Dipanshu"
//     if(a.startsWith("d")){
//         resolve(a)
//     }else{
//         reject("bye")
//     }
// })

// pro4.then(function(str1){
//     return str1 + ", hi, how are you!!"
// }).then(function(str2){
//     console.log(str2)
// }).catch(function(str3){
//     console.log(str3)
// }).finally(function(){
//     console.log("I will always execute...")
// })
//------------------------------------------------------------------

function createUser(){
    let pro = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user created")
        },5000)
    })
    return pro
}

function getId(){
    let pro = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("ID created")
        },3000)
    })
    return pro
}

function getInfo(){
    let pro = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get user info")
        },1000)
    })
    return pro
}


// getInfo()
// createUser()
// getId()

// createUser().then(function(str){
//     console.log(str)
//     return getId()
// }).then(function(str){
//     console.log(str)
//     return getInfo()
// }).then(function(str){
//     console.log(str)
// }).catch(function(){
//     console.log("erroe occoured")
// }).finally(function(){
//     console.log("I will always execute")
// })
//--------------------------------------------------------------

//async await

async function getUserInformation() {
    let one = await createUser()
    console.log(one)

    let two = await getId()
    console.log(two)

    let three = await getInfo()
    console.log(three)
}

getUserInformation()