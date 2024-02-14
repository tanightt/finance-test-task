import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TickersList from "../components/TickersList/TickersList";

const mockStore = configureStore([]);

describe("TickersList", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      quotes: [
        { ticker: "AAPL", price: 100 },
        { ticker: "MSFT", price: 200 },
      ],
      filter: "",
      favorites: ["AAPL"],
    });
  });

  it("renders a list of tickers", () => {
    render(
      <Provider store={store}>
        <TickersList />
      </Provider>
    );

    expect(screen.getByText("AAPL")).toBeInTheDocument();
    expect(screen.getByText("$100")).toBeInTheDocument();
    expect(screen.getByText("MSFT")).toBeInTheDocument();
    expect(screen.getByText("$200")).toBeInTheDocument();
  });

  it("renders a list of filtered tickers", () => {
    store = mockStore({
      quotes: [
        { ticker: "AAPL", price: 100 },
        { ticker: "MSFT", price: 200 },
      ],
      filter: "AAPL",
      favorites: [],
    });

    render(
      <Provider store={store}>
        <TickersList />
      </Provider>
    );

    expect(screen.getByText("AAPL")).toBeInTheDocument();
    expect(screen.getByText("$100")).toBeInTheDocument();
    expect(screen.queryByText("MSFT")).toBeNull();
    expect(screen.queryByText("$200")).toBeNull();
  });

  it("renders a list with favorite tickers highlighted", () => {
    render(
      <Provider store={store}>
        <TickersList />
      </Provider>
    );

    expect(screen.getByText("AAPL")).toHaveStyle({ fontWeight: "bold" });
    expect(screen.getByText("$100")).toHaveStyle({ fontWeight: "bold" });
    expect(screen.getByText("MSFT")).not.toHaveStyle({ fontWeight: "bold" });
    expect(screen.getByText("$200")).not.toHaveStyle({ fontWeight: "bold" });
  });
});
