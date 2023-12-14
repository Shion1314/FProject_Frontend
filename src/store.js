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
    sat_score: "",
    GPA_score: "",
    tuition_instate_full: "",
    tuition_outstate_full: "",
    popular_major: "",

    searchResults: null,
  },
  reducers: {
    reset(state) {
      state.universityName = "";
      state.sat_score = "";
      state.GPA_score = "";
    state.tuition_instate_full= "";
    state.tuition_outstate_full= "";
    state.popular_major= "";
      state.searchResults = null;
      state.error = null;
    },
    setUniversityName(state, action) {
      state.universityName = action.payload;
    },
    setSat_score(state, action) {
      state.sat_score = action.payload;
    },
    setGPA(state, action) {
      state.GPA_score = action.payload;
    },
    setTuition_in(state,action){
      state.tuition_instate_full=action.payload;
    },
    setTuition_out(state,action){
      state.tuition_outstate_full=action.payload;
    },
    setMajor(state,action){
      state.popular_major=action.payload;
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
export const { reset, setUniversityName, setSat_score, setGPA,setTuition_in,setTuition_out,setMajor,setSearchResults } = universitySlice.actions;
