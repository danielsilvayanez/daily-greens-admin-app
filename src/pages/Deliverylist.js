import React from 'react'
import styled from 'styled-components'
import Delivery from '../components/Delivery'

export default function Deliverylist({ deliveries, setDeliveries }) {
  return (
    <List>
      {deliveries.map((delivery, index) => (
        <Delivery
          delivery={delivery.document}
          index={index}
          setDeliveries={setDeliveries}
          deliveries={deliveries}
          documentId={delivery.documentId}
          key={delivery.documentId}
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
