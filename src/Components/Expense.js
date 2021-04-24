import React from "react";
import ExpenseDate from "./ExpenseDate";
import styled from "styled-components";

const CardStyle = styled.div`
  display: flex;
  flex-direction: table-column;
  justify-content: space-between;
  border-radius: 12px;
  background-color: #b4aee8;
  padding: 0.5rem;
  align-items: center;
  font-size: 3rem;
`;

const AmountCard = styled.div`
  border-radius: 12px;
  background-color: #7868e6;
  padding: 0.5rem;
`;

function Expense(props) {
  const { date, title, amount } = props;

  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <CardStyle>
      <ExpenseDate month={month} day={day} year={year} />
      <div>{title}</div>
      <AmountCard>{amount}</AmountCard>
    </CardStyle>
  );
}

export default Expense;