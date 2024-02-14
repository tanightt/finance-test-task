import { createSlice } from "@reduxjs/toolkit";

export const quoteSlice = createSlice({
  name: "quotes",
  initialState: {
    quotes: [],
  },
  reducers: {
    setQuotes: (state, { payload }) => {
      state.quotes = payload;
    },
    updatePrice: (state, { payload }) => {
      const { ticker, price } = payload;
      const quoteToUpdate = state.quotes.find(
        (quote) => quote.ticker === ticker
      );
      if (quoteToUpdate) {
        quoteToUpdate.price = price;
      } else {
        console.error("Quote not found for ticker:", ticker);
      }
    },
  },
});

export const { setQuotes, updatePrice } = quoteSlice.actions;
export const quoteReducer = quoteSlice.reducer;
