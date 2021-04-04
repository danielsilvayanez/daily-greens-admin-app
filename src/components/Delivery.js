import React, { useState } from "react";
import styled from "styled-components";
import { deleteDelivery, patchDelivery } from "../Firebase/services";
import ArrowUpIcon from "../icons/ArrowUpIcon";
import Edit from "./Edit";
import drivers from "../defaultDriver.json";

export default function Delivery({
  delivery,
  index,
  deliveries,
  setDeliveries,
  documentId,
  meals,
}) {
  const [details, setDetails] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editkey, setEditkey] = useState("");
  const [check, setCheck] = useState(delivery.newcustomer);

  const extraKeys = Object.keys(delivery.extra);
  const extraValues = Object.values(delivery.extra);
  const [selectDriver, setSelectDriver] = useState(delivery.driverId);
  console.log("fahrer", delivery);
  function handleCheckbox(event) {
    let newDelivery = { ...delivery };
    newDelivery.newcustomer = event.target.checked;
    setCheck(newDelivery.newcustomer);
    patchDelivery(documentId, newDelivery);
  }

  function toggleEdit(name) {
    edit && setEdit(false);

    setTimeout(() => {
      setEditkey(name);
      setEdit(true);
    }, 200);
  }

  function handleDelete(documentId, delivery, index, setDeliveries) {
    setDeliveries([
      ...deliveries.slice(0, index),
      ...deliveries.slice(index + 1),
    ]);
    deleteDelivery(documentId, delivery, index);
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
        <Container height="150" primary={delivery.start}>
          <StyledArrowUpIcon onClick={() => setDetails(!details)} />
          <div>
            <h3 onClick={() => toggleEdit("name")}>Name: {delivery.name}</h3>
            <p onClick={() => toggleEdit("street")}>
              Straße: {delivery.street}
            </p>
            <p onClick={() => toggleEdit("date")}>
              Lieferdatum: {delivery.date}
            </p>
            <p onClick={() => toggleEdit("stop")}>Stopp: {delivery.stop}</p>
            <p onClick={() => toggleEdit("daymeal")}>
              Tagesgericht: {delivery.daymeal}
            </p>
            <p onClick={() => toggleEdit("weekmeal1")}>
              {meals.document.weekmeal1}: {delivery.weekmeal1}
            </p>
            <p onClick={() => toggleEdit("weekmeal2")}>
              {meals.document.weekmeal2}: {delivery.weekmeal2}
            </p>
            <p onClick={() => toggleEdit("dessert1")}>
              {meals.document.dessert1}: {delivery.dessert1}
            </p>
            <p onClick={() => toggleEdit("dessert2")}>
              {meals.document.dessert2}: {delivery.dessert2}
            </p>
            <div>
              {extraKeys.map((key, index) => (
                <p key={key}>
                  Extra: {key}: {extraValues[index]}
                </p>
              ))}
            </div>
            <p onClick={() => toggleEdit("message")}>
              Kommentar:
              <ImportantMessage>"{delivery.message}"</ImportantMessage>
            </p>
            <p onClick={() => toggleEdit("box")}>Boxen groß: {delivery.box} </p>
            <p onClick={() => toggleEdit("smallbox")}>
              Boxen klein: {delivery.smallbox}
            </p>
            <p>
              Notiz Fahrer:
              <ImportantMessage>"{delivery.drivermessage}"</ImportantMessage>
            </p>
            <p onClick={() => toggleEdit("phone")}>Tel.: {delivery.phone}</p>
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
                  <option key={driver.driverId} value={driver.driverId}>
                    {driver.driverName}
                  </option>
                ))}
              </select>
            </DriverContainer>
            <Button
              onClick={() => {
                handleDelete(documentId, delivery, index, setDeliveries);
              }}
            >
              DELETE
            </Button>
          </div>
        </Container>
      ) : (
        <Container
          onClick={() => setDetails(!details)}
          primary={delivery.start}
        >
          <h3>
            {delivery.name} ({delivery.date})
          </h3>
          <p>
            Stop: {delivery.stop} - Große Boxen: {delivery.box} - Kleine Boxen:{" "}
            {delivery.smallbox}
          </p>
        </Container>
      )}
      {edit && (
        <Edit
          editkey={editkey}
          index={index}
          deliveries={deliveries}
          setDeliveries={setDeliveries}
          documentId={documentId}
          toggleEdit={setEdit}
        />
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  justify-content: space-around;
  align-items: left;
  border: solid 1px #000;
  margin: 10px;
  padding: 10px;
  background-color: ${(props) =>
    props.primary ? "#90EE90" : "var(--primaryBgWhite)"};
`;

const StyledArrowUpIcon = styled(ArrowUpIcon)`
  position: relative;
  left: 225px;
`;

const ImportantMessage = styled.span`
  color: var(--secondaryBGPurple);
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
  font-family: "Lato", sans-serif;
  color: var(--primaryFontGrey);
  border: none;
  border-radius: 5px;
  padding: 4px;
  width: 5rem;
  margin: 15px auto 0;
`;
