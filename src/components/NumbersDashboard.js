import React from 'react';

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
    <section>
      <h1>Übersicht</h1>
      <p>Tagesgericht gesamt: {dayMealDailyTotal}</p>
      <p>Wochengericht gesamt: {weekMealDailyTotal}</p>
      <p>Pfandboxen zurück: {boxDailyTotal}</p>
    </section>
  );
}
