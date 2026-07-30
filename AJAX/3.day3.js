//create user ==> assign ID ==> get user info

function createUser() {
    let pro = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("User created")
        }, 5000)
    })
    return pro
}

function getId() {
    let pro = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("get ID")
        }, 3000)
    })
    return pro
}

function getUserInfo() {
    let pro = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("get user info")
        }, 1000)
    })
    return pro
}

//consuming promises

// createUser().then(function(str){
//     console.log(str)
//     return getId()
// }).then(function(str){
//     console.log(str)
//     return getUserInfo()
// }).then(function(str){
//     console.log(str)
// }).catch(function(){
//     console.log("error occured")
// }).finally(function(){
//     console.log("I  will always execute")
// })

//-------------------------------------------------------------------------------------------------

//API ==> e2e ==> user create , update , get , delete 

//async awit 

async function getUsetInformation() {
    let p1 = await createUser()
    console.log(p1)

    let p2 = await getId()
    console.log(p2)

    let p3 = await getUserInfo()
    console.log(p3)
}

getUsetInformation()