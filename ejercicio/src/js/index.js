//nombre:Mateo Montoya Ospina
//clan:Gates
//Dia de inicio: 4 de Mayo de 2024

//lista en donde guardo las mascotas

let pets = [
    {
        pet: {
            name: "luna",
            species: "dog",
            breed: "belgian malinois",
            age: 5,
            weight: 25,
            condition: "Stable",
            image: "https://www.purina.es/sites/default/files/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-07Belgian-Shepherd-Dog-Malinois.jpg?itok=s-IKY2CR"
        },
        owner: {
            name: "maría garcía",
            document: 1122334455,
            phone: 55512345678,
            email: "maria_garcia@amogus.com"
        }
    },
    {
        pet: {
            name: "max",
            species: "cat",
            breed: "sphynx",
            age: 6,
            weight: 7,
            condition: "Critical",
            image: "https://th.bing.com/th/id/R.a7e88dff11207795fbc7bf4567eda0ac?rik=8LzUDHk1CJ71Iw&pid=ImgRaw&r=0"
        },
        owner: {
            name: "alejandro martínez",
            document: 2233445566,
            phone: 55523456789,
            email: "alejandro_martinez@amogus.com"
        }
    },
    {
        pet: {
            name: "bella",
            species: "rabbit",
            breed: "angora",
            age: 3,
            weight: 4,
            condition: "Stable",
            image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*nD2CZLnWxCtZWrhCNbVqUQ.jpeg"
        },
        owner: {
            name: "sofía rodríguez",
            document: 3344556677,
            phone: 55534567890,
            email: "sofia_rodrigue@amogus.com"
        }
    },
    {
        pet: {
            name: "rocky",
            species: "ferret",
            breed: "black-footed ferret",
            age: 2,
            weight: 12,
            condition: "Critical",
            image: "https://fcmod.org/wp-content/uploads/2020/05/bffs-free-use-e1588877238148-1024x576.jpg"
        },
        owner: {
            name: "carlos lópez",
            document: 4455667788,
            phone: 55545678901,
            email: "carloz_lopez@amongus.com"
        }
    },
    {
        pet: {
            name: "coco",
            species: "parrot",
            breed: "argentine parrot",
            age: 4,
            weight: 0.5,
            condition: "Stable",
            image: "https://estaticos-cdn.prensaiberica.es/clip/8b55f625-d395-441e-b647-87927cbc5ce2_16-9-aspect-ratio_75p_0.jpg"
        },
        owner: {
            name: "ana pérez",
            document: 5566778899,
            phone: 55556789012,
            email: "ana_perez@amongus.com"
        }
    },
    {
        pet: {
            name: "simba",
            species: "snake",
            breed: "ball python",
            age: 7,
            weight: 3,
            condition: "Critical",
            image: "https://www.thebiodude.com/cdn/shop/articles/normal_ball_python_-_generic_1024x1024.jpg?v=1588783091"
        },
        owner: {
            name: "andrea ruiz",
            document: 6677889900,
            phone: 55567890123,
            email: "juan_hernandez@amongus.com"
        }
    },
    {
        pet: {
            name: "lola",
            species: "pig",
            breed: "miniature vietnamese pig",
            age: 6,
            weight: 15,
            condition: "Stable",
            image: "https://images.ctfassets.net/440y9b545yd9/65QbYsukEHmvvskjOGMA5z/40fd64c3c0aab0f4b28bf87054b478db/Teacup_pig_hero850.webp"
        },
        owner: {
            name: "laura díaz",
            document: 7788990011,
            phone: 55578901234,
            email: "laura_diaz@amongus.com"
        }
    },
    {
        pet: {
            name: "toby",
            species: "turtle",
            breed: "red-eared slider",
            age: 3,
            weight: 2,
            condition: "Critical",
            image: "https://www.vtherpatlas.org/wp2016/wp-content/uploads/turtle-gc15239c9c_1920-300x273.jpeg"
        },
        owner: {
            name: "pablo gómez",
            document: 7788990011,
            phone: 55589012345,
            email: "pablo_gomez@amongus.com"
        }
    },
    {
        pet: {
            name: "daisy",
            species: "ferret",
            breed: "european ferret",
            age: 3,
            weight: 8,
            condition: "Critical",
            image: "https://images.newscientist.com/wp-content/uploads/2022/08/18160942/SEI_119866311.jpg?width=900"
        },
        owner: {
            name: "david fernández",
            document: 9900112233,
            phone: 55590123456,
            email: "andrea_ruiz@amongus.com"
        }
    },
    {
        pet: {
            name: "Destroyer of worlds",
            species: "rabbit",
            breed: "lionhead rabbit",
            age: 2,
            weight: 6,
            condition: "Critical",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Lionhead_rabbit_Dobby.jpg/220px-Lionhead_rabbit_Dobby.jpg"
        },
        owner: {
            name: "david fernández",
            document: 9911223344,
            phone: 55501234567,
            email: "david_fernandez@amongus.com"
        }
    }
];
// con esto coloco las condiciones donde se muestran las mascotas orginales de la lista
let arraySection = document.getElementById("pets-array")
arraySection.classList.add("d-flex")
arraySection.classList.add("flex-wrap")
arraySection.classList.add("gap-2")
arraySection.classList.add("justify-content-center")

