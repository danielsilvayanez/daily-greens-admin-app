import { set } from 'object-path';
import React from 'react';
import styled from 'styled-components';
import NumbersDashboard from '../components/NumbersDashboard';
import Driverlist from '../pages/Driverlist';

export default function Home({ deliveries, setDeliveries, drivers }) {
  return (
    <DashboardContainer>
      <NumbersDashboard deliveries={deliveries} />
      <Driverlist
        deliveries={deliveries}
        setDeliveries={setDeliveries}
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
