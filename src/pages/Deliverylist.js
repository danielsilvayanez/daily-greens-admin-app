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
  const [details, setDetails] = useState(true);
  const tomorrow = new Date(86400000 + +new Date());
  const nextDay =
    tomorrow.getFullYear() +
    "-" +
    ("0" + (tomorrow.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + tomorrow.getDate()).slice(-2);

  function compare(a, b) {
    const dateA = a.document.date;
    const dateB = b.document.date;

    let comparison = 0;
    if (dateA < dateB) {
      comparison = -1;
    } else {
      comparison = 1;
    }
    return comparison;
  }

  return (
    <StyledListContainer>
      <H2>Heute</H2>
      <List>
        {deliveries.map(
          (delivery, index) =>
            !delivery.document.done &&
            delivery.document.date === date && (
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
      <H2>Morgen</H2>
      <List>
        {deliveries.map(
          (delivery, index) =>
            !delivery.document.done &&
            delivery.document.date === nextDay && (
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

      <H2Click onClick={() => setDetails(!details)}>
        Zukünftige Aufträge
      </H2Click>
      {details && (
        <List>
          {deliveries.sort(compare) &&
            deliveries.map(
              (delivery, index) =>
                !delivery.document.done &&
                delivery.document.date > nextDay && (
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
      )}
    </StyledListContainer>
  );
}

const List = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledListContainer = styled.div``;

const H2 = styled.h2`
  margin: 15px 0 0;
`;

const H2Click = styled.h2`
  cursor: pointer;
  margin: 15px 0 0;
`;