//con esto muestro todas las mascotas de la lista con sus datos
for (const petie of pets) {
    arraySection.innerHTML += ` 
    <article class="card w-25 d-flex">
            <h3 class= "text-center card-title">Name: ${petie.pet.name}</h3>
            <img src="${petie.pet.image}" class="card-img-top w-80 h-100 object-fit-content px-2" alt="${petie.pet.name}">
            <div class="card-body">
                <div>
                    <h2>Pet information</h2>
                    <p><strong>Specie: </strong>${petie.pet.species}</p>
                    <p><strong>Breed: </strong>${petie.pet.breed}</p>
                    <p><strong>Age: </strong>${petie.pet.age}</p>
                    <p><strong>Weight: </strong>${petie.pet.weight}</p>
                    <p><strong>Condition: </strong>${petie.pet.condition}</p>
                </div>

                <div>
                    <h2>owner information</h2>
                    <p><strong>Name: </strong>${petie.owner.name}</p>
                    <p><strong>Document: </strong>${petie.owner.document}</p>
                    <p><strong>Phone: </strong>${petie.owner.phone}</p>
                    <p><strong>Email: </strong>${petie.owner.email}</p> 
                </div>
            </div>

    </article>`}


let clickLista = document.getElementById("clickLista")

//lugar donde se muestra un titulo de la opcion ejecutada
let tituloListaNueva = document.getElementById("titulo-lista-nueva")

//lugar donde se muestra el resultado de cierta opcin
let arraySectionResultado = document.getElementById("zona-mostrar")

//permite ingresar una nueva mascota
clickLista.addEventListener("click", function () {
    limpiarEspacio()
    tituloListaNueva.innerHTML = "This is the new list"
})
clickLista.addEventListener("click", function mostrarResultado() {
    limpiarEspacio()
    for (const petie of pets) {
        arraySectionResultado.innerHTML += ` 
    <article class="card w-25 d-flex">
            <h3 class= "text-center card-title">Name: ${petie.pet.name}</h3>
            <img src="${petie.pet.image}" class="card-img-top w-80 h-100 object-fit-content px-2" alt="${petie.pet.name}">
            <div class="card-body">
                <div>
                    <h2>Pet information</h2>
                    <p><strong>Specie: </strong>${petie.pet.species}</p>
                    <p><strong>Breed: </strong>${petie.pet.breed}</p>
                    <p><strong>Age: </strong>${petie.pet.age}</p>
                    <p><strong>Weight: </strong>${petie.pet.weight}</p>
                    <p><strong>Condition: </strong>${petie.pet.condition}</p>
                </div>

                <div>
                    <h2>owner information</h2>
                    <p><strong>Name: </strong>${petie.owner.name}</p>
                    <p><strong>Document: </strong>${petie.owner.document}</p>
                    <p><strong>Phone: </strong>${petie.owner.phone}</p>
                    <p><strong>Email: </strong>${petie.owner.email}</p> 
                </div>
            </div>

    </article>`
    }
})

