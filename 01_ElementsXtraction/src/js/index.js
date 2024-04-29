console.groupCollapsed("usage of get get element conventionally")

let one = document.getElementById("btn-one")// call an element with id
let two = document.getElementsByClassName("btn-two")// call an element with class
let three = document.getElementsByName("btn-three")// call an element with name
let four  = document.getElementsByTagName("button")//call an element by its tag


console.log(one)

console.log(two);
console.log(two[0])

console.log(three);
console.log(three[0]);

console.log(four);
console.log(four[3]);

console.groupEnd()

console.groupCollapsed("usage of get elements by using query selector")

let five = document.querySelector("#five")
let six = document.querySelector(".six")
let seven = document.querySelector(".seven")
let eight1 = document.querySelectorAll('[name="eight"]')
let eight2 = document.querySelector("[name=eight]")
let allGood = document.querySelectorAll(".section_2 button")
let allBad = document.querySelector("button")


console.log(five);

console.log(six);

console.log(seven);

console.log(eight1);

console.log(eight2)

console.log(allGood)

console.log(allBad);


console.log("Ho ")
console.groupEnd()