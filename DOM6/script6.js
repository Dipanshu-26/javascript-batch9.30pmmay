//  <ul>
//         <li>
//             Dipanshu
//             <Button class="rm">Remove</Button>
//             <Button class="up">Up</Button>
//             <Button class="dn">DOwn</Button>
//         </li>
//   <input type = 'text'>
//     <button id = "id1">Add Me</button>


let ulList = document.querySelector('ul')
let ipBox = document.querySelector('input')
let btn=document.querySelector('button#id1')


//step 1 : add li element 
btn.addEventListener('click',function(){
    console.log("one")
    let newTxt=ipBox.value
    let newLi = document.createElement('li')
    newLi.textContent=newTxt
    createButton(newLi)
    ulList.appendChild(newLi)
    ipBox.value=""
})

//step 2 : add button 
//             <Button class="rm">Remove</Button>
//             <Button class="up">Up</Button>
//             <Button class="dn">DOwn</Button>

function createButton(liEle){
    console.log("Two")
    //Remove
    let rmbtn= document.createElement('button')
    rmbtn.textContent="Remove"
    rmbtn.classList.add('rm')
    liEle.appendChild(rmbtn)

    //Up
    let upbtn= document.createElement('button')
    upbtn.textContent="Up"
    upbtn.classList.add('up')
    liEle.appendChild(upbtn)

    //Down
    let dnbtn= document.createElement('button')
    dnbtn.textContent="Down"
    dnbtn.classList.add('dn')
    liEle.appendChild(dnbtn)
}

//step 3: add functionality 

ulList.addEventListener('click',function(){
    console.log("Three")
    if(event.target.tagName=="BUTTON"){
        if(event.target.className=='rm'){
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }

        else if(event.target.className=='up'){
            let li = event.target.parentElement
            let ul = li.parentElement
            let preLi = li.previousElementSibling
            if(preLi){
                ul.insertBefore(li,preLi)
            }
        }

        else if(event.target.className=='dn'){
            let li = event.target.parentElement
            let ul = li.parentElement
            let nxtLi = li.nextElementSibling
            if(nxtLi){
                ul.insertBefore(nxtLi,li)
            }
        }
    }
})
