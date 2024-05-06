b
// let main = document.querySelector("main")
// let butonAction = document.querySelector(".execute")

// function elementoCreado() {
//     let elementoNuevo = document.createElement("img")
//     elementoNuevo.setAttribute("src","https://i.ytimg.com/vi/WNckHMX-dDI/sddefault.jp")
//     elementoNuevo.setAttribute("alt","Imagen de hola tonotos")
//     return elementoNuevo
// }

// butonAction.addEventListener("click",function(){
//     let elementoNuevo =elementoCreado()
//     main.appendChild(elementoNuevo)
// })

let btn = document.createElement("button")

btn.classList.add("btn","btn-primary")
btn.textContent = "Hola mundo"


let main = document.querySelector("main")
const hijoUno = document.querySelector("#hijo-uno")
const hijoDos = document.querySelector("#hijo-dos")

main.before(btn)