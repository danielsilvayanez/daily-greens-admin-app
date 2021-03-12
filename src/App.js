import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from './components/Header'
import AddDeliveryForm from './pages/AddDeliveryForm'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Register from './components/auth/Register'
import { fetchDeliveries, fetchMeals } from './Firebase/services'
import Login from './components/auth/Login'
import useAuth from './components/auth/useAuth'
import LoginContext from './components/auth/LoginContext'
import firebaseApp from './Firebase/index'
import UserBar from './components/auth/UserBar'
import Archive from './pages/Archive'

export default function App() {
  const today = new Date()
  const [deliveries, setDeliveries] = useState([])
  const [localDeliveries, setLocalDeliveries] = useState([])
  const [meals, setMeals] = useState({})
  const [date, setDate] = useState('')

  const user = useAuth()

  useEffect(() => {
    fetchDeliveries().then((dbResult) => {
      setDeliveries(dbResult.sort(compare))
    })

    fetchMeals().then((dbResult) => {
      setMeals(dbResult[0])
    })
    setDate(
      today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear()
    )
  }, [localDeliveries])

  function compare(a, b) {
    const dateA = a.document.date
    const dateB = b.document.date

    let comparison = 0
    if (dateA > dateB) {
      comparison = 1
    } else {
      comparison = -1
    }
    return comparison
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
                <Home
                  date={date}
                  meals={meals}
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
                  meals={meals}
                />
              </Route>
              <Route path="/form">
                <AddDeliveryForm
                  deliveries={deliveries}
                  setDeliveries={setLocalDeliveries}
                  dbData={meals}
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
  )
}

const AppGrid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 48px auto;
`
