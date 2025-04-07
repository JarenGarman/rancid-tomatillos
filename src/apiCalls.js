function fetchMovies() {
  let movies;
  fetch("https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies")
    .then(response => response.json())
    .then(data => movies = data)
    .catch(e => console.log(e));
  return movies
}

export default fetchMovies
