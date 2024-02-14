import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    value: "",
    favorites: [],
  },
  reducers: {
    filterTickers(state, { payload }) {
      state.value = payload;
    },
    addToFavorites: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFromFavorites(state, { payload }) {
      state.favorites = state.favorites.filter((fav) => fav !== payload);
    },
  },
});

export const { filterTickers, addToFavorites, removeFromFavorites } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
