import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ArrowUpIcon from '../icons/ArrowUpIcon'
import Edit from './Edit'

export default function Delivery({
  delivery,
  index,
  deliveries,
  setDeliveries,
}) {
  const [details, setDetails] = useState(false)
  useEffect(() => {
    console.log(details)
  }, [details])

  const [toggleEdit, setToggleEdit] = useState(false)
  const [keyEdit, setKeyEdit] = useState('')

  return (
    <>
      {details ? (
        <Container height="150">
          <StyledArrowUpIcon onClick={() => setDetails(!details)} />

          <p onClick={() => toggleEditField('name')}>{delivery.name}</p>
          <p onClick={() => toggleEditField('street')}>{delivery.street}</p>
          <p onClick={() => toggleEditField('phone')}>{delivery.phone}</p>
          <p onClick={() => toggleEditField('dayMeal')}>
            Tagesessen: {delivery.dayMeal}
          </p>
          <p onClick={() => toggleEditField('weekMeal')}>
            Wochenessen: {delivery.weekMeal}
          </p>
          <p onClick={() => toggleEditField('driver')}>{delivery.driver}</p>
          <p onClick={() => toggleEditField('stop')}>{delivery.stop}. Stopp</p>
          <p onClick={() => toggleEditField('message')}>{deliveries.message}</p>
        </Container>
      ) : (
        <Container onClick={() => setDetails(!details)}>
          <p>{delivery.name}</p>
          <p>{delivery.street}</p>
        </Container>
      )}
      {toggleEdit && (
        <Edit
          deliveries={deliveries}
          setDeliveries={setDeliveries}
          index={index}
          inputName={keyEdit}
          setToggleEdit={setToggleEdit}
        />
      )}
    </>
  )

  function toggleEditField(key) {
    setKeyEdit(key)
    setToggleEdit(true)
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  justify-content: space-around;
  align-items: center;
  border: solid 1px #000;
  margin: 10px;
  padding: 10px;
`

const StyledArrowUpIcon = styled(ArrowUpIcon)`
  position: relative;
  left: 225px;
`
