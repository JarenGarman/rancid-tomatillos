describe("Main Page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies",
      {
        fixture: "movie_posters.json",
      }
    )
      .visit("http://localhost:3000/")
      .url()
      .should("eq", "http://localhost:3000/");
  });

  it("displays title and movies on page load", () => {
    cy.get("h1")
      .should("contain", "rancid tomatillos")
      .getBySel("home")
      .should("not.exist")
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
      .should("contain", "32544")
      .get(".vote_count")
      .last()
      .should("contain", "27642");
  });

  it("displays movie details when poster clicked", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/155",
      {
        fixture: "movie_details.json",
      }
    )
      .get(".movies-container")
      .find(".MoviePoster")
      .first()
      .click()
      .url()
      .should("eq", "http://localhost:3000/155")
      .get(".MovieDetails")
      .get("img")
      .should(
        "have.attr",
        "src",
        "https://image.tmdb.org/t/p/original//nMKdUUepR0i5zn0y1T4CsSB5chy.jpg"
      )
      .get("h2")
      .should("contain", "The Dark Knight (2008)")
      .get(".Genres")
      .find("h3")
      .should("have.length", 4)
      .get("h3")
      .first()
      .should("contain", "Drama")
      .get("h3")
      .last()
      .should("contain", "Thriller")
      .get("p")
      .should(
        "contain",
        "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker."
      );
  });

  it("navigates home from movie details when home button clicked", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/155",
      {
        fixture: "movie_details.json",
      }
    )
      .get(".movies-container")
      .find(".MoviePoster")
      .first()
      .click()
      .url()
      .should("eq", "http://localhost:3000/155")
      .getBySel("home")
      .click()
      .get("h1")
      .should("contain", "rancid tomatillos")
      .getBySel("home")
      .should("not.exist")
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
      .should("contain", "32544")
      .get(".vote_count")
      .last()
      .should("contain", "27642");
  });

  it("can upvote any particular movie", () => {
    cy.intercept(
      "PATCH",
      "https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/155",
      {
        fixture: "movie_upvote.json",
      }
    ).as("updateVote");

    cy.get(".vote_count").first().should("contain", "32544");

    cy.get(".MoviePoster").first().find(".upvote").click();

    cy.wait("@updateVote");

    cy.get(".movies-container")
      .find(".MoviePoster")
      .first()
      .get(".vote_count")
      .should("contain", "32545");
  });

  it("can downvote any particular movie", () => {
    cy.intercept(
      "PATCH",
      "https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/155",
      {
        fixture: "movie_downvote.json",
      }
    ).as("updateVote");

    cy.get(".vote_count").first().should("contain", "32544");

    cy.get(".MoviePoster").first().find(".downvote").click();

    cy.wait("@updateVote");

    cy.get(".movies-container")
      .find(".MoviePoster")
      .first()
      .get(".vote_count")
      .should("contain", "32543")
      .url()
      .should("eq", "http://localhost:3000/");
  });
});
