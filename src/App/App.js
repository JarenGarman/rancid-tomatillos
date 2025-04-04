import './App.css';
import searchIcon from '../icons/search.png';
import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

const posters_path = moviePosters

// Example imports (for later):
// import movieDetails from '../data/movie_details';

function App() {

  function getMovies(){
    setMovies(moviePosters || []) //we are simulating defining our network reuqest in a separate function
  }
  const [movies, setMovies] = useState([]);


  useEffect(() => getMovies,[])

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>
      <MoviesContainer movies = {moviePosters}/>
    </main>
  );
}

export default App;
