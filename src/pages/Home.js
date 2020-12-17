import React from 'react';
import styled from 'styled-components';
import NumbersDashboard from '../components/NumbersDashboard';
import Driverlist from '../pages/Driverlist';

export default function Home({ deliveries }) {
  return (
    <DashboardContainer>
      <NumbersDashboard deliveries={deliveries} />
      <Driverlist deliveries={deliveries} />
    </DashboardContainer>
  );
}

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
