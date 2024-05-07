const main = document.getElementById("main")
const footer = document.getElementsByTagName("footer")
const header = document.getElementsByTagName("header")
const btnExample = createAButton() //the created elements in variables can be used only once
const btnPoint = document.getElementById("btn-point")


//insert elements before the container
main.before(createAButton())

//insert elements after the container
main.after(btnExample)

//insert elements at the start of the container
main.prepend(createAButton())

//insert elements at the end of the container
main.append(createAButton())

//eliminates all the children of the parent and inserts the elements selects
// main.replaceChildren(createAButton(), createAButton())

//eliminates 1 child and inserts the element in the brakcet
// main.replaceChild(createAButton(),)

//replace the element at the start and replaces it with the element in the bracket
// main.replaceWith(createAButton())

//this commits a self destruction
// main.remove()

function createAButton() {
    let btn = document.createElement("button")
    btn.classList.add("btn","btn-danger")
    btn.textContent= "Red Button"
    btn.id = "btn"
    return btn

}

console.log(main.children)
console.log(footer.children)
console.log(main.parentElement)
console.warn(btnPoint.parentElement.parentElement.parentElement.parentElement.parentElement)

console.log(main.firstElementChild)
console.log(footer.firstElementChild)
console.log(main.lastElementChild)

console.log(main.previousElementSibling)
console.log(main.nextElementSibling)