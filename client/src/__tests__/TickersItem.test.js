import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TickersItem from "../components/TickersItem/TickersItem";

const mockStore = configureStore([]);

describe("TickersItem", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      filter: "",
      favorites: ["AAPL"],
    });
  });

  it("renders a ticker item", () => {
    const quote = {
      ticker: "AAPL",
      price: 100,
      change: 5,
      change_percent: "5%",
      dividend: "0.8",
      yield: "0.7",
      last_trade_time: "2024-02-14T12:00:00",
    };

    render(
      <Provider store={store}>
        <TickersItem quote={quote} />
      </Provider>
    );

    expect(screen.getByText("AAPL")).toBeInTheDocument();
    expect(screen.getByText("$100")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("5%")).toBeInTheDocument();
    expect(screen.getByText("0.8")).toBeInTheDocument();
    expect(screen.getByText("0.7")).toBeInTheDocument();
    expect(screen.getByText("Feb 14, 2024, 12:00 PM")).toBeInTheDocument();
  });

  it("adds favorite ticker when add button is clicked", () => {
    const quote = {
      ticker: "AAPL",
      price: 100,
      change: 5,
      change_percent: "5%",
      dividend: "0.8",
      yield: "0.7",
      last_trade_time: "2024-02-14T12:00:00",
    };

    render(
      <Provider store={store}>
        <TickersItem quote={quote} />
      </Provider>
    );

    const addButton = screen.getByRole("button", { name: /add/i });
    fireEvent.click(addButton);

    const actions = store.getActions();
    expect(actions).toEqual([
      { type: "filter/addToFavorites", payload: "AAPL" },
    ]);
  });

  it("removes favorite ticker when remove button is clicked", () => {
    const quote = {
      ticker: "AAPL",
      price: 100,
      change: 5,
      change_percent: "5%",
      dividend: "0.8",
      yield: "0.7",
      last_trade_time: "2024-02-14T12:00:00",
    };

    store = mockStore({
      filter: "",
      favorites: ["AAPL"],
    });

    render(
      <Provider store={store}>
        <TickersItem quote={quote} isFavorite />
      </Provider>
    );

    const removeButton = screen.getByRole("button", { name: /remove/i });
    fireEvent.click(removeButton);

    const actions = store.getActions();
    expect(actions).toEqual([
      { type: "filter/removeFromFavorites", payload: "AAPL" },
    ]);
  });
});
