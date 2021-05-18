import React, { useState } from 'react';
import { patchDelivery } from '../Firebase/services';

export default function Edit({ editkey, documentId, toggleEdit, delivery }) {
  const [edit, setEdit] = useState({
    [editkey]: delivery[editkey],
  });

  return (
    <>
      <form>
        {typeof delivery[editkey] === 'number' && (
          <input
            type="number"
            name={editkey}
            value={edit[editkey]}
            onChange={handleChange}
          ></input>
        )}
        {typeof delivery[editkey] === 'string' && (
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

  async function handleSubmit(event) {
    event.preventDefault();
    await patchDelivery(documentId, edit);
    toggleEdit(false);
    window.location.reload();
  }

  function cancel(event) {
    event.preventDefault();
    toggleEdit(false);
  }
}
