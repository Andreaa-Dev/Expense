import React, { useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 5rem 64rem 3rem auto;
`;

const Select = styled.select`
  border-radius: 0.3rem;
  height: 1.5rem;
  width: 3.5rem;
`;

const ExpenseFilterStyle = styled.div`
  margin: 1rem auto 1rem auto;
`;

function ExpenseFilter(props) {
  const { expenseList, setExpenseFilter } = props;

  const filterByYearHandler = (yearSelected) => {
    const result = expenseList.filter((expense) => {
      return yearSelected == expense.date.getFullYear();
    });

    setExpenseFilter(result);
  };

  return (
    <ExpenseFilterStyle>
      <Label>Filter by year</Label>
      <Select
        onChange={(event) => {
          filterByYearHandler(event.target.value);
        }}
      >
        <option value="2019"> 2019</option>
        <option value="2020"> 2020</option>
        <option value="2021"> 2021</option>
      </Select>
    </ExpenseFilterStyle>
  );
}

export default ExpenseFilter;
