import io from "socket.io-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setQuotes, updatePrice } from "./tickersSlice";

export const initSocket = createAsyncThunk(
  "socket/initSocket",
  async (_, { dispatch }) => {
    const socket = io("http://localhost:4000");
    socket.emit("start");

    return new Promise((resolve) => {
      socket.on("ticker", (response) => {
        if (Array.isArray(response)) {
          const quotes = response;

          dispatch(setQuotes(quotes));

          quotes.forEach((quote) => {
            const { ticker, price } = quote;
            if (ticker && price) {
              dispatch(updatePrice({ ticker, price: parseFloat(price) }));
            } else {
              console.error("Invalid quote format:", quote);
            }
          });
        } else {
          console.error("Invalid response format for quotes:", response);
        }
      });

      socket.on("connect", () => {
        resolve(socket.connected);
      });
    });
  }
);
