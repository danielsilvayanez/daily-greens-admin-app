import React from 'react';
import styled from 'styled-components';
import { Header } from './components/Header';
import AddDeliveryForm from './pages/AddDeliveryForm';

export default function App() {
  return (
    <AppGrid>
      <Header />
      <main>
        <AddDeliveryForm />
      </main>
    </AppGrid>
  );
}

const AppGrid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 60px auto 48px;
`;
