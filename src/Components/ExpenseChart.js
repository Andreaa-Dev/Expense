import React from "react";
import styled from "styled-components";
import ExpenseChartBar from "./ExpenseChartBar";

const ExpenseChartStyle = styled.div`
  border-radius: 12px;
  background-color: #c1a1d3;
  padding: 0.5rem;
  margin-bottom: 2rem;
`;

const Style = styled.div`
  display: flex;
  flex-direction: table;
  justify-content: space-around;
`;
function ExpenseChart(props) {
  const { expenseList } = props;

  const dataChart = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  let totalValue = 0;

  expenseList.forEach((expense) => {
    const userAmount = expense.amount;
    const currentMonth = new Date(expense.date).getMonth();
    dataChart[currentMonth].value += userAmount;
    totalValue += userAmount;
  });

  return (
    <ExpenseChartStyle>
      <h1>Expense Chart</h1>
      <Style>
        {dataChart.map((dataPoint) => (
          <ExpenseChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            totalValue={totalValue}
            label={dataPoint.label}
          />
        ))}
      </Style>
    </ExpenseChartStyle>
  );
}

export default ExpenseChart;
