import { useEffect, useState } from 'react';
import getMovies from '../apiCalls';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import './App.css';
// import movieDetails from '../data/movie_details';

function App() {

  const [movies, setMovies] = useState([]);

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
      <MoviesContainer movies = {movies} vote = {vote}/>
    </main>
  );
}

export default App;
