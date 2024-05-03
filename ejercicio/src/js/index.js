//nombre:Mateo Montoya Ospina
//clan:Gates
//Dia de inicio: 26 de Abril de 2024

//lista en donde guardo las mascotas
// let mascotas = [

//     {
//         nombre: "luna",
//         especie: "perro",
//         raza: "astor belga malinois",
//         edad: 5,
//         peso: 25,
//         estado: "Estable",
//         "nombre propietario": "maría garcía",
//         "documento del dueño": 1122334455,
//         "telefono de contacto": 555_1234_5678,
//         "correo del propietario": "maria_garcia@amogus.com"
//     },

//     {
//         nombre: "max",
//         especie: "gato",
//         raza: "sphynx",
//         edad: 6,
//         peso: 7,
//         estado: "Critico",
//         "nombre propietario": "alejandro martínez",
//         "documento del dueño": 2233445566,
//         "telefono de contacto": 555_2345_6789,
//         "correo del propietario": "alejandro_martinez@amogus.com"
//     },

//     {
//         nombre: "bella",
//         especie: "conejo",
//         raza: "angora",
//         edad: 3,
//         peso: 4,
//         estado: "Estable",
//         "nombre propietario": "sofía rodríguez",
//         "documento del dueño": 3344556677,
//         "telefono de contacto": 555_3456_7890,
//         "correo del propietario": "sofia_rodrigue@amogus.com"
//     },

//     {
//         nombre: "rocky",
//         especie: "hurón",
//         raza: "hurón de patas negras",
//         edad: 2,
//         peso: 12,
//         estado: "Critico",
//         "nombre propietario": "carlos lópez",
//         "documento del dueño": 4455667788,
//         "telefono de contacto": 555_4567_8901,
//         "correo del propietario": "carloz_lopez@amongus.com"
//     },

//     {
//         nombre: "coco",
//         especie: "perico",
//         raza: "cotorra Argentina",
//         edad: 4,
//         peso: 0.5,
//         estado: "Estable",
//         "nombre propietario": "ana pérez",
//         "documento del dueño": 5566778899,
//         "telefono de contacto": 555_5678_9012,
//         "correo del propietario": "ana_perez@amongus.com"
//     },

//     {
//         nombre: "simba",
//         especie: "serpiente",
//         raza: "pitón real",
//         edad: 7,
//         peso: 3,
//         estado: "Critico",
//         "nombre propietario": "andrea ruiz",
//         "documento del dueño": 6677889900,
//         "telefono de contacto": 555_6789_0123,
//         "correo del propietario": "juan_hernandez@amongus.com"
//     },

//     {
//         nombre: "lola",
//         especie: "cerdo",
//         raza: "mini cerdo Vietnamita",
//         edad: 6,
//         peso: 15,
//         estado: "Estable",
//         "nombre propietario": "laura díaz",
//         "documento del dueño": 7788990011,
//         "telefono de contacto": 555_7890_1234,
//         "correo del propietario": "laura_diaz@amongus.com"
//     },

//     {
//         nombre: "toby",
//         especie: "tortuga",
//         raza: "tortuga de orejas rojas",
//         edad: 3,
//         peso: 2,
//         estado: "Critico",
//         "nombre propietario": "pablo gómez",
//         "documento del dueño": 7788990011,
//         "telefono de contacto": 555_8901_2345,
//         "correo del propietario": "pablo_gomez@amongus.com"
//     },

//     {
//         nombre: "daisy",
//         especie: "hurón",
//         raza: "hurón europeo"
//         , edad: 3
//         , peso: 8,
//         estado: "critico",
//         "nombre propietario": "andrea ruiz",
//         "documento del dueño": 9900112233,
//         "telefono de contacto": 555_9012_3456,
//         "correo del propietario": "andrea_ruiz@amongus.com"
//     },

//     {
//         nombre: "charlie",
//         especie: "conejo"
//         , raza: "conejo cabeza de león"
//         , edad: 2
//         , peso: 6,
//         estado: "critico"
//         , "nombre propietario": "david fernández",
//         "documento del dueño": 9911223344,
//         "telefono de contacto": 555_0123_4567,
//         "correo del propietario": "david_fernandez@amongus.com"
//     },

// ]

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
            name: "andrea ruiz",
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

