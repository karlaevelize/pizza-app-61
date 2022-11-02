import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  posts: null,
  details: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsFetched: (state, action) => {
      //code goes here
      // console.log("action", action);
      state.posts = action.payload;
    },
    detailsFetched: (state, action) => {
      // console.log("action", action);
      state.details = action.payload;
    },
  },
});

export const { postsFetched, detailsFetched } = postsSlice.actions;

export default postsSlice.reducer;
