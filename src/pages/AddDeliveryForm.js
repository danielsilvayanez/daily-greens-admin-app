import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { postDelivery } from "../Firebase/services";
import ExtraInput from "../components/ExtraInput";

export default function AddDeliveryForm({
  deliveries,
  setDeliveries,
  dbData,
  drivers,
  date,
}) {
  const [cacheDate, setCacheDate] = useState("");

  const defaultDelivery = {
    name: "",
    street: "",
    phone: "",
    daymeal1: 0,
    daymeal2: 0,
    daymeal3: 0,
    daymeal4: 0,
    daymeal5: 0,
    dessert1: 0,
    dessert2: 0,
    extra: {},
    // date: "",
    driverId: "3fXdKUI2eAbz5z4W1Quw4Xrz0M83",
    message: "",
    drivermessage: "",
    stop: 0,
    box: 0,
    smallbox: 0,
    start: false,
    done: false,
    newcustomer: false,
  };
  const defaultMeals = {
    dessert1: "",
    dessert2: "",
  };

  const [cacheDelivery, setCacheDelivery] = useState(defaultDelivery);
  const [newDelivery, setNewDelivery] = useState(defaultDelivery);
  const [meals, setMeals] = useState(defaultMeals);
  const extraInputs = [];

  useEffect(() => {
    Object.keys(dbData).length > 0 && setMeals(dbData.document);
    setCacheDate(newDelivery.date);
  }, [dbData]);

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
        <label htmlFor="drivers">Fahrer:</label>
        {drivers && (
          <select
            id="drivers"
            value={newDelivery.driverId}
            name="driverId"
            onChange={handleChange}
          >
            {drivers.map((driver) => (
              <option key={driver.driverid} value={driver.driverid}>
                {driver.drivername}
              </option>
            ))}
          </select>
        )}
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
        <label htmlFor="message">Kommentar:</label>
        <textarea
          type="text"
          name="message"
          onChange={handleChange}
          value={newDelivery.message}
        />
        <label htmlFor="daymeal1">{meals.daymeal1}:</label>
        <input
          type="number"
          name="daymeal1"
          onChange={handleChange}
          value={newDelivery.daymeal1}
        />
        <label htmlFor="daymeal2">{meals.daymeal2}:</label>
        <input
          type="number"
          name="daymeal2"
          onChange={handleChange}
          value={newDelivery.daymeal2}
        />
        <label htmlFor="daymeal3">{meals.daymeal3}:</label>
        <input
          type="number"
          name="daymeal3"
          onChange={handleChange}
          value={newDelivery.daymeal3}
        />
        <label htmlFor="daymeal4">{meals.daymeal4}:</label>
        <input
          type="number"
          name="daymeal4"
          onChange={handleChange}
          value={newDelivery.daymeal4}
        />
        <label htmlFor="daymeal5">{meals.daymeal5}:</label>
        <input
          type="number"
          name="daymeal5"
          onChange={handleChange}
          value={newDelivery.daymeal5}
        />

        <label htmlFor="dessert1">{meals.dessert1}:</label>
        <input
          type="number"
          name="dessert1"
          onChange={handleChange}
          value={newDelivery.dessert1}
        />
        <label htmlFor="dessert2">{meals.dessert2}:</label>
        <input
          type="number"
          name="dessert2"
          onChange={handleChange}
          value={newDelivery.dessert2}
        />
        <label htmlFor="extra">Weitere Items:</label>

        {extraInputs.map((index) => (
          <ExtraInput
            key={index + "extraInput"}
            setDelivery={setNewDelivery}
            delivery={newDelivery}
          />
        ))}

        <label htmlFor="newcustomer">
          Neukunde:
          <input
            style={{ margin: "0" }}
            type="checkbox"
            name="newcustomer"
            onChange={handleChange}
          />
        </label>

        <ButtonContainer>
          <Button onClick={handleSubmit} disabled={!newDelivery.date}>
            Erstellen
          </Button>

          <Button
            onClick={handleSubmitSameCustomer}
            disabled={!newDelivery.date}
          >
            weiteren Auftrag
          </Button>
        </ButtonContainer>
      </Form>
    </FormContainer>
  );

  function handleChange(event) {
    event.target.name === "newcustomer"
      ? setNewDelivery({
          ...newDelivery,
          [event.target.name]: event.target.checked,
        })
      : setNewDelivery({
          ...newDelivery,
          [event.target.name]: event.target.value,
        });
    if (
      event.target.name === "name" ||
      event.target.name === "phone" ||
      event.target.name === "street" ||
      event.target.name === "driverId"
    ) {
      setCacheDelivery({
        ...newDelivery,
        [event.target.name]: event.target.value,
      });
    }
  }

  function handleSubmit(event) {
    alert("Auftrag angelegt");
    event.preventDefault();
    let newDeliveries = [...deliveries, newDelivery];
    setDeliveries(newDeliveries);
    postDelivery(newDelivery);
    setNewDelivery(defaultDelivery);
    setCacheDate(newDelivery.date);
  }

  function handleSubmitSameCustomer(event) {
    alert("Auftrag angelegt");
    event.preventDefault();
    let newDeliveries = [...deliveries, newDelivery];
    setDeliveries(newDeliveries);
    postDelivery(newDelivery);
    setNewDelivery(cacheDelivery);
    setCacheDate(newDelivery.date);
  }
}

const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-top: 15px;
  }

  textarea {
    width: 25rem;
    height: 3rem;
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
  font-size: 1.5rem;
  color: var(--primaryFontGrey);
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 150px;
  margin: 15px auto 0;

  :disabled {
    color: darkgray;
    background-color: grey;
  }
`;