let arraySection = document.getElementById("pets-array")
arraySection.classList.add("d-flex")
arraySection.classList.add("flex-wrap")
arraySection.classList.add("gap-2")
arraySection.classList.add("justify-content-center")

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
                    <p><strong>Name: </strong>${petie.owner.email}</p> 
                </div>
            </div>

    </article>`}




    let arraySectionResultado = document.getElementById("resultadoAccion")
    arraySectionResultado.classList.add("d-flex")
    arraySectionResultado.classList.add("flex-wrap")
    arraySectionResultado.classList.add("gap-2")
    arraySectionResultado.classList.add("justify-content-center")
    
    function mostrarResultado() {
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
                        <p><strong>Name: </strong>${petie.owner.email}</p> 
                    </div>
                </div>
    
        </article>`
    }}



//con esto se crea una nueva mascota en el array
function registrarMascota(listaDeMascotas) {

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
    
    let registrarFotoDeLaMascota = () =>{
        let fotoDeLaMascota = String(prompt("Ingrese la url de la foto de su mascota"))
        return fotoDeLaMascota
    }
    let registrarFotoDeLaMascotaReturn = registrarFotoDeLaMascota()

    let mascotanueva = { 
        pet:{
        name: registrarNombreReturn,
        species: registrarEspecieReturn,
        breed: registrarRazaReturn,
        age: registrarEdadReturn,
        weight: registrarPesoReturn,
        condition: registrarEstadoReturn,
        image: registrarFotoDeLaMascotaReturn,
    },
    owner:{
        name: registrarNombrePropietarioReturn,
        document: registrarDocumentoPropietarioReturn,
        phone: registrarTelefonoDeContactoReturn,
        email: registrarCorreoDelPropietarioReturn
    }

    }
    pets.push(mascotanueva)
}

//muestra todas las mascotas registradas y sus datos
// function verListaMascotasRegistradas(listaDeMascotas) {
//     listaDeMascotas.forEach((ubicacionMascota) => {
//         console.log(
// `nombre: ${ubicacionMascota.pet.name}
// especie: ${ubicacionMascota.pet.species}
// raza: ${ubicacionMascota.pet.breed}
// edad: ${ubicacionMascota.pet.age}
// peso: ${ubicacionMascota.pet.weight}
// estado: ${ubicacionMascota.pet.condition}

// nombre propietario: ${ubicacionMascota.owner.name}
// documento del dueño: ${ubicacionMascota["documento del dueño"]}
// telefono de contacto: ${ubicacionMascota["telefono de contacto"]}
// correo del propietario: ${ubicacionMascota["correo del propietario"]}
// `)
//     })
// }

//con esto se muestran las mascotas y su dueño
function verListaDeLosDueños(listaDeMascotas) {
    listaDeMascotas.forEach((ubicacionMascota) => {
        console.log(`La mascota: ${ubicacionMascota.nombre} le pertenece al dueño: ${ubicacionMascota["nombre propietario"]}`)
    })
}

//Buscador de mascotas por nombre
function buscarMascotaPorElNombre(listaDeMascotas) {

    let mascotaBuscada = String(prompt("Ingrese el nombre de la mascota que desee encontrar"))
    let mascotaBuscadaAlt = mascotaBuscada.toLowerCase()
    let verificacionDeExcistencia = listaDeMascotas.some((mascota) => {
        return mascota.nombre == mascotaBuscadaAlt
    })

    if (verificacionDeExcistencia == true) {
        let datosMascota = listaDeMascotas.find(mascota =>
            mascota.nombre == mascotaBuscadaAlt)
        console.log(`La mascota se encuentra dentro de la lista con los datos:
nombre: ${datosMascota.nombre}
especie: ${datosMascota.especie}
raza: ${datosMascota.raza}
edad: ${datosMascota.edad}
peso: ${datosMascota.peso}
estado: ${datosMascota.estado}
nombre propietario: ${datosMascota["nombre propietario"]}
documento del dueño: ${datosMascota["documento del dueño"]}
telefono de contacto: ${datosMascota["telefono de contacto"]}
correo del propietario: ${datosMascota["correo del propietario"]}`)
    }

    else {
        console.log("La mascota:", mascotaBuscadaAlt, "no se encuentra en nuestra lista de mascotas")
    }
}

