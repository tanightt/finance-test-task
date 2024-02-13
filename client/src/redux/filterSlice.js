import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    value: "",
  },
  reducers: {
    filterTickers(state, { payload }) {
      state.value = payload;
    },
  },
});

export const { filterTickers } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
