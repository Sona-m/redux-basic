import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { reset } from "./redux/actions";

export default function App() {
  const dispatch = useDispatch();
  const handleResetClick = () => {
    dispatch(reset()); //action type -app/reset
  };

  return (
    <div className="container">
      <Button
        onClick={() => handleResetClick()}
        variant="contained"
        color="error"
      >
        Reset Both Playlists
      </Button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
