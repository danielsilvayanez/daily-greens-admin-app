import React from "react";
import styled from "styled-components";
// import Settings from "../pages/Settings";

import Deliverylist from "../pages/Deliverylist";

export default function Home({
  deliveries,
  setDeliveries,
  meals,
  date,
  drivers,
}) {
  return (
    <DashboardContainer>
      {/* <Settings dbData={meals} /> */}
      <Deliverylist
        deliveries={deliveries}
        setDeliveries={setDeliveries}
        meals={meals}
        date={date}
        drivers={drivers}
      />
    </DashboardContainer>
  );
}

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
