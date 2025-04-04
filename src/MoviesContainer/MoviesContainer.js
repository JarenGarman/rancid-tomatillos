import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster'

function Movies({ movies }) {
  if (!movies) {
    <h2>Loading...</h2>;
  }

  const movieCards = movies.map(movie => {
    return(
    <MoviePoster
      key={movie.id}
      id={movie.id}
      poster={movie.poster_path}
      title={movie.title}
      vote_count={movie.vote_counkt}
    />
    )
  }) 

  return (
      <section className='MoviesContainer'>
        <p>We'll make some movie posters show up here!</p>
      </section>
  );
}
  
export default Movies;