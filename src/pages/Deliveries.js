import React from 'react'
import styled from 'styled-components'
import Delivery from '../components/Delivery'

export default function Deliveries({ deliveries, setDeliveries }) {
  return (
    <List>
      {deliveries.map((delivery, index) => (
        <Delivery
          delivery={delivery}
          index={index}
          setDeliveries={setDeliveries}
          deliveries={deliveries}
        />
      ))}
    </List>
  )
}

const List = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
