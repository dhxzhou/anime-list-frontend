/* eslint-disable react/prop-types */
export function AnimesIndex(props) {
  return (
    <div>
      <h1>All Anime</h1>
      {props.animes.map((anime) => (
        <div key={anime.id}>
          <h2>{anime.name}</h2>
          <img src={anime.image_url} />
          <button onClick={() => props.onShowAnime(anime)}>More info</button>
        </div>
      ))}
    </div>
  );
}
