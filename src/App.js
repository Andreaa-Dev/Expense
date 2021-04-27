import react, { useState, useEffect } from "react";
import "./App.css";

import styled from "styled-components";

import CardExpense from "./Components/CardExpense";
import Expense from "./Components/Expense";
import ExpenseInput from "./Components/ExpenseInput";
import ExpenseChart from "./Components/ExpenseChart";
import AllExpense from "./Components/AllExpense";

const Title = styled.h1`
  color: white;
  margin: 2rem auto 2.5rem auto;
`;

const ExpenseInputStyled = styled.div`
  float: left;
  width: 25vw;
  margin-left: 2rem;
`;

const ExpenseRow1 = styled.div`
  display: flex;
  flex-direction: table; ;
`;
const ExpenseChartStyle = styled.div`
  width: 50vw;
  margin-left: 15rem;
`;

function App() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [expenseList, setExpenseList] = useState([]);

  const [expenseFilter, setExpenseFilter] = useState([]);

  const id = Math.random();

  const deleteHandler = (deletedId) => {
    const result = expenseList.filter((expense) => {
      console.log("id", id);
      console.log("deleted", deletedId);

      return deletedId !== expense.id;
    });
    console.log("result", result);
    setExpenseList(result);
  };

  return (
    <div>
      <Title>EXPENSE TRACKER</Title>

      <ExpenseRow1>
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
        <ExpenseChartStyle>
          <ExpenseChart expenseList={expenseList} />
        </ExpenseChartStyle>
      </ExpenseRow1>

      <AllExpense
        setExpenseList={setExpenseList}
        expenseList={expenseList}
        deleteHandler={deleteHandler}
        id={id}
      />

      <CardExpense
        expenseList={expenseList}
        setExpenseFilter={setExpenseFilter}
      >
        {expenseFilter.length === 0
          ? "No expense found"
          : expenseFilter.map((expense) => {
              return <Expense expense={expense} id={id} />;
            })}
      </CardExpense>
    </div>
  );
}

export default App;
