import { useEffect, useState } from "react";
import { Link, Route, Routes, useMatch } from "react-router-dom";
import { getMovies, updateVote } from "../apiCalls";
import MovieDetails from "../MovieDetails/MovieDetails";
import MoviesContainer from "../MoviesContainer/MoviesContainer";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((movies) => setMovies(movies));
  }, []);

  const vote = (id, direction) => {
    updateVote(id, direction).then((updatedMovie) => {
      setMovies((prevMovies) => {
        return prevMovies.map((movie) => {
          return movie.id === updatedMovie.id ? updatedMovie : movie;
        });
      });
    });
  };

  return (
    <main className="App">
      <header>
        <h1 data-cy="title">rancid tomatillos</h1>
        {useMatch("/:id") && (
          <Link to="/" data-cy="home">
            ⌂
          </Link>
        )}
      </header>
      
      <Routes>
        <Route
          path="/"
          element={<MoviesContainer movies={movies} vote={vote} />}
        />
        <Route path="/:id" element={<MovieDetails />} />
        <Route
          path="*"
          element={
            <section className="error-message" data-cy="error-message">
              <h2>404: This page doesn't exist</h2>
              <p>Sorry, the route you're trying to visit is invalid</p>
              <Link to="/">Go back home</Link>
            </section>
          }
          />
      </Routes>
    </main>
  );
}

export default App;
