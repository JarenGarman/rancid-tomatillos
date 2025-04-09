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


export function updateVote(id, voteDirection) {
  const url = baseURL + "/movies/" + id
  return fetch((url), { //adding return here beca
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ vote_direction: voteDirection })
  })
    .then((response) => response.json())
    .catch((error) => console.error('Error updating vote:', error));
}
