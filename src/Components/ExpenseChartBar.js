import React from "react";
import styled from "styled-components";

const ChartColum = styled.div`
  height: 100%;
  border: 1px solid black;
  height: 6rem;
  width: 1.3rem;
  border-radius: 5px;

  background-color: #b67171;
`;

const ChartFill = styled.div`
  background-color: #6f9eaf;
`;

const ChartTitle = styled.div`
  font-weight: bold;
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

      <ChartTitle>{label}</ChartTitle>
    </div>
  );
}

export default ExpenseChartBar;
