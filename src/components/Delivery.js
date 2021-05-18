import React, { useState } from 'react';
import styled from 'styled-components';
import { deleteDelivery, patchDelivery } from '../Firebase/services';
import ArrowUpIcon from '../icons/ArrowUpIcon';
import Edit from './Edit';
import { formatDate } from '../libs/Hooks';

export default function Delivery({
  delivery,
  index,
  deliveries,
  setDeliveries,
  documentId,
  meals,
  drivers,
}) {
  const [details, setDetails] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editkey, setEditkey] = useState('');
  const [check, setCheck] = useState(delivery.newcustomer);
  const extraKeys = Object.keys(delivery.extra);
  const extraValues = Object.values(delivery.extra);
  const [selectDriver, setSelectDriver] = useState(delivery.driverId);

  function handleCheckbox(event) {
    let newDelivery = { ...delivery };
    newDelivery.newcustomer = event.target.checked;
    setCheck(newDelivery.newcustomer);
    patchDelivery(documentId, newDelivery);
  }

  function handleAbholung() {
    let newDelivery = { ...delivery };
    newDelivery.done = !newDelivery.done;
    patchDelivery(documentId, newDelivery);
  }

  function toggleEdit(name) {
    edit && setEdit(false);

    setTimeout(() => {
      setEditkey(name);
      setEdit(true);
    }, 200);
  }

  async function handleDelete(documentId, delivery, index, setDeliveries) {
    setDeliveries([
      ...deliveries.slice(0, index),
      ...deliveries.slice(index + 1),
    ]);
    await deleteDelivery(documentId, delivery, index);
    window.location.reload();
  }

  function handleSelect(event) {
    event.preventDefault();
    setSelectDriver(event.target.value);
    let newDelivery = { ...delivery };
    newDelivery.driverId = event.target.value;
    patchDelivery(documentId, newDelivery);
  }

  return (
    <>
      {details ? (
        <Container
          height="150"
          primary={delivery.start && !delivery.done}
          incomplete={delivery.stop === 0}
        >
          <StyledArrowUpIcon onClick={() => setDetails(!details)} />
          <div>
            <h3 onClick={() => toggleEdit('name')}>Name: {delivery.name}</h3>
            <p onClick={() => toggleEdit('street')}>
              Straße: {delivery.street}
            </p>
            <p onClick={() => toggleEdit('date')}>
              Lieferdatum: {formatDate(delivery.date)}
            </p>
            <p onClick={() => toggleEdit('stop')}>Stopp: {delivery.stop}</p>
            <p onClick={() => toggleEdit('daymeal1')}>
              {meals.document.daymeal1}: {delivery.daymeal1}
            </p>
            <p onClick={() => toggleEdit('daymeal2')}>
              {meals.document.daymeal2}: {delivery.daymeal2}
            </p>
            <p onClick={() => toggleEdit('daymeal3')}>
              {meals.document.daymeal3}: {delivery.daymeal3}
            </p>
            <p onClick={() => toggleEdit('daymeal4')}>
              {meals.document.daymeal4}: {delivery.daymeal4}
            </p>
            <p onClick={() => toggleEdit('daymeal5')}>
              {meals.document.daymeal5}: {delivery.daymeal5}
            </p>
            <p onClick={() => toggleEdit('dessert1')}>
              {meals.document.dessert1}: {delivery.dessert1}
            </p>
            <p onClick={() => toggleEdit('dessert2')}>
              {meals.document.dessert2}: {delivery.dessert2}
            </p>
            <div>
              {extraKeys.map((key, index) => (
                <p key={key}>
                  Extra: {key}: {extraValues[index]}
                </p>
              ))}
            </div>
            <p onClick={() => toggleEdit('message')}>
              Kommentar:
              <ImportantMessage>"{delivery.message}"</ImportantMessage>
            </p>
            <p onClick={() => toggleEdit('box')}>Boxen groß: {delivery.box} </p>
            <p onClick={() => toggleEdit('smallbox')}>
              Boxen klein: {delivery.smallbox}
            </p>
            <p>
              Notiz Fahrer:
              {delivery.drivermessage && (
                <ImportantMessage>"{delivery.drivermessage}"</ImportantMessage>
              )}
            </p>
            <p onClick={() => toggleEdit('phone')}>Tel.: {delivery.phone}</p>
            <NewCustomerContainer>
              <label htmlFor="newcustomer">Neukunde</label>
              <input
                type="checkbox"
                name="newcustomer"
                onChange={handleCheckbox}
                checked={check}
              />
            </NewCustomerContainer>
            <DriverContainer>
              <label htmlFor="drivers">Fahrer:</label>
              <select
                id="drivers"
                value={selectDriver}
                name="driver"
                onChange={handleSelect}
              >
                {drivers.map((driver) => (
                  <option key={driver.driverid} value={driver.driverid}>
                    {driver.drivername}
                  </option>
                ))}
              </select>
            </DriverContainer>
            <Button
              onClick={() => {
                // eslint-disable-next-line no-restricted-globals
                const deletionConfirmation = confirm(
                  'Bist du sicher, dass du löschen willst?'
                );
                deletionConfirmation &&
                  handleDelete(documentId, delivery, index, setDeliveries);
              }}
            >
              LÖSCHEN
            </Button>
          </div>
        </Container>
      ) : (
        <Container
          onClick={() => setDetails(!details)}
          primary={delivery.start && !delivery.done}
          incomplete={delivery.stop === 0}
        >
          <h3>
            {delivery.name} ({formatDate(delivery.date)})
          </h3>
          <p>
            Fahrer:{' '}
            {
              drivers.find((driver) => driver.driverid === delivery.driverId)
                ?.drivername
            }{' '}
            - Stop: {delivery.stop} - Große Boxen: {delivery.box} - Kleine
            Boxen: {delivery.smallbox}
          </p>
          <p>
            {delivery.daymeal1 && meals?.document?.daymeal1
              ? `${delivery.daymeal1} x ${meals?.document?.daymeal1}`
              : undefined}
          </p>
          <p>
            {delivery.daymeal2 && meals?.document?.daymeal2
              ? `${delivery.daymeal2} x ${meals?.document?.daymeal2}`
              : undefined}
          </p>
          <p>
            {delivery.daymeal3 && meals?.document?.daymeal3
              ? `${delivery.daymeal3} x ${meals?.document?.daymeal3}`
              : undefined}
          </p>
          <p>
            {delivery.daymeal4 && meals?.document?.daymeal4
              ? `${delivery.daymeal4} x ${meals?.document?.daymeal4}`
              : undefined}
          </p>
          <p>
            {delivery.daymeal5 && meals?.document?.daymeal5
              ? `${delivery.daymeal5} x ${meals?.document?.daymeal5}`
              : undefined}
          </p>
          <p>
            {delivery.dessert1 && meals?.document?.dessert1
              ? `${delivery.dessert1} x ${meals?.document?.dessert1}`
              : undefined}
          </p>
          <p>
            {delivery.dessert2 && meals?.document?.dessert2
              ? `${delivery.dessert2} x ${meals?.document?.dessert2}`
              : undefined}
          </p>

          {delivery.drivermessage && (
            <ImportantMessage>
              {
                drivers.find((driver) => driver.driverid === delivery.driverId)
                  ?.drivername
              }{' '}
              sagt "{delivery.drivermessage}"
            </ImportantMessage>
          )}

          {delivery.driverId === 'Abholung' ? (
            <div>
              <BtnAbholung
                onClick={() => {
                  handleAbholung();
                  setTimeout(() => {
                    window.location.reload();
                  }, 500);
                }}
              >
                abgeholt
              </BtnAbholung>
            </div>
          ) : undefined}
        </Container>
      )}
      {edit && (
        <Edit
          editkey={editkey}
          documentId={documentId}
          toggleEdit={setEdit}
          delivery={delivery}
        />
      )}
    </>
  );
}

