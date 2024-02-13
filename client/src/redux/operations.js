import io from "socket.io-client";

export const setQuotes = (quotes) => ({
  type: "SET_QUOTES",
  payload: quotes,
});

export const initSocket = () => {
  return (dispatch) => {
    const socket = io("http://localhost:4000");
    socket.emit("start");

    socket.on("ticker", (response) => {
      const quotes = Array.isArray(response) ? response : [response];
      dispatch(setQuotes(quotes));
    });

    return () => {
      socket.disconnect();
    };
  };
};
