let bestHuntingDogs = [
    {
        name: "Beagle",
        description: "Medium-sized tracker, friendly, and energetic",
        maximumAge: 15,
        image: "./public/images/beagle.webp"
    },
    {
        name: "Bloodhound",
        description: "Large tracker, calm, affectionate, renowned for exceptional scent tracking",
        maximumAge: 12,
        image: "./public/images/bloodhound.webp"
    },
    {
        name: "German Shorthaired Pointer",
        description: "Versatile hunting dog, intelligent, loyal, with excellent sense of smell",
        maximumAge: 14,
        image: "./public/images/bracoaleman.webp"
    },
    {
        name: "Cocker Spaniel",
        description: "Compact, cheerful companion dog, known for long ears and tail",
        maximumAge: 15,
        image: "./public/images/cocker.webp"
    },
    {
        name: "Labrador Retriever",
        description: "Friendly, versatile working and companion dog, extremely popular",
        maximumAge: 12,
        image: "./public/images/labrado.webp"
    },
    {
        name: "Podenco",
        description: "Mediterranean hunting breed, agile, energetic, with strong endurance and scenting ability",
        maximumAge: 14,
        image: "./public/images/podenco.webp"
    },
    {
        name: "Pointer",
        description: "Elegant, athletic hunting dog, with great stamina and tracking abilities",
        maximumAge: 14,
        image: "./public/images/pointeringles.webp"
    },
    {
        name: "Italian Hound",
        description: "Ancient tracking breed, calm, dedicated, with excellent scenting ability",
        maximumAge: 12,
        image: "./public/images/sabuesobavaro.webp"
    },
    {
        name: "Bavarian Mountain Hound",
        description: "Robust, brave hunting dog, known for tracking in challenging terrain",
        maximumAge: 14,
        image: "./public/images/sabuesoitaliano.webp"
    },
    {
        name: "English Setter",
        description: "Elegant, active hunting dog, noble, affectionate, with beautiful long coat",
        maximumAge: 15,
        image: "./public/images/setteringles.webp"
    }
];


let sectionForDogs = document.querySelector("section")

sectionForDogs.classList.add("width:100%;")
sectionForDogs.classList.add("d-flex")
sectionForDogs.classList.add("flex-wrap")
sectionForDogs.classList.add("justify-content-center")
sectionForDogs.classList.add("gap-5")




for (let i = 0; i < bestHuntingDogs.length; i++) {
    sectionForDogs.innerHTML += `<div class="card" style="width: 22%; display:flex; justify-content:center;">
        <img src="${bestHuntingDogs[i].image}" class="card-img-top" alt="${bestHuntingDogs[i].name} title = "${bestHuntingDogs[i].description}" " >
        <div class="card-body">
            <h5 class="card-title">${bestHuntingDogs[i].name}</h5>
            <p class="card-text">${bestHuntingDogs[i].description}.</p>
            <a href="https://www.micachorro.net/los-mejores-perros-para-la-caza-las-10-razas-mas-adecuadas/" class="btn btn-primary">Clicl to know more</a>
        </div>
    </div > `
    
}