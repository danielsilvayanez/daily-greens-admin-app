import React, { useEffect } from 'react'
import styled from 'styled-components'
import Meals from '../components/Meals'
// import NumbersDashboard from '../components/NumbersDashboard'
import Deliverylist from '../pages/Deliverylist'

export default function Home({ deliveries, setDeliveries, meals, date }) {
  return (
    <DashboardContainer>
      <Meals dbData={meals} />
      {/* <NumbersDashboard deliveries={deliveries} /> */}
      <Deliverylist
        deliveries={deliveries}
        setDeliveries={setDeliveries}
        meals={meals}
        date={date}
      />
    </DashboardContainer>
  )
}

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
