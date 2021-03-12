import React from 'react'
import Delivery from '../components/Delivery'
import styled from 'styled-components'
export default function Archive({ deliveries, setDeliveries, meals }) {
  return (
    <StyledUl>
      {deliveries.map(
        (delivery, index) =>
          delivery.document.done && (
            <Delivery
              delivery={delivery.document}
              meals={meals}
              index={index}
              deliveries={deliveries}
              setDeliveries={setDeliveries}
              documentId={delivery.documentId}
              key={delivery.documentId}
            />
          )
      )}
    </StyledUl>
  )
}

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
