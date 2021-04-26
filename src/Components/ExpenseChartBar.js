import React from "react";
import styled from "styled-components";

const ChartColum = styled.div`
  height: 100%;
  border: 1px solid black;
  height: 50px;
  border-radius: 5px;
  width: 1rem;
`;

const ChartFill = styled.div`
  background-color: #6f9eaf;
`;

function ExpenseChartBar(props) {
  const { label, value, totalValue } = props;

  let chartBarHeight = "0%";
  if (totalValue > 0) {
    chartBarHeight = Math.round((value / totalValue) * 100) + "%";
  }
  return (
    <div>
      <ChartColum>
        <ChartFill style={{ height: chartBarHeight }} />
      </ChartColum>

      <div>{label}</div>
    </div>
  );
}

export default ExpenseChartBar;
