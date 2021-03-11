// import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'

// export default function Home({ deliveries }) {
//   const reducer = (a, b) => a + b
//   const [dayMealDailyTotal, setDayMealDailyTotal] = useState(0)
//   const [weekMealDailyTotal, setWeekMealDailyTotal] = useState(0)
//   const [boxDailyTotal, setBoxDailyTotal] = useState(0)

//   useEffect(() => {
//     if (deliveries.length > 0) {
//       setDayMealDailyTotal(
//         deliveries
//           .map((delivery) => parseInt(delivery.document.daymeal))
//           .reduce(reducer)
//       )

//       setWeekMealDailyTotal(
//         deliveries.map((delivery) => delivery.document.weekmeal).reduce(reducer)
//       )

//       setBoxDailyTotal(
//         deliveries.map((delivery) => delivery.document.box).reduce(reducer)
//       )
//     }
//   }, [deliveries])

//   return (
//     <NumbersContainer>
//       <h1>Übersicht</h1>
//       <p>Tagesgericht gesamt: {dayMealDailyTotal}</p>
//       <p>Wochengericht gesamt: {weekMealDailyTotal}</p>
//       <p>Pfandboxen zurück: {boxDailyTotal}</p>
//     </NumbersContainer>
//   )
// }

// const NumbersContainer = styled.section`
//   padding: 20px;
// `
