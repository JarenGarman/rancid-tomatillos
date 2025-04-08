import MoviePoster from '../MoviePoster/MoviePoster';
import './MoviesContainer.css';

function MoviesContainer({ movies, vote, getMovie, setSelectedMovie }) {
  if (!movies) {
    return <h2>Loading...</h2>;
  }

  const movieCards = movies.map(movie => {
    return(
      <MoviePoster
        key={movie.id}
        id={movie.id}
        poster={movie.poster_path}
        vote_count={movie.vote_count}
        vote={vote}
        getMovie={getMovie}
        setSelectedMovie={setSelectedMovie}
      />
    );
  });

  return (
    <section className='movies-container'>
      { movieCards }
    </section>
  );
}

export default MoviesContainer;