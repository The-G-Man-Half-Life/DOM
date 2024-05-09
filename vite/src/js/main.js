import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import { coders } from "../../public/database/database.js"
import { erase,create,codersListV1,codersListV2,codersListV3 } from './operations.js'


codersListV1(coders)
// codersListV2(coders)
// codersListV3(coders)


let name = document.getElementById("name")
let lastName = document.getElementById("last-name")
let email = document.getElementById("email")
let form = document.getElementById("form")
let formE = document.getElementById("form-e")
let id = document.getElementById("id")

form.addEventListener("submit",function (event) {

    if(form.checkValidity()){
        create(coders,name,lastName,email)
        codersListV1(coders)
        form.reset()
event.preventDefault()    
form.classList.remove("was-validated")
}
        else {
        event.preventDefault()
        event.stopPropagation()
        form.classList.add("was-validated")
        }

    


})

formE.addEventListener("submit",function (event) {
    console.log("agua")
    
    erase(coders,id.value) 
    codersListV1(coders)
    event.preventDefault()
})