import React from "react";
import styled from "styled-components";
import Delivery from "../components/Delivery";

export default function Deliverylist({
  deliveries,
  setDeliveries,
  meals,
  date,
}) {
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
              />
            )
        )}
      </List>
      <H2>Zukunft</H2>
      <List>
        {deliveries.map(
          (delivery, index) =>
            !delivery.document.done &&
            delivery.document.date !== date && (
              <Delivery
                meals={meals}
                delivery={delivery.document}
                index={index}
                setDeliveries={setDeliveries}
                deliveries={deliveries}
                documentId={delivery.documentId}
                key={delivery.documentId}
              />
            )
        )}
      </List>
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
