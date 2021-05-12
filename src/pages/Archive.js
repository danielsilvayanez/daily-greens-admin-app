import React from "react";
import Delivery from "../components/Delivery";
import styled from "styled-components";
export default function Archive({
  deliveries,
  setDeliveries,
  meals,
  date,
  drivers,
}) {
  function compare(a, b) {
    const dateA = a.document.date;
    const dateB = b.document.date;

    let comparison = 0;
    if (dateA < dateB) {
      comparison = 1;
    } else {
      comparison = -1;
    }
    return comparison;
  }

  return (
    <div>
      <StyledUl>
        <H2>Heute</H2>
        {deliveries.map(
          (delivery, index) =>
            delivery.document.done &&
            delivery.document.date === date && (
              <Delivery
                delivery={delivery.document}
                meals={meals}
                index={index}
                deliveries={deliveries}
                setDeliveries={setDeliveries}
                documentId={delivery.documentId}
                key={delivery.documentId}
                drivers={drivers}
              />
            )
        )}
      </StyledUl>
      <StyledUl>
        <H2>Ältere Aufträge</H2>
        {deliveries.map(
          (delivery, index) =>
            delivery.document.done &&
            delivery.document.date !== date && (
              <Delivery
                delivery={delivery.document}
                meals={meals}
                index={index}
                deliveries={deliveries}
                setDeliveries={setDeliveries}
                documentId={delivery.documentId}
                key={delivery.documentId}
                drivers={drivers}
              />
            )
        )}
      </StyledUl>
    </div>
  );
}

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H2 = styled.h2`
  margin: 15px 0 0;
`;
