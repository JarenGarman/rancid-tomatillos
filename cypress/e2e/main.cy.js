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
    cy.getBySel("title")
      .should("contain", "rancid tomatillos")
      .getBySel("home")
      .should("not.exist")
      .getBySel("movies-container")
      .find(".MoviePoster")
      .should("have.length", 4)
      .getBySel("poster_image")
      .first()
      .should(
        "have.attr",
        "src",
        "https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg"
      )
      .getBySel("poster_image")
      .last()
      .should(
        "have.attr",
        "src",
        "https://image.tmdb.org/t/p/original//d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"
      )
      .getBySel("vote_count")
      .first()
      .should("contain", "32544")
      .getBySel("vote_count")
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
      .getBySel("movies-container")
      .find(".MoviePoster")
      .first()
      .click()
      .url()
      .should("eq", "http://localhost:3000/155")
      .getBySel("MovieDetails")
      .getBySel("movie_backdrop")
      .should(
        "have.attr",
        "src",
        "https://image.tmdb.org/t/p/original//nMKdUUepR0i5zn0y1T4CsSB5chy.jpg"
      )
      .getBySel("movie_details_title")
      .should("contain", "The Dark Knight (2008)")
      .getBySel("Genres")
      .find("h3")
      .should("have.length", 4)
      .getBySel("Genre")
      .first()
      .should("contain", "Drama")
      .getBySel("Genre")
      .last()
      .should("contain", "Thriller")
      .getBySel("movie_overview")
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
      .getBySel("movies-container")
      .find(".MoviePoster")
      .first()
      .click()
      .url()
      .should("eq", "http://localhost:3000/155")
      .getBySel("home")
      .click()
      .getBySel("title")
      .should("contain", "rancid tomatillos")
      .getBySel("home")
      .should("not.exist")
      .getBySel("movies-container")
      .find(".MoviePoster")
      .should("have.length", 4)
      .getBySel("poster_image")
      .first()
      .should(
        "have.attr",
        "src",
        "https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg"
      )
      .getBySel("poster_image")
      .last()
      .should(
        "have.attr",
        "src",
        "https://image.tmdb.org/t/p/original//d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"
      )
      .getBySel("vote_count")
      .first()
      .should("contain", "32544")
      .getBySel("vote_count")
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

    cy.getBySel("vote_count").first().should("contain", "32544");

    cy.getBySel("MoviePoster").first().find(".upvote").click();

    cy.wait("@updateVote");

    cy.getBySel("movies-container")
      .find(".MoviePoster")
      .first()
      .getBySel("vote_count")
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

    cy.getBySel("vote_count").first().should("contain", "32544");

    cy.getBySel("MoviePoster").first().find(".downvote").click();

    cy.wait("@updateVote");

    cy.getBySel("movies-container")
      .find(".MoviePoster")
      .first()
      .getBySel("vote_count")
      .should("contain", "32543")
      .url()
      .should("eq", "http://localhost:3000/");
  });
});
