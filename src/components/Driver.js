import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowUpIcon from "../icons/ArrowUpIcon";

export default function Driver({ delivery, index, deliveries, setDeliveries }) {
  const [details, setDetails] = useState(true);
  useEffect(() => {
    console.log(details);
  }, [details]);

  const [newDelivery, setNewDelivery] = useState({
    message: "--- Bitte hier Notizen eingeben --- ",
  });

  useEffect(() => {
    setNewDelivery(delivery.message);
  }, [delivery.message]);

  return (
    <>
      {details ? (
        <Container height="150">
          <StyledArrowUpIcon onClick={() => setDetails(!details)} />
          {/* <h3>{delivery.driver}</h3> */}
          <h3>{delivery.name}</h3>
          <p>{delivery.street}</p>
          <p>{delivery.phone}</p>
          <p>Tagesessen: {delivery.dayMeal}</p>
          <p>Wochenessen: {delivery.weekMeal}</p>
          <p>{delivery.stop}. Stopp</p>
          <p>{delivery.box} Box/en</p>
          <p>Notiz: {delivery.message}</p>
        </Container>
      ) : (
        <Container onClick={() => setDetails(!details)}>
          <h3>{delivery.name}</h3>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  justify-content: space-around;
  align-items: center;
  border: solid 1px #000;
  margin: 10px;
  padding: 10px;
`;

const StyledArrowUpIcon = styled(ArrowUpIcon)`
  position: relative;
  left: 225px;
`;

const Button = styled.button`
  background-color: var(--primaryBGBtnGreen);
  font-family: "Lato", sans-serif;
  color: var(--primaryFontGrey);
  border: none;
  border-radius: 5px;
  padding: 4px;
  width: 5rem;
  margin: 15px auto 0;
`;
