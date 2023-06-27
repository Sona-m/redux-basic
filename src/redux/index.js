import { configureStore } from "@reduxjs/toolkit";
import { songsReducer } from "./slices/songsSlice";
import { moviesReducer } from "./slices/moviesSlice";
import { addSong, removeSong } from "./slices/songsSlice";
import { addMovie, removeMovie } from "./slices/moviesSlice";

const store = configureStore({
  // big state
  reducer: {
    songs: songsReducer,
    movies: moviesReducer, // key value pair ,value is given my the reducer's initial state
  },
});

// console.log(store.getState());

export { store, addMovie, addSong, removeMovie, removeSong };
