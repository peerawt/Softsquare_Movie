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
      let current = new Set();
      for (let i = 0; i < 5; i++) {
        let rand = Math.random()*10;
         rand = Math.floor(rand) ;
        
        while(current.has(rand)){
           rand = Math.random()*10;
           rand = Math.floor(rand) ;
        }
        current.add(rand) ;
        console.log(current);
        
        // console.log(rand)
        document.getElementById(
          "show_products"
        ).innerHTML += ` <div class="card p-3"  style="width: 18rem;">
                                        <img src="${json[rand].image}" class="w-100 card-img-top" alt="..." />
                                        <div class="card-body">
                                          <h5 class="card-title">${json[rand].name}</h5>
                                            
                                           <a href="movieDetail.html" type="button"
              class="btn btn-outline-secondary btn-outline-light rounded-pill">Action</a>
            <button type="button"
              class="btn btn-outline-secondary btn-outline-light rounded-pill">120
              mins</button>
                                        </div>
                                        <a href="movieDetail.html?movieId=${json[rand].id}" class="stretched-link"></a>
                                      </div>`;
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
