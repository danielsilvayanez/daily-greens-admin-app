import React from 'react'
import useForm from '../libs/Hooks'
import styled from 'styled-components'

export default function Edit({
  deliveries,
  setDeliveries,
  index,
  inputName,
  setToggleEdit,
}) {
  const [handleChange, handleSubmit, newValue] = useForm(
    deliveries,
    setDeliveries,
    {
      name: '',
      street: '',
      phone: '',
      dayMeal: 0,
      weekMeal: 0,
      item: '',
      date: '',
      driver: '',
      message: '',
      stop: 0,
    },
    index
  )
  return (
    <StyledBackground>
      <StyledForm
        onSubmit={(event) => {
          handleSubmit(event)
          setToggleEdit(false)
        }}
      >
        <input
          onChange={handleChange}
          name={inputName}
          value={newValue[inputName]}
          placeholder={inputName}
        />
        <Button>Editieren</Button>
      </StyledForm>
    </StyledBackground>
  )
}

const StyledBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #555;
  opacity: 0.5;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  position: absolute;
`
const StyledForm = styled.form`
  height: 50;
  width: 200;
  z-index: 100;
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
  z-index: 100;
`
