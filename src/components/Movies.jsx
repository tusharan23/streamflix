import { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../api/tmdb';

function Movies() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await fetchPopularMovies();
      setPopular(data);
    }
    load();
  }, []);

  return (
    <section className="movies">
      <h2>Popular on Streamflix</h2>
      <div className="movie-grid">
        {popular.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Movies;
