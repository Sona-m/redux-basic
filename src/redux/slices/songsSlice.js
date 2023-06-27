import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songSlice = createSlice({
  // each slice with create its own individual state
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },

    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1); // remove the song at index , 1- we only want to remove 1 item
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addSong, removeSong } = songSlice.actions;
export const songsReducer = songSlice.reducer;
