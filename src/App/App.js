import { useEffect, useState } from 'react';
import getMovies from '../apiCalls';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';
// import movieDetails from '../data/movie_details';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  function getMovies(){
    setMovies(moviePosters || []) //we are simulating defining our network request in a separate function
  }

  useEffect(() => getMovies(),[])

  const vote = (id, modifier = 1) => {
    const movie = movies.filter(movie => movie.id === id)[0]
    movie.vote_count += (1 * modifier)
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
      {
        selectedMovie ? 
          <MovieDetails movie= {selectedMovie} goBack={() => setSelectedMovie(null)} /> 
          : <MoviesContainer 
              movies={movies} 
              vote={vote} 
              selectMovie={setSelectedMovie} />
      }
      <MoviesContainer movies = {movies} vote = {vote}/>
    </main>
  );
}

export default App;
