import React, { useState } from 'react'
import { patchDelivery } from '../Firebase/services'

export default function ExtraEdit(eKeys, eValues) {
  const extraKeys = [...eKeys, '']
  const extraValues = [...eValues, '']

  return (
    <form>
      {eKeys.map((key, index) => (
        <div>
          <input
            value={extraKeys[index]}
            onChange={(event) => handleKeyChange(event, index)}
          />
          <input
            type="number"
            value={extraValues[index]}
            onChange={(event) => handleValueChange(event, index)}
          />
        </div>
      ))}
      <div>
        <input
          value={extraKeys[extraKeys.lenght - 1]}
          onChange={(event) => handleKeyChange(event, extraKeys.lenght - 1)}
        />
        <input
          type="number"
          value={extraValues[extraValues.lenght - 1]}
          onChange={(event) => handleValueChange(event, extraValues.lenght - 1)}
        />
      </div>
    </form>
  )

  function handleKeyChange(event, index) {
    extraKeys.splice(index, 1, event.target.value)
  }

  function handleValueChange(event, index) {
    extraKeys.splice(index, 1, event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    let newDeliveries = [...deliveries]
    let newExtras = {}
    extraKeys.forEach()
    newDeliveries[index].document[editkey] = edit[editkey]
    console.log(newDeliveries[index])
    setDeliveries(newDeliveries)
    patchDelivery(documentId, newDeliveries[index].document)
    toggleEdit(false)
  }
}
