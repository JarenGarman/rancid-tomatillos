import './MoviePoster.css';

function MoviePoster({ title, poster, vote_count }) {
  return (
    <section className='MoviePoster'>
      <img className='poster_image' src= {poster} alt="poster goes here"/>
      <p className='vote_count'>{vote_count}</p>
    </section>
  );
}

export default MoviePoster;