// muestra la lista de mascotas
let showPetList = document.getElementById("showPetList")
showPetList.addEventListener("click", function () {
    limpiarEspacio()
    tituloListaNueva.innerHTML = "This is the current list"
})
showPetList.addEventListener("click", function mostrarResultado() {
    limpiarEspacio()
    for (const petie of pets) {
        arraySectionResultado.innerHTML += ` 
<article class="card w-25 d-flex">
        <h3 class= "text-center card-title">Name: ${petie.pet.name}</h3>
        <img src="${petie.pet.image}" class="card-img-top w-80 h-100 object-fit-content px-2" alt="${petie.pet.name}">
        <div class="card-body">
            <div>
                <h2>Pet information</h2>
                <p><strong>Specie: </strong>${petie.pet.species}</p>
                <p><strong>Breed: </strong>${petie.pet.breed}</p>
                <p><strong>Age: </strong>${petie.pet.age}</p>
                <p><strong>Weight: </strong>${petie.pet.weight}</p>
                <p><strong>Condition: </strong>${petie.pet.condition}</p>
            </div>

            <div>
                <h2>owner information</h2>
                <p><strong>Name: </strong>${petie.owner.name}</p>
                <p><strong>Document: </strong>${petie.owner.document}</p>
                <p><strong>Phone: </strong>${petie.owner.phone}</p>
                <p><strong>Email: </strong>${petie.owner.email}</p> 
            </div>
        </div>

</article>`
    }
})

// muestra en mini listas los dueños de las mascotas y su informacion respectiva
let showAllThePetOwners = document.getElementById("ShowAllThePetOwners")
showAllThePetOwners.addEventListener("click", function () {
    limpiarEspacio()
    tituloListaNueva.innerHTML = "This is the list of the owners"
})
showAllThePetOwners.addEventListener("click", function mostrarResultado() {
    limpiarEspacio()
    for (const petie of pets) {
        arraySectionResultado.innerHTML += ` 
    <div class="card w-25 d-flex" style="">
    <ul class="list-group list-group-flush">
      <li class="list-group-item fs-4"><strong>Name:</strong>${petie.owner.name}</li>
      <li class="list-group-item fs-4"><strong>Document:</strong>${petie.owner.document}</li>
      <li class="list-group-item fs-4"><strong>Phone:</strong>${petie.owner.phone}</li>
      <li class="list-group-item fs-4"><strong>Email:</strong>${petie.owner.email}</li>
    </ul>
  </div>`
    }
})

//encuentra una mascota por su nombre
let FindAPetByItsName =document.getElementById("FindAPetByItsName") 
FindAPetByItsName.addEventListener("click", function () {
    limpiarEspacio()
    tituloListaNueva.innerHTML = "This is the pet you are looking for"
})
FindAPetByItsName.addEventListener("click", function buscarMascota() {
    limpiarEspacio()
    
        let datosMascota = buscarMascotaPorElNombre()
        if(datosMascota!=undefined){
            console.log(datosMascota.owner.name)
             arraySectionResultado.innerHTML= `<article class="card w-80 d-flex">
                <h3 class= "text-center card-title fs-1">Name: ${datosMascota.pet.name}</h3>
                <img src="${datosMascota.pet.image}" class="card-img-top w-60 h-100 object-fit-content px-2" alt="${datosMascota.pet.name}">
                <div class="card-body">
                    <div>
                        <h2 class = "fs-2">Pet information</h2>
                        <p class = "fs-4"><strong>Specie: </strong>${datosMascota.pet.species}</p>
                        <p class = "fs-4"><strong>Breed: </strong>${datosMascota.pet.breed}</p>
                        <p class = "fs-4"><strong>Age: </strong>${datosMascota.pet.age}</p>
                        <p class = "fs-4"><strong>Weight: </strong>${datosMascota.pet.weight}</p>
                        <p class = "fs-4"><strong>Condition: </strong>${datosMascota.pet.condition}</p>
                    </div>
    
                    <div>
                        <h2 class = "fs-2">owner information</h2>
                        <p class= "fs-4"><strong>Name: </strong>${datosMascota.owner.name}</p>
                        <p class= "fs-4"><strong>Document: </strong>${datosMascota.owner.document}</p>
                        <p class= "fs-4"><strong>Phone: </strong>${datosMascota.owner.phone}</p>
                        <p class= "fs-4"><strong>Email: </strong>${datosMascota.owner.email}</p> 
                    </div>
                </div>
    
        </article>`}
    
        else {
            arraySectionResultado.innerHTML= `<p class= "text-center fs-3">The pet you are trying to find is not in the list</p>`
        }
    })

