import styled from "styled-components";

export const Td = styled.td`
  border: 1px solid #ddd;
  text-align: left;
  color: ${({ $test }) =>
    $test === "decreased"
      ? "#930000"
      : $test === "increased"
      ? "#018301"
      : "black"};
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #eee6f6;
  }

  &:hover {
    background-color: #eabbfa;
  }
`;

export const AddBtn = styled.button`
  background: lightgreen;
  border-radius: 50%;
  font-size: large;
`;
