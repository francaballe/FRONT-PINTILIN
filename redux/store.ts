import { Keyword } from "../types/types";
import { configureStore } from "@reduxjs/toolkit";
import { keywordSlice } from "./states/keyword";

export interface AppStore {
  keyword: Keyword;
}

export default configureStore<AppStore>({
  reducer: {
    keyword: keywordSlice.reducer,
  },
});