//filtra y muestra las mascotas pertenecientes al mismo dueño
let FilterAndShowThePetsWhoBelongToASameOwner = document.getElementById("FilterAndShowThePetsWhoBelongToASameOwner")
FilterAndShowThePetsWhoBelongToASameOwner.addEventListener("click", function () {
    limpiarEspacio()
    tituloListaNueva.innerHTML = "These are all the owner's pet"
})
FilterAndShowThePetsWhoBelongToASameOwner.addEventListener("click", function buscarMascota() {

        let mascotasDueño = filtrarYMostrarMascotasMismoDueño()
        if(mascotasDueño!=undefined){
            limpiarEspacio()
             mascotasDueño.forEach(mascota => {
                arraySectionResultado.innerHTML+=`<article class="card w-50 d-flex">
                <h3 class= "text-center card-title fs-1">Name: ${mascota.pet.name}</h3>
                <img src="${mascota.pet.image}" class="card-img-top w-60 h-100 object-fit-content px-2" alt="${mascota.pet.name}">
                <div class="card-body">
                    <div>
                        <h2 class = "fs-2">Pet information</h2>
                        <p class = "fs-4"><strong>Specie: </strong>${mascota.pet.species}</p>
                        <p class = "fs-4"><strong>Breed: </strong>${mascota.pet.breed}</p>
                        <p class = "fs-4"><strong>Age: </strong>${mascota.pet.age}</p>
                        <p class = "fs-4"><strong>Weight: </strong>${mascota.pet.weight}</p>
                        <p class = "fs-4"><strong>Condition: </strong>${mascota.pet.condition}</p>
                    </div>
    
                    <div>
                        <h2 class = "fs-2">owner information</h2>
                        <p class= "fs-4"><strong>Name: </strong>${mascota.owner.name}</p>
                        <p class= "fs-4"><strong>Document: </strong>${mascota.owner.document}</p>
                        <p class= "fs-4"><strong>Phone: </strong>${mascota.owner.phone}</p>
                        <p class= "fs-4"><strong>Email: </strong>${mascota.owner.email}</p> 
                    </div>
                </div>
    
        </article>`
             });}
    
        else {
            limpiarEspacio()
            arraySectionResultado.innerHTML= `<p class= "text-center fs-3">The owner is not real</p>`
        }
    })

//se actualiza una informacion de una mascota en especifico
let UpdateAPetInformation = document.getElementById("UpdateAPetInformation")
UpdateAPetInformation.addEventListener("click",function() {
    limpiarEspacio()
    tituloListaNueva.innerHTML = `<p>This is the new pet's information</p>`
})
UpdateAPetInformation.addEventListener("click",function(){

    let nombreMascota = String(prompt("Ingrese el nombre de la mascota"))
    let nombreMascotaAlt = nombreMascota.toLowerCase()
    let petNameUbication = pets.findIndex(mascota=>mascota.pet.name ==nombreMascotaAlt)
    let petInformation = actualizarInformacionDeMascotaExistente(nombreMascota)
    

    console.log(petNameUbication)
    console.log(petInformation)
    if (petInformation==undefined) {
        limpiarEspacio()
        arraySectionResultado.innerHTML += ` 
        <article class="card w-60 d-flex">
                <h3 class= "text-center card-title">Name: ${pets[petNameUbication].pet.name}</h3>
                <img src="${pets[petNameUbication].pet.image}" class="card-img-top w-80 h-100 object-fit-content px-2" alt="${pets[petNameUbication].pet.name}">
                <div class="card-body">
                    <div>
                        <h2>Pet information</h2>
                        <p><strong>Specie: </strong>${pets[petNameUbication].pet.species}</p>
                        <p><strong>Breed: </strong>${pets[petNameUbication].pet.breed}</p>
                        <p><strong>Age: </strong>${pets[petNameUbication].pet.age}</p>
                        <p><strong>Weight: </strong>${pets[petNameUbication].pet.weight}</p>
                        <p><strong>Condition: </strong>${pets[petNameUbication].pet.condition}</p>
                    </div>
        
                    <div>
                        <h2>owner information</h2>
                        <p><strong>Name: </strong>${pets[petNameUbication].owner.name}</p>
                        <p><strong>Document: </strong>${pets[petNameUbication].owner.document}</p>
                        <p><strong>Phone: </strong>${pets[petNameUbication].owner.phone}</p>
                        <p><strong>Email: </strong>${pets[petNameUbication].owner.email}</p> 
                    </div>
                </div>
        
        </article>`
    }
    else{
        limpiarEspacio()
        arraySectionResultado.innerHTML += `<p class = "fs-2">The pet or the value written is not in the list</p>`
    }
})
    
