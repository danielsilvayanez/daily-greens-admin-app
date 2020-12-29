import React, { useState } from "react";
import styled from "styled-components";

export default function AddDeliveryForm({ deliveries, setDeliveries }) {
  const [newDelivery, setNewDelivery] = useState({
    address: {
      name: "",
      street: "",
      postal: "",
    },
    dayMeal: 0,
    weekMeal: 0,
    item: "",
    date: "",
    driver: "",
    message: "",
  });

  return (
    <FormContainer>
      <h1>Neuer Auftrag</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleAddressChange}
          value={newDelivery.address.name}
        />
        <label htmlFor="street">Straße, Hausnummer, Stock:</label>
        <input
          type="text"
          name="street"
          onChange={handleAddressChange}
          value={newDelivery.address.street}
        />

        <label htmlFor="postal">PLZ, Stadt:</label>
        <input
          type="text"
          name="postal"
          onChange={handleAddressChange}
          value={newDelivery.address.postal}
        />
        <label htmlFor="dayMeal">Tagesgericht Anzahl:</label>
        <input
          type="text"
          name="dayMeal"
          onChange={handleChange}
          value={newDelivery.dayMeal}
        />
        <label htmlFor="weekMeal">Wochengericht Anzahl:</label>
        <input
          type="text"
          name="weekMeal"
          onChange={handleChange}
          value={newDelivery.weekMeal}
        />
        <label htmlFor="item">Weiteres Item:</label>
        <input
          type="text"
          name="item"
          onChange={handleChange}
          value={newDelivery.item}
        />
        <label htmlFor="date">Lieferdatum:</label>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          value={newDelivery.date}
        />
        <label htmlFor="driver">Fahrer:</label>
        <select
          name="driver"
          id=""
          onChange={handleChange}
          value={newDelivery.driver}
        >
          <option value="">Fahrer auswählen</option>
          <option value="Anton">Anton</option>
          <option value="Edi">Edi</option>
          <option value="Det">Det</option>
        </select>
        <Button>Erstellen</Button>
      </Form>
    </FormContainer>
  );

  function handleAddressChange(event) {
    // *** Alternative zu unten ***
    // let newNewDelivery = { ...newDelivery };
    // let newAddress = { ...newDelivery.address };
    // newAddress[event.target.name] = event.target.value;

    // newNewDelivery.address = newAddress;

    // setNewDelivery(newNewDelivery);

    setNewDelivery({
      ...newDelivery,
      address: {
        ...newDelivery.address,
        [event.target.name]: event.target.value,
      },
    });
  }

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

    setNewDelivery({
      address: {
        name: "",
        street: "",
        postal: "",
      },
      dayMeal: 0,
      weekMeal: 0,
      item: "",
      date: "",
      driver: "",
    });
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
