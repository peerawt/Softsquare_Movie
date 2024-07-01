document.addEventListener("DOMContentLoaded", (event) => {
    const search = window.location.search
    //console.log("🚀 ~ document.addEventListener ~ search:", search)
    const urlParams = new URLSearchParams(search);
    //console.log("🚀 ~ document.addEventListener ~ urlParams:", urlParams)
    const movieId = urlParams.get('movieId');
    //console.log("🚀 ~ document.addEventListener ~ movieId:", movieId)

    fetch("movie.json")
        .then(response => response.json())
        .then(json => {
            const foundJson = json.find(j => j.id === movieId)
            if(foundJson){
                document.getElementById('card-title').innerText = foundJson.name;
                document.getElementById('image').src = foundJson.image;
                document.getElementById('rate').innerText = foundJson.rate;
                document.getElementById('description').innerText = foundJson.description;
                document.getElementById('sample').src = foundJson.sample;
            }
    })
});
       