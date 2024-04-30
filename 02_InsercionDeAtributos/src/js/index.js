const main = document.querySelector("main")

for (let i = 0; i < 70; i++) {
    main.innerHTML += `
    <div class="card border border-5"   style="width:  18rem;">
    <img src="./public/images/pastor-belga.webp" alt="Pastor belga" class="card-img-top" title="Pastor Belga">
    <div class="card-body">
        <h5 class="card-title text-capitalize" >pedro</h5>
        <p class="card-text">El mejor perrito del mundo.</p>
        <p><strong>Edad:</strong> 5 años</p>
        <p><strong>Raza:</strong> Pitbull</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>`
    
}