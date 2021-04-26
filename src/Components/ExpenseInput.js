import React, { useState } from "react";
import styled from "styled-components";

const ExpenseInputStyle = styled.form`
  display: flex;
  flex-direction: table-column;
  justify-content: space-between;
  border-radius: 12px;
  background-color: #b4aee8;
  padding: 0.5rem;
  align-items: center;
  font-size: 3rem;
`;
const Row1 = styled.div`
  display: flex;
  flex-direction: table;
  justify-content: space-around;
  width: 100vw;
`;
const Row2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  justify-content: flex-start;
`;

const Button = styled.button`
  font-family: inherit;
  border-radius: 12px;
  width: 9rem;
  height: 2rem;
  margin: auto 65rem 1rem;
  font-size: 1.3rem;
`;
const Input = styled.input`
  border-radius: 0.3rem;
  width: 9rem;
  height: 1.4rem;
  margin-left: 1rem;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function ExpenseInput(props) {
  const {
    setEnteredTitle,
    setEnteredDate,
    setEnteredAmount,
    enteredTitle,
    enteredAmount,
    enteredDate,
    setExpenseList,
    id,
  } = props;

  const submitHandler = (event) => {
    event.preventDefault();
    const expense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");

    setExpenseList((prevState) => {
      return [...prevState, expense];
    });
  };

  return (
    <ExpenseInputStyle onSubmit={submitHandler}>
      <Row2>
        <Row1>
          <InputBox>
            <label> Title</label>

            <Input
              type="text"
              value={enteredTitle}
              onChange={(event) => {
                setEnteredTitle(event.target.value);
              }}
            />
          </InputBox>

          <InputBox>
            <label>Amount</label>
            <Input
              type="number"
              value={enteredAmount}
              min="0.01"
              step="0.01"
              onChange={(event) => {
                setEnteredAmount(event.target.value);
              }}
            />
          </InputBox>
        </Row1>

        <InputBox style={{ marginLeft: "11rem" }}>
          <label>Date</label>
          <Input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={(event) => {
              const date = new Date(event.target.value);
              setEnteredDate(date);
            }}
          />
        </InputBox>
        <Button>Add Expense</Button>
      </Row2>
    </ExpenseInputStyle>
  );
}

export default ExpenseInput;
