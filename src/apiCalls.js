const baseURL = "https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1"

export function getMovies(setMovies) {
  const url = baseURL + "/movies"
  fetch(url)
    .then(response => response.json())
    .then(data => setMovies([...data]))
    .catch(e => console.log(e));
}

export function getMovie(id, setSelectedMovie) {
  const url = baseURL + "/movies/" + id
  fetch(url)
    .then(response => response.json())
    .then(data => setSelectedMovie(data))
    .catch(e => console.log(e));
}