// elimina una mascota seleccionada de la lista
let EraseAPetFromTheList = document.getElementById("EraseAPetFromTheList")
EraseAPetFromTheList.addEventListener("click", function cleanseList() {
    let mascotaEliminada = eliminarMascotaDeLista()

    if (mascotaEliminada!=undefined){      
        limpiarEspacio()
        pets.splice(mascotaEliminada,1)
        arraySectionResultado.innerHTML= `<p class = "fs-2">The pet has been erased successfully</p>`
    }
    else{
        limpiarEspacio() 
        arraySectionResultado.innerHTML= `<p class = "fs-2">La mascota no esta dentro de la lista</p>`
    }
})

//elima todas las mascotas de la lista
let CleanseAllThePetsInTheList = document.getElementById("CleanseAllThePetsInTheList")
CleanseAllThePetsInTheList.addEventListener("click", function () {
    limpiarEspacio()
    tituloListaNueva.innerHTML = "All the pets have been completely erased from the list"
})
CleanseAllThePetsInTheList.addEventListener("click", function cleanseList() {
    limpiarEspacio()
    for (let i = pets.length; i > -pets.length; i--) {
        pets.splice(i,1)
    }
    })

//con las siguientes tres funciones aplico el modo oscuro
let darkMode = () =>{
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#di-icon")
}
let lightMode = () =>{
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#di-icon")
}

let changeTheme = ()=>{
    document.querySelector("body").getAttribute("data-bs-theme") === "light"?
    darkMode():lightMode();
}

