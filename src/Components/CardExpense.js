import React from "react";
import styled from "styled-components";
import ExpenseFilter from "./ExpenseFilter";

const CardStyled = styled.div`
  border-radius: 12px;
  background-color: #b4aee8;
  padding: 0.5rem;
  align-items: center;
`;

function CardExpense(props) {
  const {
    children,
    expenseList,
    setExpenseList,
    expenseFilter,
    setExpenseFilter,
  } = props;
  return (
    <CardStyled>
      <ExpenseFilter
        expenseList={expenseList}
        setExpenseFilter={setExpenseFilter}
      />
      {children}
    </CardStyled>
  );
}

export default CardExpense;
