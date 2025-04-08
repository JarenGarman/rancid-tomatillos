import { useEffect, useState } from 'react';
import { getMovie, getMovies } from '../apiCalls';
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
    movie.vote_count += votes_change;
    setMovies([...movies]);
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