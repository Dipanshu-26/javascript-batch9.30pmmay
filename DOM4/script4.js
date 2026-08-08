let b1 = document.querySelector('button#b1')
let b2=document.querySelector("button#b2")


let t1=document.querySelector("h1")
let t2 = document.querySelector("#t2")

b1.addEventListener('click',function(){
    t1.textContent = "Red"
    t1.style.color = "red"
})

b2.addEventListener('click',function(){
    t2.textContent = "Dipanshu Chawde"
    
})

