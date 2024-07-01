document.addEventListener("DOMContentLoaded", (event) => {
    let watchlist = JSON.parse(sessionStorage.getItem('movie')) || [];
    const cardWrap = document.querySelector('.card-wrap');
    
    watchlist.forEach(movie => {
        createCard(movie.id,movie.name, movie.image);
    });

    function createCard(id, name, image) {
        let code = `
        <div class="card" style="width: 13rem;">
            <img id="image" src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
                <p id="title" class="card-text">${name}</p>
            <div class="time-button">
                <button type="button" class="btn btn-outline-secondary rounded-pill">Action</button>
                <button type="button" class="btn btn-outline-secondary rounded-pill">120 mins</button>
            </div>
            <a href="movieDetail.html?movieId=${id}" class="stretched-link"></a>
        </div>
        </div>
        `;
        cardWrap.innerHTML += code;
        // console.log("🚀 ~ createCard ~ card.innerHTML:", card.innerHTML)
        
    }

    // console.log(name);
    // console.log(image);
    //console.log(document.getElementById('image'))
    //console.log(document.getElementById('title'))
    //document.getElementById('title').innerText = name;
    // console.log(document.getElementById('title'))
    //document.getElementById('image').src = image;
});
