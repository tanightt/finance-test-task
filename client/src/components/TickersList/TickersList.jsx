import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initSocket } from "../../redux/operations";
import {
  selectFavorites,
  selectFilter,
  selectQuotes,
} from "../../redux/selectors";
import { TickersItem } from "../TickersItem/TickersItem";
import { Table, Th } from "./TickersList.styled";

export const TickersList = () => {
  const dispatch = useDispatch();

  const quotes = useSelector(selectQuotes);
  const filter = useSelector(selectFilter);
  const favorites = useSelector(selectFavorites);

  const tickersFilter = quotes.filter((quote) =>
    quote.ticker.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(initSocket());
  }, [dispatch]);

  return (
    <>
      <h3 style={{ textAlign: "center" }}>You may be interested:</h3>
      <Table>
        <thead>
          <tr>
            <Th>Ticker</Th>
            <Th>Price</Th>
            <Th>Change</Th>
            <Th>Change Percent</Th>
            <Th>Dividend</Th>
            <Th>Yield</Th>
            <Th>Last Trade Time</Th>
          </tr>
        </thead>

        <tbody>
          {tickersFilter.map((quote, index) => {
            const isFavorite = favorites.includes(quote.ticker);
            return (
              <TickersItem key={index} quote={quote} isFavorite={isFavorite} />
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
