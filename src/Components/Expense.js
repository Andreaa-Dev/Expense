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
  width: 10rem;
  height: 3rem;
`;

const Button = styled.button`
  font-family: inherit;
  border-radius: 12px;
  width: 4rem;
  height: 2rem;
  margin-top: 1rem;

  margin-left: 5rem;
`;

const ButtonAmount = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40rem;
`;

const Title = styled.div`
  margin-left: 0rem;
`;

function Expense(props) {
  const { date, title, amount } = props.expense;
  const { deleteHandler, id } = props;

  let year;
  let month;
  let day;

  year = new Date(date).getFullYear();
  month = new Date(date).toLocaleString("default", { month: "long" });
  day = new Date(date).getDate();
  console.log("year", year);
  console.log("props", props);

  console.log("id", id);
  console.log("delete", deleteHandler);
  return (
    <CardStyle>
      <ExpenseDate month={month} day={day} year={year} />
      <Title>{title}</Title>
      <ButtonAmount>
        <AmountCard>{amount}($)</AmountCard>
      </ButtonAmount>
      <Button
        onClick={(event) => {
          deleteHandler(id);
        }}
      >
        Delete
      </Button>
    </CardStyle>
  );
}

export default Expense;
