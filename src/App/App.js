import { useEffect, useState } from 'react';
import moviePosters from '../data/movie_posters';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import './App.css';

const posters_path = moviePosters

// Example imports (for later):
// import movieDetails from '../data/movie_details';

function App() {

  function getMovies(){
    setMovies(moviePosters || []) //we are simulating defining our network request in a separate function
  }
  const [movies, setMovies] = useState([]);


  useEffect(() => getMovies,[])

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
      <MoviesContainer movies = {moviePosters} vote = {vote}/>
    </main>
  );
}

export default App;
