/* eslint-disable react/prop-types */
export function MangasIndex(props) {
  return (
    <div>
      <h1>All Manga</h1>
      {props.mangas.map((manga) => (
        <div key={manga.id}>
          <h2>{manga.name}</h2>
          <img src={manga.image_url} />
          <p>{manga.genre}</p>
          <p>{manga.description}</p>
          <button onClick={() => props.onShowManga(manga)}>More info</button>
        </div>
      ))}
    </div>
  );
}
