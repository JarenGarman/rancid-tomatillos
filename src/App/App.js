import './App.css';
import searchIcon from '../icons/search.png';
import { useState, useEffect } from 'react';
import moviePosters from './data/movie_posters';
import MoviesContainer from '../Movi`esContainer/MoviesContainer';

const posters_path = moviePosters

// Example imports (for later):
// import movieDetails from '../data/movie_details';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {moviePosters},[])

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
