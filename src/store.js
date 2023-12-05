import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
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

export const { login, logout } = auth.actions;
export const { reset, setUniversityName, setSearchResults } = universitySlice.actions;
