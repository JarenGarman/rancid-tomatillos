import { useEffect, useState } from 'react';
import { getMovie, getMovies, updateVote } from '../apiCalls';
import MovieDetails from '../MovieDetails/MovieDetails';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    getMovies(setMovies)
  }, []);

  const vote = (id, votes_change) => {
    const movie = movies.find(movie => movie.id === id);
    // movie.vote_count += votes_change;
// 1. We were updating state twice, once before the API call and once after.
// 2. The state gets updated correctly after the API response with prevMovies.map().

    const direction = votes_change > 0 ? "up" : "down";
    updateVote(id,direction)
    .then((updatedMovie) => {
      setMovies(prevMovies => {
        return prevMovies.map( movie => { //prevMovies is provided by React's updater function. Allows update of state based on previous value, ensures state is updated without direct mutation.
          return movie.id === updatedMovie.id ? updatedMovie : movie
        })
      })
    })
  };

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
        {selectedMovie && <button onClick={() => setSelectedMovie(null)}>⌂</button>}
      </header>
      {
        selectedMovie ?
          <MovieDetails movie={selectedMovie} />
          : <MoviesContainer
              movies={movies}
              vote={vote}
              getMovie={getMovie}
              setSelectedMovie={setSelectedMovie} />
      }
    </main>
  );
}

export default App;