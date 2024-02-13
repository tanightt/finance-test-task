import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterTickers } from "../../redux/filterSlice";
import { FilterInput, FilterWrapper } from "./Filter.styled";

export const Filter = () => {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();

  const handleChangeValue = (event) => {
    const { value } = event.target;
    setFilter(value);
    dispatch(filterTickers(value));
  };

  return (
    <FilterWrapper>
      <h2>Find tickers by name</h2>
      <FilterInput
        onChange={handleChangeValue}
        type="text"
        name="filter"
        value={filter}
      />
    </FilterWrapper>
  );
};
