export function codersListV1(coders) {
    tbody.innerHTML= ""
    coders.forEach(coder => {
    let tbody = document.querySelector("#tbody")

    let tr = document.createElement("tr")

    let tdId = document.createElement("td")
    tdId.setAttribute("scope", "row")
    tdId.textContent = `${coder.id}`

    let tdName = document.createElement("td")
    tdName.textContent = `${coder.name}`

    let tdLastName = document.createElement("td")
    tdLastName.textContent = `${coder.lastName}`

    let tdEmail = document.createElement("td")
    tdEmail.textContent = `${coder.email}`

    tr.append(tdId)
    tr.append(tdName)
    tr.append(tdLastName)
    tr.append(tdEmail)
    tbody.append(tr)
})
} 

export function codersListV2(coders) {
    coders.forEach(coder=>{
    tbody.innerHTML += `
<tr>
    <th scope="row">${coder.id}</th>
    <td>${coder.name}</td>
    <td>${coder.lastName}</td>
    <td>${coder.email}</td>
</tr>`
})
}

export function codersListV3(coders) {
    coders.forEach(coder => {
    let tbody = document.querySelector("#tbody")

    let tr = document.createElement("tr")

    for (let i = 0; i < 4; i++) {
        const td = document.createElement("td");
        tr.append(td)
    }
    tr.children[0].textContent = `${coder.id}`
    tr.children[1].textContent = `${coder.name}`
    tr.children[2].textContent = `${coder.lastName}`
    tr.children[3].textContent = `${coder.email}`
    tbody.append(tr)
}
)
}

export function create(coders,name,lastName,email) {
        let temporalCoder = 
        {
        id:coders.length+1,
        name: name.value,
        lastName: lastName.value,
        email: email.value}
coders.push(temporalCoder)
}

export function erase(coders,id) {
    coders.forEach(coder => {
        if (coder.id == id) {
            let ubication = coders.indexof(coder)
            console.log(ubication)
            coders.splice(ubication, 1)
        }
    })
}