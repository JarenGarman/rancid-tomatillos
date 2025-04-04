import './MoviePoster.css';

function MoviePoster({ title, poster, vote_count }) {
  return (
    <section className='MoviePoster'>
      <h3 className='poster_title'>{title}</h3>
      <img className='poster_image' src= {poster} alt="poster goes here"/>
      <p>{vote_count}</p>
    </section>
  );
}

export default MoviePoster;