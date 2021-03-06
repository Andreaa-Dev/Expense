import React, { useEffect } from "react";
import Expense from "./Expense";
import styled from "styled-components";

const AllExpenseStyle = styled.div`
  border-radius: 12px;
  background-color: #b4aee8;
  padding: 0.5rem;
  margin: auto 4rem 2rem 2rem;

  text-align: center;
`;

function AllExpense(props) {
  const { setExpenseList, expenseList, deleteHandler, id } = props;

  useEffect(() => {
    const storage = localStorage.getItem("storage");
    const newStorage = JSON.parse(storage);
    console.log("newStorage", newStorage);
    setExpenseList(newStorage);
  }, []);

  return (
    <AllExpenseStyle>
      <h1>All expense</h1>

      {expenseList.map((expense) => {
        return (
          <Expense expense={expense} deleteHandler={deleteHandler} id={id} />
        );
      })}
    </AllExpenseStyle>
  );
}

export default AllExpense;
