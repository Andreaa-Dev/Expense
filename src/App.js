import react, { useState } from "react";
import "./App.css";

import styled from "styled-components";

import CardExpense from "./Components/CardExpense";
import Expense from "./Components/Expense";
import ExpenseInput from "./Components/ExpenseInput";

const Title = styled.h1`
  color: white;
  display: inline-block;
`;

const ExpenseInputStyled = styled.div`
  margin: 3rem auto 3rem auto;
`;

function App() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [expenseList, setExpenseList] = useState([]);

  const [expenseFilter, setExpenseFilter] = useState([]);

  const id = Math.random();

  return (
    <div>
      <Title>EXPENSE</Title>
      <ExpenseInputStyled>
        <ExpenseInput
          setEnteredTitle={setEnteredTitle}
          enteredTitle={enteredTitle}
          setEnteredAmount={setEnteredAmount}
          enteredAmount={enteredAmount}
          setEnteredDate={setEnteredDate}
          enteredDate={enteredDate}
          setExpenseList={setExpenseList}
        />
      </ExpenseInputStyled>

      <CardExpense
        expenseList={expenseList}
        setExpenseFilter={setExpenseFilter}
      >
        {expenseList.map((expense) => {
          return <Expense expense={expense} id={id} />;
        })}
      </CardExpense>
    </div>
  );
}

export default App;
