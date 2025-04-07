import { useEffect, useState } from 'react';
import getMovies from '../apiCalls';
import MovieDetails from '../MovieDetails/MovieDetails';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    getMovies(setMovies)
  }, [])

  const vote = (id, votes_change) => {
    const movie = movies.find(movie => movie.id === id)
    movie.vote_count += votes_change
    setMovies([...movies])
  }

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>
      {
        selectedMovie ?
          <MovieDetails movie= {selectedMovie} goBack={() => setSelectedMovie(null)} />
          : <MoviesContainer
              movies={movies}
              vote={vote}
              selectMovie={setSelectedMovie} />
      }
    </main>
  );
}

export default App;
