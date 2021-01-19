import { useState } from 'react'

export default function useForm(
  values,
  submitFunction,
  resetValues,
  index = -1
) {
  const [state, setState] = useState(values[index])
  //index >= 0 ? setState(values[index]) : setState(resetValues)

  function handleChange(event) {
    event.persist()
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    let newValues = [...values]
    console.log('-----> ', newValues)
    console.log('index: ', index)

    index >= 0 ? (newValues[index] = state) : (newValues = [...values, state])

    submitFunction(newValues)
    setState(resetValues)
    console.log('-----> ', newValues)
  }

  return [handleChange, handleSubmit, state]
}
