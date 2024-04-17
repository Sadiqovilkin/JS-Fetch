
const row = document.querySelector(".getApiData")
const searchInp = document.querySelector(".searchInp")
const API_URL = 'https://fakestoreapi.com/products'
let products = [];

fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    products = data;
    renderdata(data);
  });

function renderdata(arr) {
row.innerHTML = ''
arr.map((el) => {
    row.innerHTML += `
    <div class="col-lg-3 col-md-6 col-sm-12 g-4">
    <div class="card p-2" style="min-height: 550px;">
        <img width="200" height="250" src="${el.image}" class="object-fit-contain card-img-top" alt="">
        <div class="card-body">
        <h5 class=" fs-2card-title">${el.title}</h5>
        <p class="card-text"><b>Price:</b> ${el.price} </p>
        <p class="card-text"><b>Category:</b> ${el.category} </p>
        <p class="card-text"><b>Rating:</b> ${el.rating.rate}  <i style="color:gold;" class=" bi bi-star-fill"></i></p>
        
        </div>
        <a href="detail.html?id=${el.id}" class="btn btn-outline-primary">Detail</a>
    </div>
</div>
    `;
});
}



  searchInp.addEventListener('input', function () {
    search(products, this.value)
  })
  function search(arr,string) {
    
    const searchValue = string.trim().toLowerCase()
      
    const filteredData = arr.filter((x)=>
        x.title.trim().toLowerCase().includes(searchValue)

    )

    renderdata(filteredData)
    
  }