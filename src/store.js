import { configureStore, createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    universityName: '',
    searchResults: null,

  },
  reducers: {
    reset(state) {
      state.universityName = '';
      state.searchResults = null;
      state.error = null;
    },
    setUniversityName(state, action) {
      state.universityName = action.payload;
    },
    setSearchResults(state, action) {
      state.searchResults = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
  },
});

export const {
  reset,
  setUniversityName,
  setSearchResults,
} = globalSlice.actions;
