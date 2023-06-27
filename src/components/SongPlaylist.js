import { createRandomSong } from "../data/Data";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../redux";

function SongPlaylist() {
  const dispatch = useDispatch();

  const songPlaylist = useSelector((state) => {
    return state.songs;
  });

  const handleSongAdd = (song) => {
    console.log(song);
    const action = addSong(song);
    console.log(action);
    dispatch(action);
  };
  const handleSongRemove = (song) => {
    // console.log(song);
    // const action = removeSong(song);
    // console.log(action);
    // dispatch(action);
    dispatch(removeSong(song));
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <Button
          onClick={() => handleSongRemove(song)}
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
        <h3>Song Playlist</h3>
        <div>
          <Button
            onClick={() => handleSongAdd(createRandomSong())}
            variant="contained"
          >
            + Add Song to Playlist
          </Button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
