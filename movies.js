
//DOM
const buttons = document.querySelectorAll("#buttons button")
const mDiv = document.getElementById("movies")

//API
const api_url = "https://api.sampleapis.com/movies/"

buttons.forEach(btn => {
    btn.onclick = () => {
        const genre = btn.innerText.toLowerCase();
        fetchMovies(genre)
    }
})



function fetchMovies(genre = "animation") {
    mDiv.innerHTML = '';
    fetch(api_url + genre)
        .then(res => res.json())
        .then(movies => {
            console.log(movies);
            renderMovies(movies)
        })
        .catch(error => console.error('Error fetching movies:', error));
}


function renderMovies(arr) {
    for (const film of arr) {
        mDiv.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src="${film.posterURL}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${film.title}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Смотреть</a>
        </div>
      </div>
      `
    }
}fetchMovies()