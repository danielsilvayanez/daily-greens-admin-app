import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ArrowUpIcon from '../icons/ArrowUpIcon'

export default function Driver({ delivery, index, deliveries, setDeliveries }) {
  const [details, setDetails] = useState(false)
  useEffect(() => {
    console.log(details)
  }, [details])

  const [newDelivery, setNewDelivery] = useState({
    message: '--- Bitte hier Notizen eingeben --- ',
  })

  useEffect(() => {
    setNewDelivery(delivery.message)
  }, [delivery.message])

  return (
    <>
      {details ? (
        <Container height="150">
          <StyledArrowUpIcon onClick={() => setDetails(!details)} />
          <h3>{delivery.driver}</h3>
          <p>{delivery.name}</p>
          <p>{delivery.street}</p>
          <p>{delivery.postal}</p>
          <p>Tagesessen: {delivery.dayMeal}</p>
          <p>Wochenessen: {delivery.weekMeal}</p>
          <p>{delivery.stop}. Stopp</p>

          <Form onSubmit={handleSubmit}>
            <label htmlFor="message">Notiz: </label>
            <textarea
              type="textarea"
              name="message"
              onChange={handleChange}
              value={newDelivery.message}
              placeholder={newDelivery}
            />
            <Button>Erstellen</Button>
          </Form>
        </Container>
      ) : (
        <Container onClick={() => setDetails(!details)}>
          <h3>{delivery.driver}</h3>
        </Container>
      )}
    </>
  )

  function handleChange(event) {
    setNewDelivery({
      ...newDelivery,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    let newDeliveries = [...deliveries]
    newDeliveries[index].message = newDelivery.message
    setDeliveries(newDeliveries)
    setNewDelivery({
      message: '',
    })
    console.log('-----> ', newDeliveries)
  }
}

const Form = styled.form`
  display: flex;
  width: 80%;
  flex-direction: column;

  textarea {
    height: 100px;
  }
`
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

const Button = styled.button`
  background-color: var(--primaryBGBtnGreen);
  font-family: 'Lato', sans-serif;
  color: var(--primaryFontGrey);
  border: none;
  border-radius: 5px;
  padding: 4px;
  width: 5rem;
  margin: 15px auto 0;
`
