import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from './components/Header'
import AddDeliveryForm from './pages/AddDeliveryForm'
import Navigation from './components/Navigation'
import Home from './pages/Home'
//import mockDeliveries from './defaultData.json'
import Register from './components/auth/Register'
import { fetchDeliveries } from './Firebase/services'

export default function App() {
  const [deliveries, setDeliveries] = useState([])

  useEffect(() => {
    fetchDeliveries().then((dbResult) => {
      setDeliveries(dbResult)
    })
  }, [])

  return (
    <AppGrid>
      <Header />
      <Navigation />
      <main>
        <Switch>
          <Route exact path="/">
            <Home deliveries={deliveries} setDeliveries={setDeliveries} />
          </Route>
          <Route exact path="/register">
            <Register />
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
  )
}

const AppGrid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 48px auto;
`
