import styled from "styled-components";

export const Td = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #eee6f6;
  }

  &:hover {
    background-color: #eabbfa;
  }
`;
