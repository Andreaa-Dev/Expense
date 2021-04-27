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
  font-size: 1.5rem;
  width: 35vw;
  height: 14rem;
`;

const ExpenseInputSmall = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row1 = styled.div`
  display: flex;
  flex-direction: table;
  justify-content: space-around;
  width: 35vw;
  margin-bottom: 3px;
`;
const Row2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
  justify-content: flex-start;
`;

const Button = styled.button`
  font-family: inherit;
  border-radius: 12px;
  width: 5rem;
  height: 2rem;
  margin: auto 23rem 1rem;
  font-size: 1.3rem;
`;
const Input = styled.input`
  border-radius: 0.3rem;
  width: 5rem;
  height: 1.4rem;
  margin-left: 1rem;
`;
const DateInput = styled.input`
  border-radius: 0.3rem;
  width: 8.2rem;
  height: 1.4rem;
  margin-left: 1rem;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const H1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
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
      const newState = [...prevState, expense];

      const storage = JSON.stringify(newState);
      localStorage.setItem("storage", storage);
      return newState;
    });
  };

  return (
    <ExpenseInputStyle onSubmit={submitHandler}>
      <ExpenseInputSmall>
        <H1>Add expense</H1>
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
              <label>Date</label>
              <DateInput
                type="date"
                value={enteredDate}
                min="2019-01-01"
                max="2022-12-31"
                onChange={(event) => {
                  const date = new Date(event.target.value).toISOString();
                  setEnteredDate(date);
                }}
              />
            </InputBox>
          </Row1>

          <InputBox style={{ marginLeft: "0.08rem" }}>
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
          <Button>Add</Button>
        </Row2>
      </ExpenseInputSmall>
    </ExpenseInputStyle>
  );
}

export default ExpenseInput;
