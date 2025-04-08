import posters from "../fixtures/movie_posters.json";
// import details from '../fixtures/movie_details.json' (you will need to add your own mock data to this file!)

describe("Main Page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies",
      posters
    ).visit("http://localhost:3000/");
  });

  it("displays title and movies on page load", () => {
    cy.get("h1")
      .contains("rancid tomatillos")
      .get(".movies-container")
      .find(".MoviePoster")
      .should("have.length", 4)
      .get(".poster_image")
      .first()
      .should(
        "have.attr",
        "src",
        "https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg"
      )
      .get(".poster_image")
      .last()
      .should(
        "have.attr",
        "src",
        "https://image.tmdb.org/t/p/original//d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"
      )
      .get(".vote_count")
      .first()
      .contains("32544")
      .get(".vote_count")
      .last()
      .contains("27642");
  });
});
