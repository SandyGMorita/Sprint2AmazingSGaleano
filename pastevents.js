const cardContainer = document.getElementById("cardContainer");
let templateCard= ""

for (let event of apiData.events){
    if (apiData.currentDate >= event.date) {
        templateCard += `<div class="card" style="width: 18rem;">
<div class="card-body">
<img src="${event.image}" class="card-img-top" alt="...">
<h5 class="card-title">${event.name}</h5>
<a href="#" class="btn btn-primary">Go somewhere</a>
<p class="card-text">${event.description}</p>
</div>
</div>`
    }
}
cardContainer.innerHTML = templateCard