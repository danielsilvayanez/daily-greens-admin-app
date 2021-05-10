import React, { useState, useEffect } from "react";
import { patchMeals } from "../Firebase/services";
import styled from "styled-components";

export default function Settings({ dbData }) {
  const [meals, setMeals] = useState(dbData);
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    setMeals(dbData.document);
  }, [dbData]);

  return (
    <div>
      <StyledForm>
        <div>
          <label htmlFor="daymeal1">Tagesgericht 1:</label>
          <input
            name="daymeal1"
            onChange={handleChange}
            value={meals?.daymeal1}
            disabled={disable}
          />
        </div>
        <div>
          <label htmlFor="daymeal2">Tagesgericht 2:</label>
          <input
            name="daymeal2"
            onChange={handleChange}
            value={meals?.daymeal2}
            disabled={disable}
          />
        </div>
        <div>
          <label htmlFor="daymeal3">Tagesgericht 3:</label>
          <input
            name="daymeal3"
            onChange={handleChange}
            value={meals?.daymeal3}
            disabled={disable}
          />
        </div>
        <div>
          <label htmlFor="daymeal4">Tagesgericht 4:</label>
          <input
            name="daymeal4"
            onChange={handleChange}
            value={meals?.daymeal4}
            disabled={disable}
          />
        </div>
        <div>
          <label htmlFor="daymeal5">Tagesgericht 5:</label>
          <input
            name="daymeal5"
            onChange={handleChange}
            value={meals?.daymeal5}
            disabled={disable}
          />
        </div>
        <div>
          <label htmlFor="dessert1">Nachtisch 1:</label>
          <input
            name="dessert1"
            onChange={handleChange}
            value={meals?.dessert1}
            disabled={disable}
          />
        </div>
        <div>
          <label htmlFor="dessert2">Nachtisch 2:</label>
          <input
            name="dessert2"
            onChange={handleChange}
            value={meals?.dessert2}
            disabled={disable}
          />
        </div>

        {disable ? (
          <button
            onClick={(event) => {
              event.preventDefault();
              setDisable(false);
            }}
          >
            Editieren
          </button>
        ) : (
          <>
            <div>
              <button onClick={handleSubmit}>Speichern</button>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setDisable(true);
                }}
              >
                Abbrechen
              </button>
            </div>
          </>
        )}
      </StyledForm>
    </div>
  );

  function handleChange(event) {
    console.log("meeeeeals kram", meals);
    setMeals({ ...meals, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    patchMeals(dbData.documentId, meals);
    setDisable(true);
  }
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    padding: 20px;
  }
  label {
    margin-left: 20px;
    font-size: 1.2rem;
  }
  input {
    margin-left: 20px;
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
  button {
    width: 150px;
    height: 50px;
    border-radius: 5px;
    border: none;
    font-size: 1.5rem;
    font-family: "Lato", sans-serif;
    :hover {
      background-color: var(--primaryBGBtnGreen);
      color: var(--primaryBgWhite);
      border: 1px solid var(var(--primaryBGPurpleDarker));
    }
  }
`;
