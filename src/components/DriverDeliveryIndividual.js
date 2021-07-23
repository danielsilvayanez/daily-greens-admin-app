import React, { useState } from "react";
import styled from "styled-components";
import Delivery from "../components/Delivery";

export default function DriverDeliveryIndividual({ deliveries,
  setDeliveries,
  meals,
  date,
  driver,
  drivers }) {
  const [driverContentVisible, setdriverContentVisible] = useState(false);

  return (
    <div>
      <H3 onClick={() => {
        setdriverContentVisible(!driverContentVisible);
      }}
      >
        {driver.drivername}
      </H3>
      <List>
        {deliveries.map(
          (delivery, index) =>
            !delivery.document.done &&
            delivery.document.date === date &&
            delivery.document.driverId === driver.driverid &&
            (
              <Delivery
                meals={meals}
                delivery={delivery.document}
                index={index}
                setDeliveries={setDeliveries}
                deliveries={deliveries}
                documentId={delivery.documentId}
                key={delivery.documentId}
                drivers={drivers}
              />
            )
        )}
      </List>
    </div>
  )
}


const H3 = styled.h3`
  background-color: var(--primaryBGBtnGreen);
  padding: 10px;
  margin-bottom: 5px;
  width: 500px;
  border-bottom: 1px solid black;
  border-radius: 5%;
`;


const List = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;