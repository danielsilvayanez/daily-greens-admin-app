import React from "react";
import styled from "styled-components";
import Driver from "../components/Driver";

export default function Driverlist({ deliveries, setDeliveries }) {
  return (
    <List>
      {deliveries.map((delivery, index) => (
        <Driver
          delivery={delivery}
          index={index}
          setDeliveries={setDeliveries}
          deliveries={deliveries}
        />
      ))}
    </List>
  );
}

const List = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
