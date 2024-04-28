import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="#">Home</Link>
        <Link to="/signup">Anime Index</Link>
        <Link to="/signup">Manga Index</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/logout">Logout</Link>
      </nav>
    </header>
  );
}
