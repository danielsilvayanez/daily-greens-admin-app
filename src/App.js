import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './components/Header';
import AddDeliveryForm from './pages/AddDeliveryForm';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import deliveries from './defaultData.json';

export default function App() {
  return (
    <AppGrid>
      <Header />
      <Navigation />
      <main>
        <Switch>
          <Route exact path="/">
            <Home deliveries={deliveries} />
          </Route>
          <Route path="/form">
            <AddDeliveryForm />
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
