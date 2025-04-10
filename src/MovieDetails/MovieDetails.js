import "./MovieDetails.css";

function MovieDetails({ movie }) {
  return (
    <section className="MovieDetails">
      <img src={movie.backdrop_path} alt={`${movie.title} backdrop`} />
      <h2>
        {movie.title} ({movie.release_date.slice(0, 4)})
      </h2>
      <div className="Genres">
        {movie.genre_ids.map((genre) => {
          return <h3>{genre}</h3>;
        })}
      </div>
      <p>{movie.overview}</p>
    </section>
  );
}

export default MovieDetails;
