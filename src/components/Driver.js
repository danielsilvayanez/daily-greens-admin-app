import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Driver({ delivery }) {
  const [details, setDetails] = useState(false);
  useEffect(() => {
    console.log(details);
  }, [details]);
  return (
    <>
      {details ? (
        <Container height="150" onClick={() => setDetails(!details)}>
          <h3>{delivery.driver}</h3>
          <p>{delivery.address.name}</p>
          <p>{delivery.address.street}</p>
          <p>{delivery.address.postal}</p>
          <p>Tagesessen: {delivery.dayMeal}</p>
          <p>Wochenessen: {delivery.weekMeal}</p>
          <p>{delivery.prio}. Stopp</p>
        </Container>
      ) : (
        <Container onClick={() => setDetails(!details)}>
          <h3>{delivery.driver}</h3>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: ${(props) => props.height || 60}px;
  width: 30rem;
  justify-content: space-around;
  align-items: center;
  border: solid 1px #000;
`;
