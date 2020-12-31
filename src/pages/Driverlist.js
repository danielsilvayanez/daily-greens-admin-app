import React from 'react';
import styled from 'styled-components';
import Driver from '../components/Driver';

export default function Driverlist({ deliveries, setDeliveries, drivers }) {
  function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      const key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }

  const groupedDeliveries = groupBy(deliveries, 'driver');
  const groupedDeliveriesArray = Object.entries(groupedDeliveries);
  const groupedDeliveriesArraySliced = groupedDeliveriesArray.map((array) =>
    array.slice(1)
  );
  const groupedDeliveriesArraySlicedFlattened = groupedDeliveriesArraySliced.flat();

  console.log(groupedDeliveriesArraySlicedFlattened);

  return (
    <div>hello</div>

    // <List>
    //   {deliveries.map((delivery, index) => (
    //     <Driver
    //       delivery={delivery}
    //       index={index}
    //       setDeliveries={setDeliveries}
    //       deliveries={deliveries}
    //     />
    //   ))}
    // </List>
  );
}

const List = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
