let container = document.getElementById("container")
let h1 = document.getElementById("heading")
let button = document.getElementById("button")
let span1 = document.getElementById("span")

h1.innerText = "Background color : #59CC83"
button.innerText = "click me"
button.style.backgroundColor = "transparent"
container.style.backgroundColor = "#59CC83"
// container.style.width = "px"
container.style.height = "500px"
container.style.alignItems = "center"

function click1(){
    let container = document.getElementById("container")
    h1.innerText = "Background color : #f1f5f8"
    container.style.backgroundColor = "#f1f5f8"
}