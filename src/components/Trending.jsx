// src/components/Trending.jsx
import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../api/tmdb";
import { Link } from "react-router-dom";

function Trending() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const data = await fetchTrendingMovies();
      setMovies(data);
    }
    getMovies();
  }, []);

  return (
    <section className="movies">
      <h2>Trending Now</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="movie-card">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/200x300?text=No+Image"
                }
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Trending;
