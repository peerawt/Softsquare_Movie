document.addEventListener("DOMContentLoaded", (event) => {
  const search = window.location.search;
  //console.log("🚀 ~ document.addEventListener ~ search:", search)
  const urlParams = new URLSearchParams(search);
  //console.log("🚀 ~ document.addEventListener ~ urlParams:", urlParams)
  // const movieId = urlParams.get('movieId');
  //console.log("🚀 ~ document.addEventListener ~ movieId:", movieId)

  fetch("movie.json")
    .then((response) => response.json())
    .then((json) => {
      // console.log(json.length);
      for (let i = 0; i < json.length; i++) {
        // console.log(rand)
        document.getElementById(
          "show_products"
        ).innerHTML += `<div class="card" style="width: 16rem;">
                                          <img src="${json[i].image}" class="card-img-top" alt="..." />
                                          <div class="card-body">
                                            <h5 class="card-title">${json[i].name}</h5>
                                             <div class="time-button">
                                              <button type="button"class="btn btn-outline-secondary btn-outline-light rounded-pill">Action</button>
                                              <button type="button"class="btn btn-outline-secondary btn-outline-light rounded-pill">120 mins</button>
                                              </div>
                                              <a href="movieDetail.html?movieId=${json[i].id}" class="stretched-link"></a>
                                            </div>
                                            `;
      }
      // const foundJson = json.find(j => j.id === movieId)
      // if(foundJson){
      //     document.getElementById('card-title').innerText = foundJson.name;
      //     document.getElementById('image').src = foundJson.image;
      //     document.getElementById('rate').innerText = foundJson.rate;
      //     document.getElementById('description').innerText = foundJson.description;
      //     document.getElementById('sample').src = foundJson.sample;
      // }
    });
});
