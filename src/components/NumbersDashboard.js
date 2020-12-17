import React from 'react';
import styled from 'styled-components';

export default function Home({ deliveries }) {
  const reducer = (a, b) => a + b;

  const dayMealDailyTotal = deliveries
    .map((delivery) => delivery.dayMeal)
    .reduce(reducer);

  const weekMealDailyTotal = deliveries
    .map((delivery) => delivery.weekMeal)
    .reduce(reducer);

  const boxDailyTotal = deliveries
    .map((delivery) => delivery.box)
    .reduce(reducer);

  return (
    <NumbersContainer>
      <h1>Übersicht</h1>
      <p>Tagesgericht gesamt: {dayMealDailyTotal}</p>
      <p>Wochengericht gesamt: {weekMealDailyTotal}</p>
      <p>Pfandboxen zurück: {boxDailyTotal}</p>
    </NumbersContainer>
  );
}

const NumbersContainer = styled.section`
  padding: 20px;
`;
