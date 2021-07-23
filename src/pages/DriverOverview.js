import React, { useState } from "react";
import styled from "styled-components";
import Delivery from "../components/Delivery";
import DriverDeliveryIndividual from "../components/DriverDeliveryIndividual";

export default function Deliverylist({
  deliveries,
  setDeliveries,
  meals,
  date,
  drivers,
}) {
  const tomorrow = new Date(86400000 + +new Date());
  const nextDay =
    tomorrow.getFullYear() +
    "-" +
    ("0" + (tomorrow.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + tomorrow.getDate()).slice(-2);

  let totalDeliveriesToday = 0;
  let totalDeliveriesTomorrow = 0;

  deliveries.map((del) => {
    if (del.document.date === date) {
      totalDeliveriesToday++;
    } else if (del.document.date === nextDay) {
      totalDeliveriesTomorrow++;
    }
  });

  // const [driverContentVisible, setdriverContentVisible] = useState('');

  return (
    <React.Fragment>
      <StyledContainer>
        <H2>
          Heute ({totalDeliveriesToday})
        </H2>
        {drivers.map((driver) =>
          <DriverDeliveryIndividual deliveries={deliveries} setDeliveries={setDeliveries} meals={meals} date={date} drivers={drivers} driver={driver} />
        )}

        <H2>
          Morgen ({totalDeliveriesTomorrow})
        </H2>
        {drivers.map((driver) =>
          <DriverDeliveryIndividual deliveries={deliveries} setDeliveries={setDeliveries} meals={meals} date={nextDay} drivers={drivers} driver={driver} />
        )}

      </StyledContainer>
    </React.Fragment>
  );
}

const List = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H2 = styled.h2`
  margin: 15px 0 10px;
`;

const H3 = styled.h3`
  background-color: var(--primaryBGBtnGreen);
  padding: 10px;
  margin-bottom: 5px;
  width: 500px;
  border-bottom: 1px solid black;
  border-radius: 5%;
`;
