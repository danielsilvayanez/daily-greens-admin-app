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
        <Container height="120" onClick={() => setDetails(!details)}>
          <p>{delivery.driver}</p>
          <p>{delivery.address.name}</p>
          <p>{delivery.address.street}</p>
          <p>{delivery.address.postal}</p>
          <p>Tagesessen: {delivery.dayMeal}</p>
          <p>Wochenessen: {delivery.weekMeal}</p>
          <p>{delivery.prio}. Stopp</p>
        </Container>
      ) : (
        <Container onClick={() => setDetails(!details)}>
          <p>{delivery.driver}</p>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  height: ${(props) => props.height || 60}px;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  border: solid 1px #000;
`;
