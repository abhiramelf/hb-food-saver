const dishContainer = document.querySelector(".dish__container");
const saveButton = document.getElementById("Save");

const newCard = ({id, imageUrl, dishName, restaurantName, dishDescription}) => `
<div class="col-md-6 col-lg-4" id=${id}>
<div class="card">
  <div class="d-flex gap-2 card-header justify-content-end">
    <button type="button" class="btn btn-outline-primary"><i class="far fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger"><i class="far fa-trash-alt"></i></button>
  </div>
  <div class="card-body">
    <img src=${imageUrl} class="card-img-top mb-4" alt="">
    <h5 class="card-title">${dishName}</h5>
    <p class="card-text">${dishDescription}</p>
    <span class="badge bg-success">${restaurantName}</span>
  </div>
  <div class="d-flex card-footer text-muted justify-content-end">
    <button type="button" class="btn btn-outline-success"><i class="fas fa-hamburger"></i> Open Dish</button>
  </div>
</div>
</div>`

saveButton.addEventListener("click", saveChanges);

function saveChanges() {
    const dishData = {
        id: `${Date.now()}`, // time as a unique id for each dish
        imageUrl: document.getElementById("imageurl").value,
        dishName: document.getElementById("dishname").value,
        restaurantName: document.getElementById("restaurantname").value,
        dishDescription: document.getElementById("dishdescription").value,
    };

    const createdCard = newCard(dishData);

    dishContainer.insertAdjacentHTML("beforeend", createdCard);
}