import { Link } from "react-router-dom";
import "./MoviePoster.css";

function MoviePoster({ id, poster, vote_count, vote }) {
  return (
    <section className="MoviePoster">
      <Link to={`/${id}`}>
        <img className="poster_image" src={poster} alt="poster goes here" />
        <div className="message">Click me for more!</div>
      </Link>
      <div className="votes">
        <button className="upvote" onClick={() => vote(id, "up")}>
          ↑
        </button>
        <p className="vote_count">{vote_count}</p>
        <button className="downvote" onClick={() => vote(id, "down")}>
          ↓
        </button>
      </div>
    </section>
  );
}

export default MoviePoster;
