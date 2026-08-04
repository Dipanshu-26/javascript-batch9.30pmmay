// document.querySelector('h1').addEventListener('click',function(){
//     document.querySelector('h1').style.color='yellow'
// })

// document.querySelector('h2').addEventListener('click',function(){
//     document.querySelector('h2').style.color="green"
// })


document.querySelector('h1').addEventListener('click',function(){
    document.querySelector('h2').style.color='yellow'
})

document.querySelector('h2').addEventListener('click',function(){
    document.querySelector('h1').style.color="green"
})