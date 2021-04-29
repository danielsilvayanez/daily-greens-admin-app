import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function DayTotals({ deliveries, meals }) {
  const reducer = (a, b) => a + b;
  const [dayMeal1DailyTotal, setDayMeal1DailyTotal] = useState(0);
  const [dayMeal2DailyTotal, setDayMeal2DailyTotal] = useState(0);
  const [dayMeal3DailyTotal, setDayMeal3DailyTotal] = useState(0);
  const [dayMeal4DailyTotal, setDayMeal4DailyTotal] = useState(0);
  const [dayMeal5DailyTotal, setDayMeal5DailyTotal] = useState(0);
  const [dailyDessert1Total, setdailyDessert1Total] = useState(0);
  const [dailyDessert2Total, setdailyDessert2Total] = useState(0);
  // const [boxSmallDailyTotal, setBoxSmallDailyTotal] = useState(0);
  const [extras, setExtras] = useState([]);
  // const [boxDailyTotal, setBoxDailyTotal] = useState(0);

  useEffect(() => {
    if (deliveries.length > 0) {
      setDayMeal1DailyTotal(
        deliveries.map((delivery) => Number(delivery.daymeal1)).reduce(reducer)
      );

      setDayMeal2DailyTotal(
        deliveries.map((delivery) => Number(delivery.daymeal2)).reduce(reducer)
      );

      setDayMeal3DailyTotal(
        deliveries.map((delivery) => Number(delivery.daymeal3)).reduce(reducer)
      );

      setDayMeal4DailyTotal(
        deliveries.map((delivery) => Number(delivery.daymeal4)).reduce(reducer)
      );

      setDayMeal5DailyTotal(
        deliveries.map((delivery) => Number(delivery.daymeal5)).reduce(reducer)
      );

      setdailyDessert1Total(
        deliveries.map((delivery) => Number(delivery.dessert1)).reduce(reducer)
      );

      setdailyDessert2Total(
        deliveries.map((delivery) => Number(delivery.dessert2)).reduce(reducer)
      );

      // setBoxDailyTotal(
      //   deliveries.map((delivery) => Number(delivery.box)).reduce(reducer)
      // );

      // setBoxSmallDailyTotal(
      //   deliveries.map((delivery) => Number(delivery.smallbox)).reduce(reducer)
      // );
      setExtras(Object.entries(getExtras()));
    }
  }, [deliveries]);

  function getExtras() {
    const keys = [];
    const values = [];
    let cache = {};

    deliveries.map((delivery) => {
      keys.push(...Object.keys(delivery.extra));
      values.push(...Object.values(delivery.extra));
    });

    keys.map((key, index) => {
      key in cache
        ? (cache = {
            ...cache,
            [key]: Number(cache[key]) + Number(values[index]),
          })
        : (cache = { ...cache, [key]: Number(values[index]) });
    });
    return cache;
  }

  return (
    <div>
      <StyledOverview>
        {meals?.document && dayMeal1DailyTotal > 0 && (
          <p>
            {meals?.document?.daymeal1}: {dayMeal1DailyTotal}
          </p>
        )}
        {meals?.document && dayMeal2DailyTotal > 0 && (
          <p>
            {meals?.document?.daymeal2}: {dayMeal2DailyTotal}
          </p>
        )}
        {meals?.document && dayMeal3DailyTotal > 0 && (
          <p>
            {meals?.document?.daymeal3}: {dayMeal3DailyTotal}
          </p>
        )}
        {meals?.document && dayMeal4DailyTotal > 0 && (
          <p>
            {meals?.document?.daymeal4}: {dayMeal4DailyTotal}
          </p>
        )}
        {meals?.document && dayMeal5DailyTotal > 0 && (
          <p>
            {meals?.document?.daymeal5}: {dayMeal5DailyTotal}
          </p>
        )}
        {meals?.document && dailyDessert1Total > 0 && (
          <p>
            {meals?.document?.dessert1}: {dailyDessert1Total}
          </p>
        )}
        {meals?.document && dailyDessert2Total > 0 && (
          <p>
            {meals?.document?.dessert2}: {dailyDessert2Total}
          </p>
        )}
        <br />
        {extras.map((extra) => (
          <p>
            {extra[0]}: {extra[1]}
          </p>
        ))}
      </StyledOverview>
    </div>
  );
}

const StyledOverview = styled.section`
  margin-top: 10px;
  padding: 20px;
  font-size: 1.6em;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 25px;
  background-color: var(--primaryBgWhite);
  width: 500px;
`;
