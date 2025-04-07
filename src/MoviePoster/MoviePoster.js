import './MoviePoster.css';

function MoviePoster({ id, poster, vote_count, vote, selectMovie }) {
  return (
    <section className='MoviePoster'>
      <img 
        className='poster_image' 
        src= {poster} 
        alt="poster goes here"
        onClick={selectMovie}
        style={{ cursor: 'pointer' }}
        />
      <div className='votes'>
        <button className='upvote' onClick={() => vote(id, 1)}>↑</button>
        <p className='vote_count'>{vote_count}</p>
        <button className='downvote' onClick={() => vote(id, -1)}>↓</button>
      </div>
    </section>
  );
}

export default MoviePoster;