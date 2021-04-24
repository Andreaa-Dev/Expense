import React from "react";
import styled from "styled-components";

const ExpenseInputStyle = styled.div`
  display: flex;
  flex-direction: table-column;
  justify-content: space-between;
  border-radius: 12px;
  background-color: #b4aee8;
  padding: 0.5rem;
  align-items: center;
  font-size: 3rem;
`;

function ExpenseInput() {
  return (
    <ExpenseInputStyle>
      <div>
        <div>
          <label> Title</label>
          <input type="text" />
        </div>

        <div>
          <label>Amount</label>
          <input type="text" min="0.01" step="0.01" />
        </div>
      </div>

      <div>
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2022-12-31" />
      </div>

      <button>Add Expense</button>
    </ExpenseInputStyle>
  );
}

export default ExpenseInput;
