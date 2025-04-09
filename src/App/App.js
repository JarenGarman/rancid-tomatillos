import { useEffect, useState } from "react";
import { getMovie, getMovies, updateVote } from "../apiCalls";
import MovieDetails from "../MovieDetails/MovieDetails";
import MoviesContainer from "../MoviesContainer/MoviesContainer";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    getMovies().then((movies) => setMovies([...movies]));
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
        <h1>rancid tomatillos</h1>
        {selectedMovie && (
          <button onClick={() => setSelectedMovie(null)}>⌂</button>
        )}
      </header>
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} />
      ) : (
        <MoviesContainer
          movies={movies}
          vote={vote}
          getMovie={getMovie}
          setSelectedMovie={setSelectedMovie}
        />
      )}
    </main>
  );
}

export default App;
