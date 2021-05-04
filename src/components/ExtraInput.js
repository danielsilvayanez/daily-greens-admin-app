import React, { useState } from "react";
import styled from "styled-components";

export default function ExtraInput({ setDelivery, delivery, quantity }) {
  const [extraKey, setExtraKey] = useState("");
  const [extraValue, setExtraValue] = useState(0);
  const [disable, setDisable] = useState(false);

  return (
    <Extras>
      <input
        disabled={disable}
        type="text"
        value={extraKey}
        onChange={handleKeyChange}
      />
      <input
        disabled={disable}
        type="number"
        value={extraValue}
        onChange={handleValueChange}
      />
      <Button onClick={handleSubmit} disabled={disable}>
        OK
      </Button>
    </Extras>
  );

  function handleKeyChange(event) {
    setExtraKey(event.target.value);
  }

  function handleValueChange(event) {
    setExtraValue(event.target.value);
  }

  function handleSubmit() {
    setDelivery({
      ...delivery,
      extra: { ...delivery.extra, [extraKey]: extraValue },
    });
    setDisable(!disable);
  }
}

const Extras = styled.div`
  display: flex;
  justify-content: space-around;
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
