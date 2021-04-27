import React from "react";
import styled from "styled-components";

const DateCard = styled.div`
  border-radius: 12px;
  background-color: #28527a;
  width: 5.5rem;
  height: 5.5rem;
  color: white;
`;
const Month = styled.div`
  font-size: 20px;
`;
const Year = styled.div`
  font-size: 10px;
  font-weight: bold;
`;
const Day = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

function ExpenseDate(props) {
  const { month, day, year } = props;

  return (
    <DateCard>
      <Month>{month}</Month>
      <Year>{year}</Year>
      <Day>{day}</Day>
    </DateCard>
  );
}

export default ExpenseDate;
