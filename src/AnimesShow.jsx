/* eslint-disable react/prop-types */
export function AnimesShow(props) {
  return (
    <div>
      <h1>Anime Information</h1>
      <p>genre: {props.anime.genre}</p>
      <p>description: {props.anime.description}</p>
    </div>
  );
}
