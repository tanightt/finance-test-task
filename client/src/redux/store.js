import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice";
import { quoteReducer } from "./tickersSlice";

export const store = configureStore({
  reducer: {
    quotes: quoteReducer,
    filter: filterReducer,
  },
});
