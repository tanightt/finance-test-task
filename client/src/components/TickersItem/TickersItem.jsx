import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../redux/filterSlice";
import useCustomDate from "../../hooks/useCustomDate";
import { AddBtn, Td, Tr } from "./TickersItem.styled";

export const TickersItem = ({ quote, isFavorite, btn = true }) => {
  const formattedDate = useCustomDate(quote.last_trade_time);
  const [previousPrice, setPreviousPrice] = useState(quote.price);
  const [test, setTest] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (quote.price !== previousPrice) {
      setPreviousPrice(quote.price);

      if (parseFloat(quote.price) < parseFloat(previousPrice)) {
        setTest("decreased");
      } else {
        setTest("increased");
      }
    }
  }, [quote.price, previousPrice]);

  const handleAddFavorite = () => {
    if (isFavorite) {
      return dispatch(removeFromFavorites(quote.ticker));
    }

    dispatch(addToFavorites(quote.ticker));
  };

  return (
    <Tr onClick={() => handleAddFavorite(quote)}>
      <Td>{quote.ticker}</Td>

      <Td $test={test}>{quote.price}$</Td>
      <Td $test={test}>{quote.change}</Td>
      <Td $test={test}>
        {quote.change_percent}% {test === "decreased" && <span>&#8681;</span>}
        {test === "increased" && <span>&#8679;</span>}
      </Td>
      <Td>{quote.dividend}</Td>
      <Td>{quote.yield}</Td>
      <Td>{formattedDate}</Td>
      {!btn ? null : (
        <Td>
          {!isFavorite ? <AddBtn>&#43;</AddBtn> : <AddBtn>&#8722;</AddBtn>}
        </Td>
      )}
    </Tr>
  );
};
