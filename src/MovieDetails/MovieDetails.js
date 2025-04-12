import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovie } from "../apiCalls";
import "./MovieDetails.css";

function MovieDetails() {
  const id = useParams().id;
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false)

  useEffect(() => {
    getMovie(id)
      .then((gotMovie) => {
        if (gotMovie) {
          setMovie(gotMovie);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  }, [id]);

  if (error) {
    return (
      <section className="error-message" data-cy="error-message">
        <h2>404: Movie Not Found</h2>
        <p>Sorry, that movie doesn’t exist.</p>
        <Link to="/">Go back home</Link>
      </section>
    );
  }

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  if (!movie.release_date) {
    return (
      <section className="error-message" data-cy="error-message">
        <h2>404: Movie Not Found</h2>
        <p>Sorry, that movie doesn’t exist.</p>
        <Link to="/">Go back home</Link>
      </section>
    );
  }

  return (
    <section className="MovieDetails" data-cy="MovieDetails">
      <img
        src={movie.backdrop_path}
        alt={`${movie.title} backdrop`}
        data-cy="movie_backdrop"
      />
      <h2 data-cy="movie_details_title">
        {movie.title} ({movie.release_date.slice(0, 4)})
      </h2>
      <div className="Genres" data-cy="Genres">
        {movie.genre_ids.map((genre) => {
          return <h3 data-cy="Genre">{genre}</h3>;
        })}
      </div>
      <p data-cy="movie_overview">{movie.overview}</p>
    </section>
  );
}

export default MovieDetails;
