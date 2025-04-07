function getMovies(setMovies) {
  fetch("https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies")
    .then(response => response.json())
    .then(data => setMovies([...data]))
    .catch(e => console.log(e));
}

export default getMovies