//con esto se crea una nueva mascota en el array
function registrarMascota() {

    let registrarNombre = () => {
        let nombreMascota = String(prompt("Ingrese el nombre de su mascota"))
        return nombreMascota.toLowerCase()
    }
    let registrarNombreReturn = registrarNombre()

    let registrarEspecie = () => {
        let especieMascota = String(prompt("Ingrese la especie de su mascota"))
        return especieMascota.toLowerCase()
    }
    let registrarEspecieReturn = registrarEspecie()

    let registrarRaza = () => {
        let razaMazcota = String(prompt("Ingrese la raza de su mascota"))
        return razaMazcota.toLowerCase()
    }
    let registrarRazaReturn = registrarRaza()

    let registrarEdad = () => {
        let fechaNacimiento = prompt(`Ingrese la fecha de nacimiento de su mascota en el formato:
YYYY/MM/DD`)
        let fechaNacimientoDate = new Date(fechaNacimiento).getFullYear()
        let fechaActual = new Date().getFullYear()
        let edad = Math.abs(fechaActual - fechaNacimientoDate)
        return edad
    }
    let registrarEdadReturn = registrarEdad()

    let registrarPeso = () => {
        let pesoMascota = Number(prompt("Ingrese el valor nunerico del peso de su mascota"))
        return pesoMascota
    }
    let registrarPesoReturn = registrarPeso()

    let registrarEstado = () => {
        let estadoMascota = Number(prompt(`1.Estable
2.Critico
Escriba el numero de la opcion que describa el estado de su mascota`))
        if (estadoMascota == 1) {
            return "Estable"
        }
        else {
            return "critico"
        }
    }
    let registrarEstadoReturn = registrarEstado()

    let resgistrarNombrePropietario = () => {
        let nombrePropietario = String(prompt("Ingrese su nombre"))
        return nombrePropietario.toLowerCase()
    }
    let registrarNombrePropietarioReturn = resgistrarNombrePropietario()

    let registrarDocumentoPropietario = () => {
        let documentoPropietario = Number(prompt("Ingrese su documento"))
        return documentoPropietario
    }
    let registrarDocumentoPropietarioReturn = registrarDocumentoPropietario()

    let registrarTelefonoDeContacto = () => {
        let telefonoDeContacto = Number(prompt("Ingrese su telefono de contacto"))
        return telefonoDeContacto
    }
    let registrarTelefonoDeContactoReturn = registrarTelefonoDeContacto()

    let registrarCorreoDelPropietario = () => {
        let correoDelPropietario = String(prompt("Ingrese su correo electronico"))
        return correoDelPropietario
    }
    let registrarCorreoDelPropietarioReturn = registrarCorreoDelPropietario()

    let registrarFotoDeLaMascota = () => {
        let fotoDeLaMascota = String(prompt("Ingrese la url de la foto de su mascota"))
        return fotoDeLaMascota
    }
    let registrarFotoDeLaMascotaReturn = registrarFotoDeLaMascota()

    let mascotanueva = {
        pet: {
            name: registrarNombreReturn,
            species: registrarEspecieReturn,
            breed: registrarRazaReturn,
            age: registrarEdadReturn,
            weight: registrarPesoReturn,
            condition: registrarEstadoReturn,
            image: registrarFotoDeLaMascotaReturn,
        },
        owner: {
            name: registrarNombrePropietarioReturn,
            document: registrarDocumentoPropietarioReturn,
            phone: registrarTelefonoDeContactoReturn,
            email: registrarCorreoDelPropietarioReturn
        }

    }
    pets.push(mascotanueva)
}

//Buscador de mascotas por nombre
function buscarMascotaPorElNombre() {

    let mascotaBuscada = String(prompt("Ingrese el nombre de la mascota que desee encontrar"))
    let mascotaBuscadaAlt = mascotaBuscada.toLowerCase()
    let verificacionDeExistencia = pets.some((mascota) => {
        return mascota.pet.name == mascotaBuscadaAlt
    })

    if (verificacionDeExistencia == true) {
        let datosMascota = pets.find(mascota =>
            mascota.pet.name == mascotaBuscadaAlt)
        return datosMascota
    }
            
    else {
        return undefined
    }
}

//con esto se muestran las mascotas correspondientes a un dueño
function filtrarYMostrarMascotasMismoDueño() {
    let nombreDelDueñoDeLaMascota = String(prompt("Ingrese el nombre de la persona para conocer que mascotas posee"))
    let nombreDelDueñoDeLaMascotaAlt = nombreDelDueñoDeLaMascota.toLowerCase()
    let verificacionExistenciaPersona = pets.some((dueño) => { return dueño.owner.name == nombreDelDueñoDeLaMascotaAlt })

    if (verificacionExistenciaPersona == true) {
        let mascotasDelDueño = pets.filter((ubicacionMascota) => {
            return ubicacionMascota.owner.name == nombreDelDueñoDeLaMascotaAlt
        })
        return mascotasDelDueño
    }
    else {
        return undefined
    }
}

