import React, { useState } from "react";
import styled from "styled-components";
import Delivery from "../components/Delivery";

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

  const [driverContentVisible, setDriverContentVisible] = useState(false);

  return (
    <React.Fragment>
      <StyledContainer>
        <H2
          onClick={(event) => {
            setDriverContentVisible(!driverContentVisible);
            console.log("event", event);
          }}
        >
          Heute ({totalDeliveriesToday})
        </H2>
        {drivers.map((driver) => {
          return (
            <div>
              <H3
                onClick={(event) => {
                  setDriverContentVisible(!driverContentVisible);
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
                    driverContentVisible && (
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
          );
        })}
      </StyledContainer>

      <StyledContainer>
        <H2
          onClick={(event) => {
            setDriverContentVisible(!driverContentVisible);
          }}
        >
          Morgen ({totalDeliveriesTomorrow})
        </H2>
        {drivers.map((driver) => {
          return (
            <div>
              <H3
                key={driver.driverid}
                onClick={(event) => {
                  setDriverContentVisible(!driverContentVisible);
                }}
              >
                {driver.drivername}
              </H3>
              <List>
                {deliveries.map(
                  (delivery, index) =>
                    !delivery.document.done &&
                    delivery.document.date === nextDay &&
                    delivery.document.driverId === driver.driverid &&
                    driverContentVisible && (
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
          );
        })}
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
