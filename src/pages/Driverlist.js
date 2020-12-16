import React from 'react';
import styled from 'styled-components';
import Driver from '../components/Driver';

export default function Driverlist({ deliveries }) {
  return (
    <List>
      {deliveries.map((delivery) => (
        <Driver delivery={delivery} />
      ))}
    </List>
  );
}

const List = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
