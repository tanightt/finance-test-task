import React from "react";
import useCustomDate from "../../hooks/useCustomDate";
import { Td, Tr } from "./TickersItem.styled";

export const TickersItem = ({ quote }) => {
  const formattedDate = useCustomDate(quote.last_trade_time);

  return (
    <Tr>
      <Td>{quote.ticker}</Td>
      <Td>{quote.price}$</Td>
      <Td>{quote.change}</Td>
      <Td>{quote.change_percent}%</Td>
      <Td>{quote.dividend}</Td>
      <Td>{quote.yield}</Td>
      <Td>{formattedDate}</Td>
    </Tr>
  );
};
