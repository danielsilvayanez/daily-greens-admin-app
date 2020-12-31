import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './components/Header';
import AddDeliveryForm from './pages/AddDeliveryForm';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import mockDeliveries from './defaultData.json';
import mockDrivers from './mockDrivers.json';

export default function App() {
  const [deliveries, setDeliveries] = useState(mockDeliveries);
  const drivers = mockDrivers;

  return (
    <AppGrid>
      <Header />
      <Navigation />
      <main>
        <Switch>
          <Route exact path="/">
            <Home
              deliveries={deliveries}
              setDeliveries={setDeliveries}
              drivers={drivers}
            />
          </Route>
          <Route path="/form">
            <AddDeliveryForm
              deliveries={deliveries}
              setDeliveries={setDeliveries}
            />
          </Route>
        </Switch>
      </main>
    </AppGrid>
  );
}

const AppGrid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 48px auto;
`;
