// src/pages/MovieDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../api/tmdb";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getDetails() {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    }
    getDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{movie.title}</h1>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/200x300?text=No+Image"
        }
        alt={movie.title}
        style={{ width: "200px", borderRadius: "10px" }}
      />
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Overview:</strong> {movie.overview}</p>
      <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
    </div>
  );
}

export default MovieDetail;
