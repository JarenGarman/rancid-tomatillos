import './MoviePoster.css';

function MoviePoster({ id, poster, vote_count, vote }) {
  return (
    <section className='MoviePoster'>
      <img className='poster_image' src= {poster} alt="poster goes here"/>
      <div className='votes'>
        <button className='upvote' onClick={() => vote(id, 1)}>↑</button>
        <p className='vote_count'>{vote_count}</p>
        <button className='downvote' onClick={() => vote(id, -1)}>↓</button>
      </div>
    </section>
  );
}

export default MoviePoster;