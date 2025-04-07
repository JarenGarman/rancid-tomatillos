import MoviePoster from '../MoviePoster/MoviePoster';
import './MoviesContainer.css';

function Movies({ movies, vote }) {
  if (!movies) {
    <h2>Loading...</h2>;
  }

  const movieCards = movies.map(movie => {
    return(
    <MoviePoster
      key={movie.id}
      id={movie.id}
      poster={movie.poster_path}
      vote_count={movie.vote_count}
      vote={vote}
    />
    )
  })

  return (
      <section className='movies-container'>
        { movieCards }
      </section>
  );
}

export default Movies;