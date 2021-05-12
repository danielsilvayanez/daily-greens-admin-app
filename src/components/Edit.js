import React, { useState } from "react";
import { patchDelivery } from "../Firebase/services";

export default function Edit({
  editkey,
  deliveries,
  index,
  documentId,
  toggleEdit,
  delivery,
}) {
  const [edit, setEdit] = useState({
    [editkey]: delivery[editkey],
  });

  return (
    <>
      <form>
        {typeof delivery[editkey] === "number" && (
          <input
            type="number"
            name={editkey}
            value={edit[editkey]}
            onChange={handleChange}
          ></input>
        )}
        {typeof delivery[editkey] === "string" && (
          <input
            name={editkey}
            value={edit[editkey]}
            onChange={handleChange}
          ></input>
        )}

        <button onClick={handleSubmit}>OK</button>
        <button onClick={cancel}>Abbrechen</button>
      </form>
    </>
  );

  function handleChange(event) {
    setEdit({ ...edit, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newDeliveries = [...deliveries];
    newDeliveries[index].document[editkey] = edit[editkey];
    patchDelivery(documentId, newDeliveries[index].document);
    toggleEdit(false);
  }

  function cancel(event) {
    event.preventDefault();
    toggleEdit(false);
  }
}