//con esto se muestran las mascotas correspondientes a un dueño
function filtrarYMostrarMascotasMismoDueño(listaDeMascotas) {
    let nombreDelDueñoDeLaMascota = String(prompt("Ingrese el nombre de la persona para conocer que mascotas posee"))
    let nombreDelDueñoDeLaMascotaAlt = nombreDelDueñoDeLaMascota.toLowerCase()
    let verificacionExistenciaPersona = listaDeMascotas.some((dueño) => { return dueño["nombre propietario"] == nombreDelDueñoDeLaMascotaAlt })

    if (verificacionExistenciaPersona == true) {
        let mascotasDelDueño = listaDeMascotas.filter((ubicacionMascota) => {
            return ubicacionMascota["nombre propietario"] == nombreDelDueñoDeLaMascotaAlt
        })
       mascotasDelDueño.forEach((mascota,index)=>{
        console.log(
`Mascota N° ${index+1}
nombre: ${mascota.nombre}
especie: ${mascota.especie}
raza: ${mascota.raza}
edad: ${mascota.edad}
peso: ${mascota.peso}
estado: ${mascota.estado}
nombre propietario: ${mascota["nombre propietario"]}
documento del dueño: ${mascota["documento del dueño"]}
telefono de contacto: ${mascota["telefono de contacto"]}
correo del propietario: ${mascota["correo del propietario"]}
`)
       })
    }
    else {
        console.log("El dueño no existe")
    }
}

//Con esto se actualiza informacion de mascotas ya vigentes
function actualizarInformacionDeMascotaExistente(listaDeMascotas) {
    let nombreMascota = String(prompt("Ingrese el nombre de la mascota"))
    let nombreMascotaAlt = nombreMascota.toLowerCase()
    let verificacionExistenciaMascota = listaDeMascotas.some((mascota) => { return mascota.nombre == nombreMascotaAlt })

    if (verificacionExistenciaMascota == true) {

        let indiceMascota = listaDeMascotas.findIndex(mascota => mascota.nombre == nombreMascotaAlt)

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
                listaDeMascotas.pet.name = nuevoValorNombreAlt
                break;

            case 1:

                let nuevoValorEspecie = String(prompt("Ingrese la nueva especie de la mascota"))
                let nuevoValorEspecieAlt  = nuevoValorEspecie.toLowerCase()
                listaDeMascotas.pet.species = nuevoValorEspecieAlt
                break;


            case 2:

                let nuevoValorRaza = String(prompt("Ingrese la nueva raza de la mascota"))
                let nuevoValorRazaAlt = nuevoValorRaza.toLowerCase()
                listaDeMascotas.pet.breed = nuevoValorRazaAlt
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
                listaDeMascotas.pet.age = registrarEdadReturn
                break;


            case 4:

                let nuevoValorPeso = Number(prompt("Ingrese el numero correspondiente al valor de peso de su mascota"))
                listaDeMascotas.pet.weight = nuevoValorPeso
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

                listaDeMascotas.pet.condition = registrarEstadoReturnAlt
                break;


            case 6:

                let nuevoValorNombrePropietario = String(prompt("Ingrese el nuevo nombre del propietario"))
                let nuevoValorNombrePropietarioAlt = nuevoValorNombrePropietario.toLowerCase()
                listaDeMascotas.owner.name = nuevoValorNombrePropietarioAlt
                break;


            case 7:

                let nuevoValorDocumentoDelDueño = Number(prompt("Ingrese el nuevo documento del dueño"))
                listaDeMascotas.owner.document = nuevoValorDocumentoDelDueño
                break;

            case 8:

                let nuevoValorTelefonoDeContacto = String(prompt("Ingrese el nuevo telefono de contacto"))
                listaDeMascotas.owner.phone = nuevoValorTelefonoDeContacto
                break;

            case 9:

                let nuevoValorCorreoDelPropietario = String(prompt("Ingrese el nuevo correo del propietario"))
                listaDeMascotas.owner.email = nuevoValorCorreoDelPropietario
                break;

            case 10:
                let nuevoValorFotoMascota = String(prompt("Ingrese la nueva imagen de la mascota"))
                listaDeMascotas.pet.image = nuevoValorFotoMascota
                break;

            default:
                alert("El valor escrito no corresponde a ninguna opcion")
                break;
        }

    }
    else {
        alert("La mascota no existe")
    }
}

//con esto se elimina objetos del array de mascotas
function eliminarMascotaDeLista(listaDeMascotas) {
    let nombreMascota = String(prompt("Ingrese el nombre de la mascota que desee eliminar"))
    let nombreMascotaAlt = nombreMascota.toLowerCase()
    let verificacionExistenciaMascota = listaDeMascotas.some((mascota) => { return mascota.pet.name == nombreMascotaAlt })

    if (verificacionExistenciaMascota == true) {

        let indiceMascota = listaDeMascotas.findIndex(mascota => mascota.pet.name == nombreMascotaAlt)

        listaDeMascotas.splice(indiceMascota,1)

        alert("La mascota ha sido eliminada")

    }
    else {
        alert("La mascota no existe")
    }
}




