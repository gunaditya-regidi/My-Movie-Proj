const url ='http://www.omdbapi.com/?apikey=50afd667'
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');
const moviesSearchable = document.querySelector('#movies-searchable');
const movieData = document.querySelector('#movie-Data');

function movieSection(movies) {
    return movies.map((movie) => {
      if (movie.Poster){
        return `<img src=${movie.Poster} data-movie-id=${movie.imdbID}/>`;
      }
    })

}

function requestMovies(url, onComplete, onError)
{
    fetch(url)
        .then((res) => res.json())
        .then(onComplete)
        .catch(onError);
}

function searchMovie(value)
{
    const newUrl = url + '&s=' + value;
    requestMovies(newUrl,renderSearchMovies,handelError);
}

function handelError(error)
{
    console.log('Error: ',error);
}

function createMovieContainer(movies) {
    const movieElement = document.createElement('div'); 
    movieElement.setAttribute('class','movie');

    const movieTempalte = `
              <section class="section">
                ${movieSection(movies)}
                </section>`;

    movieElement.innerHTML = movieTempalte;
    return movieElement;


}


function renderSearchMovies(data) {
    moviesSearchable.innerHTML ='';
    const movies = data.Search;
    const movieBlock = createMovieContainer(movies);
    moviesSearchable.appendChild(movieBlock);
}

buttonElement.onclick = function(event){
    event.preventDefault();
    const value = inputElement.value;

    const newUrl = url + '&s=' + value;
    fetch(newUrl)
        .then((res) => res.json())
        .then(renderSearchMovies)
        .catch((error) => {
            console.log('Error: ',error);
        });

        inputElement.value = '';
        console.log('Value: ',value);
}
