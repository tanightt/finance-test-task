import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites, selectQuotes } from "../../redux/selectors";
import { TickersItem } from "../TickersItem/TickersItem";
import { UserWrapper } from "./UserList.styled";

export const UserList = () => {
  const favorites = useSelector(selectFavorites);
  const quotes = useSelector(selectQuotes);

  const favoritesFilter = quotes.filter((quote) =>
    favorites.includes(quote.ticker)
  );

  return (
    <UserWrapper>
      <h2>Favorites</h2>
      <table>
        <tbody>
          {favoritesFilter.map((fav, index) => (
            <TickersItem key={index} quote={fav} btn={false} />
          ))}
        </tbody>
      </table>
      <p>You can add here your favorites</p>
    </UserWrapper>
  );
};
