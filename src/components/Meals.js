import React, { useState, useEffect } from "react";
import { patchMeals } from "../Firebase/services";

export default function Meals({ dbData }) {
  const [meals, setMeals] = useState(dbData);
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    setMeals(dbData.document);
  }, [dbData]);
  return (
    <form>
      <label htmlFor="weekmeal1">Wochengericht 1:</label>
      <input
        name="weekmeal1"
        onChange={handleChange}
        value={meals?.weekmeal1}
        disabled={disable}
      />
      <label htmlFor="weekmeal2">Wochengericht 2:</label>
      <input
        name="weekmeal2"
        onChange={handleChange}
        value={meals?.weekmeal2}
        disabled={disable}
      />
      <label htmlFor="dessert1">Nachtisch 1:</label>
      <input
        name="dessert1"
        onChange={handleChange}
        value={meals?.dessert1}
        disabled={disable}
      />
      <label htmlFor="dessert2">Nachtisch 2:</label>
      <input
        name="dessert2"
        onChange={handleChange}
        value={meals?.dessert2}
        disabled={disable}
      />
      {disable ? (
        <button
          onClick={(event) => {
            event.preventDefault();
            setDisable(false);
          }}
        >
          Ändern
        </button>
      ) : (
        <>
          <button onClick={handleSubmit}>OK!</button>
          <button
            onClick={(event) => {
              event.preventDefault();
              setDisable(true);
            }}
          >
            Abbrechen
          </button>
        </>
      )}
    </form>
  );
  function handleChange(event) {
    setMeals({ ...meals, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    patchMeals(dbData.documentId, meals);
    setDisable(true);
  }
}
