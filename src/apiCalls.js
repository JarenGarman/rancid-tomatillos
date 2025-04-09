const baseURL =
  "https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1";

export function getMovies() {
  const url = baseURL + "/movies";
  return fetch(url)
    .then((response) => response.json())
    .catch((e) => console.log(e));
}

export function getMovie(id, setSelectedMovie) {
  const url = baseURL + "/movies/" + id;
  fetch(url)
    .then((response) => response.json())
    .then((data) => setSelectedMovie(data))
    .catch((e) => console.log(e));
}

export function updateVote(id, direction) {
  const url = baseURL + "/movies/" + id;
  return fetch(url, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ vote_direction: direction }),
  })
    .then((response) => response.json())
    .catch((error) => console.error("Error updating vote:", error));
}
