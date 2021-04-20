import React from "react";
import DayTotals from "../components/DayTotals";
import styled from "styled-components";

export default function Dashboard({ deliveries, meals }) {
  function createDateString(dayCount) {
    const dateObj = new Date(dayCount * 86400000 + +new Date());
    const dateString =
      dateObj.getFullYear() +
      "-" +
      ("0" + (dateObj.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + dateObj.getDate()).slice(-2);
    return dateString;
  }

  const totalDays = {
    day1: [],
    day2: [],
    day3: [],
    day4: [],
    day5: [],
    day6: [],
    day7: [],
  };

  deliveries.map((delivery) => {
    delivery.document.date === createDateString(0) &&
      totalDays.day1.push(delivery.document);
    delivery.document.date === createDateString(1) &&
      totalDays.day2.push(delivery.document);
    delivery.document.date === createDateString(2) &&
      totalDays.day3.push(delivery.document);
    delivery.document.date === createDateString(3) &&
      totalDays.day4.push(delivery.document);
    delivery.document.date === createDateString(4) &&
      totalDays.day5.push(delivery.document);
    delivery.document.date === createDateString(5) &&
      totalDays.day6.push(delivery.document);
    delivery.document.date === createDateString(6) &&
      totalDays.day7.push(delivery.document);
  });

  return (
    <StyledArea>
      <TotalContainer>
        <h1>{createDateString(0)}</h1>
        <DayTotals deliveries={totalDays.day1} meals={meals} />
      </TotalContainer>
      <TotalContainer>
        <h1>{createDateString(1)}</h1>
        <DayTotals deliveries={totalDays.day2} meals={meals} />
      </TotalContainer>
      <TotalContainer>
        <h1>{createDateString(2)}</h1>
        <DayTotals deliveries={totalDays.day3} meals={meals} />
      </TotalContainer>
      <TotalContainer>
        <h1>{createDateString(3)}</h1>
        <DayTotals deliveries={totalDays.day4} meals={meals} />
      </TotalContainer>
      <TotalContainer>
        <h1>{createDateString(4)}</h1>
        <DayTotals deliveries={totalDays.day5} meals={meals} />
      </TotalContainer>
      <TotalContainer>
        <h1>{createDateString(5)}</h1>
        <DayTotals deliveries={totalDays.day6} meals={meals} />
      </TotalContainer>
      <TotalContainer>
        <h1>{createDateString(6)}</h1>
        <DayTotals deliveries={totalDays.day7} meals={meals} />
      </TotalContainer>
    </StyledArea>
  );
}

const StyledArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  flex-direction: column;

  h1 {
    text-align: center;
    color: var(--primaryBgWhite);
  }
`;

const TotalContainer = styled.div`
  border: 1px solid black;
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
  margin-top: 15px;
  background-color: var(--primaryBGBtnGreen);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
