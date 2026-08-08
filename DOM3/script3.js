    //css selector
    // <h1 id="id1" class ="c1" name="nm1">Minskole</h1>
    // <h2 id="id2" class ="c2" name="nm2">Dipanshu Chawde</h2>
    // <h3 id="id3" class ="c3" name="nm3">Javascript</h3>
    // <h4 id="id4" class ="c4" name="nm4">Playwright Automation</h4>

//by tag
let bytag= document.querySelector('h1')
console.log("ByTage",bytag)

//by id
let byId = document.querySelector("#id1")
console.log("ById",byId)

//by class
let byClass = document.querySelector(".c1")
console.log("ByClass",byClass)

//by attribute
let byAtt = document.querySelector('[name="nm1"]')
console.log("ByAtt",byAtt)

//