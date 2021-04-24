import React from "react";
import styled from "styled-components";

const CardStyled = styled.div`
  border-radius: 12px;
  background-color: #b4aee8;
  padding: 0.5rem;
  align-items: center;
`;

function CardExpense(props) {
  const { children } = props;
  return <CardStyled>{children}</CardStyled>;
}

export default CardExpense;