const BtnAbholung = styled.button`
  background-color: var(--primaryBGBtnGreen);
  font-family: "Lato", sans-serif;
  color: var(--primaryBgWhite);
  font-size: 1.5rem;
  border-radius: 5px;
  padding: 4px;
  margin: 15px auto 0;
  :hover {
    background-color: var(--secondaryBGPurple);
    color: var(--primaryBgWhite);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  justify-content: space-around;
  align-items: left;
  border: ${(props) =>
    props.incomplete
      ? '1px solid hotpink'
      : '1px solid var(--primaryFontGrey)'};
  margin: 10px;
  padding: 10px;
  background-color: ${(props) =>
    props.primary ? '#90EE90' : 'var(--primaryBgWhite)'};
`;

const StyledArrowUpIcon = styled(ArrowUpIcon)`
  position: relative;
  left: 225px;
`;

const ImportantMessage = styled.span`
  color: var(--primaryBGPurpleDarker);
  font-weight: bold;
  font-style: italic;
`;

const NewCustomerContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
`;

const DriverContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
`;

const Button = styled.button`
  background-color: var(--primaryBGBtnGreen);
  font-family: 'Lato', sans-serif;
  color: var(--primaryFontGrey);
  border: none;
  border-radius: 5px;
  padding: 4px;
  width: 5rem;
  margin: 15px auto 0;
  :hover {
    background-color: var(--secondaryBGPurple);
    color: var(--primaryBgWhite);
  }
`;
