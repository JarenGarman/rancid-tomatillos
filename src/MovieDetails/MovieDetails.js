import './MovieDetails.css';

function MovieDetails({ movie }) {
  const backgroundImage = movie.backdrop_path
    ? `url(${movie.backdrop_path})`
    : 'url(/default-background.jpg)'; // You can set a default background if no backdrop is available

  return (
    <section className='MovieDetailsContainer' style={{ backgroundImage }}>
      <div className="BackgroundOverlay"></div>
      <section className='MovieDetails'>
        <img 
          src={movie.poster_path} 
          alt={`${movie.title} poster`} 
          className="MoviePosterImage" 
        />
        <h2>{movie.title} ({movie.release_date.slice(0, 4)})</h2>
        <div className='Genres'>
          {movie.genre_ids.map((genre, index) => {
            return <h3 key={index}>{genre}</h3>;
          })}
        </div>
        <p>{movie.overview}</p>
      </section>
    </section>
  );
}

export default MovieDetails;