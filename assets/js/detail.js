const API_URL = 'https://fakestoreapi.com/products';
const id = new URLSearchParams(window.location.search).get("id");
const goBackBtn = document.querySelector(".goBackBtn")

const row = document.querySelector(".detailRow")
fetch(API_URL + `/${id}`)
  .then((res) => res.json())
  .then((detaildata) => {
    console.log(detaildata);
      row.innerHTML = `
      <div class="col-lg-6">
                <div class="card-img">
                    <img style="width: 100%;height: 70vh;object-fit: contain;object-position: center; " src="${detaildata.image}" alt="">
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card-desc">
                    <h3>${detaildata.title}</h3>
                    <p class="card-text"><b>Price:</b> ${detaildata.price}</p>
                    <p class="card-text"><b>Category:</b> ${detaildata.category}</p>
                    <p class="card-text"><b>Count:</b> ${detaildata.rating.count}</p>
                    <p class="card-text"><b>Description:</b> ${detaildata.description}</p>
                    <p class="card-text"><b>Rating:</b><i style="color:gold;" class=" bi bi-star-fill"></i><i style="color:gold;" class=" bi bi-star-fill"></i><i style="color:gold;" class=" bi bi-star-fill"></i><i style="color:gold;" class=" bi bi-star-fill"></i><i style="color:gold;" class=" bi bi-star-fill"></i> ${detaildata.rating.rate}</p>
                </div>
            </div>
        `;

  });
  goBackBtn.addEventListener('click',()=>{
    history.back()
  })