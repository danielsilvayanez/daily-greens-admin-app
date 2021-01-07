import React from "react";
import styled from "styled-components";
import NumbersDashboard from "../components/NumbersDashboard";
import Driverlist from "../pages/Driverlist";

export default function Home({ deliveries, setDeliveries }) {
  return (
    <DashboardContainer>
      <NumbersDashboard deliveries={deliveries} />
      <Driverlist deliveries={deliveries} setDeliveries={setDeliveries} />
    </DashboardContainer>
  );
}

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
