import React, { useState } from 'react'
import styled from 'styled-components'
import { patchMeals } from '../Firebase/services'

export default function Meals({ dbData }) {
  const [meals, setMeals] = useState(dbData.document)
  const [disable, setDisable] = useState(true)

  function handleChange(event) {
    setMeals({ ...meals, [event.target.name]: event.target.value })
  }
  function handleSubmit(event) {
    event.prevenDefault()
    patchMeals(dbData.documentId, meals)
    setDisable(true)
  }
  return (
    <form>
      <label htmlFor="weekmeal1">Wochengericht 1:</label>
      <input
        name="weekmeal1"
        onChange={handleChange}
        value={meals.weekmeal1}
        disable={disable}
      />
      <label htmlFor="weekmeal2">Wochengericht 2:</label>
      <input
        name="weekmeal2"
        onChange={handleChange}
        value={meals.weekmeal2}
        disable={disable}
      />
      <label htmlFor="dessert1">Nachtisch 1:</label>
      <input
        name="dessert1"
        onChange={handleChange}
        value={meals.dessert1}
        disable={disable}
      />
      <label htmlFor="dessert2">Nachtisch 2:</label>
      <input
        name="dessert2"
        onChange={handleChange}
        value={meals.dessert2}
        disable={disable}
      />
      {disable ? (
        <button onSubmit={() => setDisable(false)}>Ändern</button>
      ) : (
        <button onSubmit={handleSubmit}>OK!</button>
      )}
    </form>
  )
}