//Con esto se actualiza informacion de mascotas ya vigentes
function actualizarInformacionDeMascotaExistente(nombreMascota) {
    let nombreMascotaAlt = nombreMascota.toLowerCase()
    let verificacionExistenciaMascota = pets.some((mascota) => { return mascota.pet.name == nombreMascotaAlt })

    if (verificacionExistenciaMascota == true) {

        let indiceMascota = pets.findIndex(mascota => mascota.pet.name == nombreMascotaAlt)
        
        let informacionACambiar = Number(prompt(`Ingrese el numero que corresponda a la informacion que desea cambiar:
                0. Nombre
                1. Especie
                2. Raza
                3. Edad
                4. peso
                5. Estado
                6. Nombre del propietario
                7. Documento del dueño
                8. Telefono de contacto
                9. Correo del propietario
                10. Cambiar la imagen de la mascota`))

        switch (informacionACambiar) {

            case 0:

                let nuevoValorNombre = String(prompt("Ingrese el nuevo nombre de la mascota"))
                let nuevoValorNombreAlt = nuevoValorNombre.toLowerCase()
                pets[indiceMascota].pet.name = nuevoValorNombreAlt
                
                break;

            case 1:

                let nuevoValorEspecie = String(prompt("Ingrese la nueva especie de la mascota"))
                let nuevoValorEspecieAlt = nuevoValorEspecie.toLowerCase()
                pets[indiceMascota].pet.species = nuevoValorEspecieAlt
                break;


            case 2:

                let nuevoValorRaza = String(prompt("Ingrese la nueva raza de la mascota"))
                let nuevoValorRazaAlt = nuevoValorRaza.toLowerCase()
                pets[indiceMascota].pet.breed = nuevoValorRazaAlt
                break;


            case 3:

                let registrarEdad = () => {
                    let fechaNacimiento = prompt(`Ingrese la fecha de nacimiento de su mascota en el formato:
                    YYYY/MM/DD`)
                    let fechaNacimientoDate = new Date(fechaNacimiento).getFullYear()
                    let fechaActual = new Date().getFullYear()
                    let edad = Math.abs(fechaActual - fechaNacimientoDate)
                    return edad
                }
                let registrarEdadReturn = registrarEdad()
                pets[indiceMascota].pet.age = registrarEdadReturn
                break;


            case 4:

                let nuevoValorPeso = Number(prompt("Ingrese el numero correspondiente al valor de peso de su mascota"))
                pets[indiceMascota].pet.weight = nuevoValorPeso
                break;


            case 5:

                let registrarEstado = () => {
                    let estadoMascota = Number(prompt(
                        `1.Estable
2.Critico
Escriba el numero de la opcion que describa el estado de su mascota`))
                    if (estadoMascota == 1) {
                        return "Estable"
                    }
                    else {
                        return "critico"
                    }
                }

                let registrarEstadoReturnAlt = registrarEstado()

                pets[indiceMascota].pet.condition = registrarEstadoReturnAlt
                break;


            case 6:

                let nuevoValorNombrePropietario = String(prompt("Ingrese el nuevo nombre del propietario"))
                let nuevoValorNombrePropietarioAlt = nuevoValorNombrePropietario.toLowerCase()
                pets[indiceMascota].owner.name = nuevoValorNombrePropietarioAlt
                break;


            case 7:

                let nuevoValorDocumentoDelDueño = Number(prompt("Ingrese el nuevo documento del dueño"))
                pets[indiceMascota].owner.document = nuevoValorDocumentoDelDueño
                break;

            case 8:

                let nuevoValorTelefonoDeContacto = String(prompt("Ingrese el nuevo telefono de contacto"))
                pets[indiceMascota].owner.phone = nuevoValorTelefonoDeContacto
                break;

            case 9:

                let nuevoValorCorreoDelPropietario = String(prompt("Ingrese el nuevo correo del propietario"))
                pets[indiceMascota].owner.email = nuevoValorCorreoDelPropietario
                break;

            case 10:
                let nuevoValorFotoMascota = String(prompt("Ingrese la url de la nueva imagen de la mascota"))
                pets[indiceMascota].pet.image = nuevoValorFotoMascota
                break;

            default:
                break;
        }

    }
    else {
        return null
    }
}

//con esto se elimina objetos del array de mascotas
function eliminarMascotaDeLista() {
    let nombreMascota = String(prompt("Ingrese el nombre de la mascota que desee eliminar"))
    let nombreMascotaAlt = nombreMascota.toLowerCase()
    let verificacionExistenciaMascota = pets.some((mascota) => { return mascota.pet.name == nombreMascotaAlt })

    if (verificacionExistenciaMascota == true) {

        let indiceMascota = pets.findIndex(mascota => mascota.pet.name == nombreMascotaAlt)

        return indiceMascota

    }
    else {
        return undefined
    }
}

//con esto elimino el contenido previo que aparecia antes de usar una opcion del menu
function limpiarEspacio() {
    arraySectionResultado.innerHTML = ""
}
