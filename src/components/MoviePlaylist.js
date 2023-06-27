import { createRandomMovie } from "../data/Data";
import Button from "@mui/material/Button";
import { addMovie, removeMovie } from "../redux";
import { useDispatch, useSelector } from "react-redux";

function MoviePlaylist() {
  const dispatch = useDispatch();

  const moviePlaylist = useSelector((state) => {
    return state.movies;
  });

  const handleMovieAdd = (movie) => {
    dispatch(addMovie(movie));
  };
  const handleMovieRemove = (movie) => {
    dispatch(removeMovie(movie));
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <Button
          onClick={() => handleMovieRemove(movie)}
          variant="contained"
          color="error"
        >
          X
        </Button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3>Movie Playlist</h3>
        <div>
          <Button
            onClick={() => handleMovieAdd(createRandomMovie())}
            variant="contained"
          >
            + Add Movie to Playlist
          </Button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
