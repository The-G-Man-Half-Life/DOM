let btn = document.createElement("button")

btn.classList.add("btn","btn-primary")
btn.textContent = "Hola mundo"


let main = document.querySelector("main")
const hijoUno = document.querySelector("#hijo-uno")
const hijoDos = document.querySelector("#hijo-dos")

main.before(btn)