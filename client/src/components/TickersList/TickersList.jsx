import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initSocket } from "../../redux/operations";
import { selectFilter, selectQuotes } from "../../redux/selectors";
import { TickersItem } from "../TickersItem/TickersItem";
import { Table, Th } from "./TickersList.styled";

export const TickersList = () => {
  const dispatch = useDispatch();

  const quotes = useSelector(selectQuotes);
  const filter = useSelector(selectFilter);

  const tickersFilter = quotes.filter((quote) =>
    quote.ticker.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(initSocket());
  }, [dispatch]);

  return (
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
        {tickersFilter.map((quotes, index) => (
          <TickersItem key={index} quote={quotes} />
        ))}
      </tbody>
    </Table>
  );
};
