import styled from "styled-components";

export const FilterWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FilterInput = styled.input`
  width: 400px;
  padding: 5px;
  border-radius: 30px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #783fbc;
  }
`;
