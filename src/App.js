import React from 'react'
import styled from 'styled-components'
import { Header } from './components/Header'


export default function App() {
  return (
    <AppGrid>
      <Header />
      
    </AppGrid>
  )
}

const AppGrid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 60px auto 48px;
`
