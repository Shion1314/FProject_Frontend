import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

const universitySlice = createSlice({
  name: "university",
  initialState: {
    universityName: "",
    searchResults: null,
  },
  reducers: {
    reset(state) {
      state.universityName = "";
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
    auth: authSlice.reducer,
    university: universitySlice.reducer,
  },
});

export const { setUser } = authSlice.actions;
export const { reset, setUniversityName, setSearchResults } = universitySlice.actions;
