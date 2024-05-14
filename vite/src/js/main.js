import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import { coders } from "../../public/database/database.js"
import { showSmallAlertSuccess, showSmallAlertFail, showSmallAlertFail1 } from './alerts.js'
import { erase, create, codersListV1, codersListV2, codersListV3 } from './operations.js'


codersListV2(coders)
// codersListV2(coders)
// codersListV3(coders)


let name = document.getElementById("name")
let lastName = document.getElementById("last-name")
let email = document.getElementById("email")
let form = document.getElementById("form")
let formE = document.getElementById("form-e")
let id = document.getElementById("ida")
let table = document.getElementById("table")
let idParaActualizar =

form.addEventListener("submit", function (event) {
    if (idParaActualizar === undefined) {
        create(coders,name,lastName, email)
        showSmallAlertSuccess("saved")
    }else{
        for (const coder of coders) {
            if (coder.id == idParaActualizar) {
                coder.name = name.value
                coder.lastName = lastName.value
                coder.email = email.value
            }
        }
        showSmallAlertSuccess("estamos listos para actualizar")
        idParaActualizar = undefined
    }

    form.reset()
    codersListV2(coders)
    event.preventDefault()
})

form.addEventListener("submit", function (event) {

    if (form.checkValidity()) {
        create(coders, name, lastName, email)
        showSmallAlertSuccess()
        codersListV2(coders)
        form.reset()
        event.preventDefault()
        form.classList.remove("was-validated")
    }
    else {
        event.preventDefault()
        event.stopPropagation()
        showSmallAlertFail1()
        form.classList.add("was-validated")
    }
})

formE.addEventListener("submit", function (event) {
    if (formE.checkValidity()) {
        let eraseReturn = erase(coders, id.value)
        if (eraseReturn == false) {
            showSmallAlertFail1()
            formE.reset()
            event.preventDefault()
            formE.classList.add("was-validated")
        }
        else {
            showSmallAlertSuccess()
            codersListV2(coders)
            formE.reset()
            event.preventDefault()
            formE.classList.remove("was-validated")
        }

    }
    else {
        event.preventDefault()
        event.stopPropagation()
        showSmallAlertFail()
        formE.classList.add("was-validated")
    }
})
table.addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-danger")) {
        const idParaEliminar = event.target.getAttribute("data-id")

        coders.forEach((coder, index) => {
            if (coder.id == idParaEliminar) {
                coders.splice(index, 1)
            }
        })
        codersListV2(coders)
        showSmallAlertSuccess("Diste en el blanco")
    }
    else if (event.target.classList.contains("btn-warning")) {
        idParaActualizar = event.target.getAttribute("data-id")
        showSmallAlertSuccess("Diste en el blanco")
        let userFound = coders.find(coder => coder.id == idParaActualizar)
        console.log(userFound.id)

        
        //pintar los datos nuevamente en el formulario

        name.value = userFound.name
        lastName.value = userFound.lastName
        email.value = userFound.email
    }
})