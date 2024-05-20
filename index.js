const image = document.getElementById("image")
const set = document.getElementById("set")
const remove = document.getElementById("remove")
const container = document.getElementById("container")
const randomNumber = Math.floor(Math.random()*4)
const doc = ['1','2','3','4']
console.log(randomNumber)
function handleSet(){
    const randomNumber = Math.floor(Math.random()*4)
    image.setAttribute('src',`/${doc[randomNumber]}.jpg`)
    container.style.display = 'block'
   
   
}

function handleRemove(){
    image.removeAttribute('src')
    container.style.display = 'none'
}