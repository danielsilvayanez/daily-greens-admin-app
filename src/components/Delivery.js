import React, { useState } from "react";
import styled from "styled-components";
import ArrowUpIcon from "../icons/ArrowUpIcon";
import Edit from "./Edit";

export default function Delivery({
  delivery,
  index,
  deliveries,
  setDeliveries,
  documentId,
}) {
  const [details, setDetails] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editkey, setEditkey] = useState("");
  const extraKeys = Object.keys(delivery.extra);
  const extraValues = Object.values(delivery.extra);

  function toggleEdit(name) {
    setEditkey(name);
    setEdit(true);
  }
  console.log(deliveries[index].document);
  return (
    <>
      {details ? (
        <Container height="150">
          <StyledArrowUpIcon onClick={() => setDetails(!details)} />
          <h3 onClick={() => toggleEdit("name")}>Name: {delivery.name}</h3>
          <p onClick={() => toggleEdit("date")}>Datum: {delivery.date}</p>
          <p onClick={() => toggleEdit("street")}>Straße: {delivery.street}</p>
          <p onClick={() => toggleEdit("phone")}>Tel.: {delivery.phone}</p>
          <p onClick={() => toggleEdit("daymeal")}>
            Tagesessen: {delivery.daymeal}
          </p>
          <p onClick={() => toggleEdit("weekmeal")}>
            Wochenessen: {delivery.weekmeal}
          </p>
          <p onClick={() => toggleEdit("stop")}>Stopp: {delivery.stop}</p>
          <p onClick={() => toggleEdit("box")}>Boxen: {delivery.box} </p>
          <p onClick={() => toggleEdit("smallbox")}>
            Kleine Boxen: {delivery.smallbox}
          </p>
          <ul>
            Extras:
            {extraKeys.map((key, index) => (
              <li>
                {key}: {extraValues[index]}
              </li>
            ))}
          </ul>
          <p onClick={() => toggleEdit("message")}>
            Notiz: {delivery.message}{" "}
          </p>
        </Container>
      ) : (
        <Container onClick={() => setDetails(!details)}>
          <h3>
            {delivery.name} ({delivery.date})
          </h3>
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
  align-items: center;
  border: solid 1px #000;
  margin: 10px;
  padding: 10px;
`;

const StyledArrowUpIcon = styled(ArrowUpIcon)`
  position: relative;
  left: 225px;
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
