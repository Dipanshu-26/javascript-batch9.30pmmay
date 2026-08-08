//  <h1>Student List</h1>
//     <ul>
//         <li>Dipanshu</li>
//         <li>Nitin</li>
//         <li>Neel</li>
//         <li>Tanish</li>
//         <li>Akay</li>
//     </ul>
//     <input type ='text'>
//     <button>Add Me</button>

let ulEle = document.querySelector('ul')
let liEle =document.querySelector('li')
let btn = document.querySelector('button')
let ipBox = document.querySelector('input')


btn.addEventListener('click',function(){
    let ipTxt = ipBox.value
    let nweLi = document.createElement("li")
    nweLi.textContent = ipTxt
    ulEle.appendChild(nweLi)
    ipBox.value=""
})