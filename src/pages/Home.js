import React from 'react';
import NumbersDashboard from '../components/NumbersDashboard';
import Driverlist from '../pages/Driverlist';

export default function Home({ deliveries }) {
  return (
    <>
      <NumbersDashboard deliveries={deliveries} />
      <Driverlist deliveries={deliveries} />
    </>
  );
}
