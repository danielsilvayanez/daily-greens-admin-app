import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./components/Header";
import AddDeliveryForm from "./pages/AddDeliveryForm";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import DriverOverview from "./pages/DriverOverview";
import Settings from "./pages/Settings";
import Register from "./components/auth/Register";
import {
  fetchDeliveries,
  fetchMeals,
  fetchDrivers,
  deleteOldDeliveries,
} from "./Firebase/services";
import Login from "./components/auth/Login";
import useAuth from "./components/auth/useAuth";
import LoginContext from "./components/auth/LoginContext";
import firebaseApp from "./Firebase/index";
import UserBar from "./components/auth/UserBar";
import Archive from "./pages/Archive";
import Dashboard from "./pages/Dashboard";
import { createDateString } from "./libs/Hooks";

export default function App() {
  const today = new Date();
  const [deliveries, setDeliveries] = useState([]);
  const [localDeliveries, setLocalDeliveries] = useState([]);
  const [meals, setMeals] = useState({});
  const [drivers, setDrivers] = useState([]);
  const [date, setDate] = useState("");
  const user = useAuth();

  useEffect(() => {
    fetchDeliveries().then((dbResult) => {
      setDeliveries(dbResult.sort(compareDate).sort(compareStop));
    });

    deleteOldDeliveries(createDateString(-29));

    fetchMeals().then((dbResult) => {
      setMeals(dbResult[0]);
    });

    fetchDrivers().then((dbResult) => {
      setDrivers(dbResult);
      console.log("Drivers ->", dbResult);
    });

    setDate(
      today.getFullYear() +
        "-" +
        ("0" + (today.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + today.getDate()).slice(-2)
    );
  }, [localDeliveries]);

  function compareDate(a, b) {
    const dateA = a.document.date;
    const dateB = b.document.date;

    let comparison = 0;
    if (dateA > dateB) {
      comparison = 1;
    } else {
      comparison = -1;
    }
    return comparison;
  }

  function compareStop(a, b) {
    const stopA = a.document.stop;
    const stopB = b.document.stop;

    let comparison = 0;
    if (stopA > stopB) {
      comparison = 1;
    } else {
      comparison = -1;
    }
    return comparison;
  }

  return (
    <LoginContext.Provider value={{ user, firebaseApp }}>
      {user ? (
        <AppGrid>
          <Header date={date} />
          <Navigation />
          <UserBar />
          <main>
            <Switch>
              <Route exact path="/">
                <Dashboard
                  meals={meals}
                  deliveries={deliveries}
                  setDeliveries={setLocalDeliveries}
                />
              </Route>
              <Route exact path="/driver-overview">
                <DriverOverview
                  date={date}
                  meals={meals}
                  deliveries={deliveries}
                  setDeliveries={setLocalDeliveries}
                  drivers={drivers}
                />
              </Route>
              <Route exact path="/home">
                <Home
                  date={date}
                  meals={meals}
                  deliveries={deliveries}
                  setDeliveries={setLocalDeliveries}
                  drivers={drivers}
                />
              </Route>
              <Route exact path="/settings">
                <Settings dbData={meals} />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/archive">
                <Archive
                  deliveries={deliveries}
                  meals={meals}
                  date={date}
                  drivers={drivers}
                />
              </Route>
              <Route path="/form">
                <AddDeliveryForm
                  deliveries={deliveries}
                  setDeliveries={setLocalDeliveries}
                  dbData={meals}
                  drivers={drivers}
                  date={date}
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
  gap: 20px;
  grid-template-rows: 60px 48px auto;
`;
