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
  border: 0.2rem black solid;
  margin-bottom: 0.5rem;
`;

const AmountCard = styled.div`
  border-radius: 12px;
  background-color: #7868e6;
  padding: 0.5rem;
`;

const Button = styled.button`
  font-family: inherit;
  border-radius: 12px;
  width: 4rem;
  height: 2rem;
  margin-top: 1rem;

  margin-left: 5rem;
`;

const ButtoNnAmount = styled.div`
  display: flex;
  flex-direction: column;
`;

function Expense(props) {
  const { date, title, amount, id } = props.expense;

  let year;
  let month;
  let day;

  year = new Date(date).getFullYear();
  month = new Date(date).toLocaleString("default", { month: "long" });
  day = new Date(date).getDate();
  console.log("year", year);

  return (
    <CardStyle>
      {id}
      <ExpenseDate month={month} day={day} year={year} />
      <div>{title}</div>
      <ButtoNnAmount>
        <AmountCard>{amount}($)</AmountCard>
        <Button>Delete</Button>
      </ButtoNnAmount>
    </CardStyle>
  );
}

export default Expense;
