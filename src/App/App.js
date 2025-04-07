import { useEffect, useState } from 'react';
import fetchMovies from '../apiCalls';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import './App.css';
// import movieDetails from '../data/movie_details';

function App() {

  const [movies, setMovies] = useState([]);

  function getMovies(){
    setMovies(fetchMovies || [])
  }

  useEffect(() => getMovies,[])

  const vote = (id, votes_change) => {
    const movie = movies.find(movie => movie.id === id)
    movie.vote_count += votes_change
    setMovies([...movies, movie])
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
