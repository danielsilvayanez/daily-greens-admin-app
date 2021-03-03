import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./components/Header";
import AddDeliveryForm from "./pages/AddDeliveryForm";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
//import mockDeliveries from './defaultData.json'
import Register from "./components/auth/Register";
import { fetchDeliveries } from "./Firebase/services";
import Login from "./components/auth/Login";
import useAuth from "./components/auth/useAuth";
import LoginContext from "./components/auth/LoginContext";
import firebaseApp from "./Firebase/index";
import UserBar from "./components/auth/UserBar";
import Archive from "./pages/Archive";

export default function App() {
  const [deliveries, setDeliveries] = useState([]);
  const [localDeliveries, setLocalDeliveries] = useState([]);
  const user = useAuth();

  useEffect(() => {
    fetchDeliveries().then((dbResult) => {
      setDeliveries(dbResult);
    });
  }, [localDeliveries]);

  return (
    <LoginContext.Provider value={{ user, firebaseApp }}>
      {user ? (
        <AppGrid>
          <Header />
          <Navigation />
          <UserBar />
          <main>
            <Switch>
              <Route exact path="/">
                <Home
                  deliveries={deliveries}
                  setDeliveries={setLocalDeliveries}
                />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/archive">
                <Archive
                  deliveries={deliveries}
                  setDeliveries={setLocalDeliveries}
                />
              </Route>
              <Route path="/form">
                <AddDeliveryForm
                  deliveries={deliveries}
                  setDeliveries={setLocalDeliveries}
                />
              </Route>
            </Switch>
          </main>
        </AppGrid>
      ) : (
        <AppGrid>
          <Header />
          <main>
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
            </Switch>
          </main>
        </AppGrid>
      )}
    </LoginContext.Provider>
  );
}

const AppGrid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 48px auto;
`;
