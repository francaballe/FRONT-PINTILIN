import { createSlice } from "@reduxjs/toolkit";

export const keywordSlice = createSlice({
  name: "keyword",
  initialState: { keyword: "random" },
  reducers: {
    updateKeyword: (state, action) => {
      return (state.keyword = action.payload);
    },
  },
});

export const { updateKeyword } = keywordSlice.actions;

export default keywordSlice.reducer;
