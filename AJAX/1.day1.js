//program 1
function addA(){
    console.log("hello addA")
}

function addB(){
    console.log("hello addB")
}

// addA()
// addB()

//------------------------------------------------------------
//setTimeout()

//program 2 

function addC(){
    setTimeout(function(){
        console.log("hello addC")
    },3000)
}

function addD(){
    setTimeout(function(){
        console.log("hello addD")
    },2000)
}

// addC()
// addD()

//------------------------------------------------------------------------------
//program 3 
function getInfo(){
    setTimeout(function(){
        console.log("create user")
    },5000)

    setTimeout(function(){
        console.log("create ID")
    },2000)

    setTimeout(function(){
        console.log("get user info")
    },1000)
}

//getInfo()
//------------------------------------------------------------------------------
// call back hell
//tightely coupled , can not resue the functions seperately 
function getInfo2(){
    setTimeout(function(){
        console.log("create User")
        setTimeout(function(){
            console.log("create ID")
            setTimeout(function(){
                console.log("get User info")
            },1000)
        },2000)
    },5000)
}

//getInfo2()
//---------------------------------------------------------------------------------
//async ------sync 
//promise 
//promise ==> 3 states 
// pending , resolved , rejected 

let pro = new Promise(function(resolve,reject){
    let a=10
    let b=10
    if(a==b){
        resolve("hello")
    }
    else{
        reject("bye")
    }
})

//consume promise
//syntax
//pro.then(fn(resolve),fn(reject))
pro.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})
