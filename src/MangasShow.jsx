/* eslint-disable react/prop-types */
export function MangasShow(props) {
  return (
    <div>
      <h1>Manga Information</h1>
      <p>genre: {props.manga.genre}</p>
      <p>description: {props.manga.description}</p>
    </div>
  );
}
