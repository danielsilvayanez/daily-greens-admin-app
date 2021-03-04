import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { postDelivery } from "../Firebase/services";
import ExtraInput from "../components/ExtraInput";

export default function AddDeliveryForm({ deliveries, setDeliveries }) {
  const defaultDelivery = {
    name: "",
    street: "",
    phone: "",
    daymeal: 0,
    weekmeal: 0,
    extra: {},
    date: "",
    driver: "",
    message: "",
    stop: 0,
    box: 0,
    smallbox: 0,
    start: false,
    done: false,
  };
  const [newDelivery, setNewDelivery] = useState(defaultDelivery);
  const extraInputs = [];

  console.log("länge" + Object.keys(newDelivery.extra).length);
  for (let i = 0; i <= Object.keys(newDelivery.extra).length; i++) {
    extraInputs.push("+");
  }

  return (
    <FormContainer>
      <h1>Neuer Auftrag</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="date">Lieferdatum:</label>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          value={newDelivery.date}
          required
        />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={newDelivery.name}
        />
        <label htmlFor="street">Straße, Hausnummer, Stock:</label>
        <input
          type="text"
          name="street"
          onChange={handleChange}
          value={newDelivery.street}
        />

        <label htmlFor="phone">Telefon:</label>
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          value={newDelivery.phone}
        />
        <label htmlFor="message">Notiz:</label>
        <textarea
          type="text"
          name="message"
          onChange={handleChange}
          value={newDelivery.message}
        />
        <label htmlFor="daymeal">Tagesgericht Anzahl:</label>
        <input
          type="number"
          name="daymeal"
          onChange={handleChange}
          value={newDelivery.daymeal}
        />
        <label htmlFor="weekmeal">Wochengericht Anzahl:</label>
        <input
          type="number"
          name="weekmeal"
          onChange={handleChange}
          value={newDelivery.weekmeal}
        />
        <label htmlFor="extra">Weitere Items:</label>

        {extraInputs.map(() => (
          <ExtraInput setDelivery={setNewDelivery} delivery={newDelivery} />
        ))}

        <Button onClick={handleSubmit}>Erstellen</Button>
      </Form>
    </FormContainer>
  );

  function handleChange(event) {
    setNewDelivery({
      ...newDelivery,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newDeliveries = [...deliveries, newDelivery];
    setDeliveries(newDeliveries);
    postDelivery(newDelivery);
    setNewDelivery(defaultDelivery);
  }
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-top: 15px;
  }

  input,
  select {
    width: 25rem;
    padding: 2px;
    border-radius: 5px;
    color: var(--primaryFontGrey);
    font-size: 1rem;

    :focus {
      outline-color: var(--primaryBGBtnGreen);
    }
  }
`;

const Button = styled.button`
  background-color: var(--primaryBGBtnGreen);
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  color: var(--primaryFontGrey);
  border: none;
  border-radius: 5px;
  padding: 4px;
  width: 5rem;
  margin: 15px auto 0;
`;
