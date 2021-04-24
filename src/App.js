import react from "react";
import "./App.css";
import styled from "styled-components";

import CardExpense from "./Components/CardExpense";
import Expense from "./Components/Expense";
import ExpenseInput from "./Components/ExpenseInput";

const Title = styled.h1`
  color: white;
`;

const ExpenseInputStyled = styled.div`
  margin: 3rem auto 3rem auto;
`;
function App() {
  const expense = {
    title: "Book",
    amount: "12.99$",
    date: new Date(2021, 4, 5),
  };
  return (
    <div>
      <Title>EXPENSE</Title>
      <ExpenseInputStyled>
        <ExpenseInput />
      </ExpenseInputStyled>

      <CardExpense>
        <Expense
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      </CardExpense>
    </div>
  );
}

export default App;
