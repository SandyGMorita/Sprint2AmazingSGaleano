const cardContainer = document.getElementById("cardContainer");

//console.log(apiData);

let tarjetas = ""


for (elemento of apiData.events) {

    tarjetas += '<div class="card" style="width: 18rem;">
    <img src="${elemento.image}" class="card-img-top" alt="imagen">
    <div class="card-body">
      <h5 class="card-title">${elemento.name}</h5>
      <p class="card-text">${elemento.description}.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>' 
    
}
cardContainer.innerHTML = tarjetas