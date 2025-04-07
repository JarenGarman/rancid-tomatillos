import './MovieDetails.css';

function MovieDetails({ movie, goBack }) {
  return (
    <section className='MovieDetails'>
      <button onClick={goBack}>← Back</button>
      <h2>{movie.title}</h2>
      <img src={movie.poster_path} alt={`${movie.title} poster`} />
      <p>{movie.overview}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Genres:</strong> {Array.isArray(movie.genre_ids) ? movie.genre_ids.join(', ') : 'N/A'}</p>
    </section>
  );
}

export default MovieDetails;