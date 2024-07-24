import React from 'react';

function NoteInput({ orderNote, handleChange }) {
  return (
    <div>
      <input
        type="text"
        id="orderNote"
        name="orderNote"
        rows="1"
        placeholder="Do you have any notes to add to your order?"
        value={orderNote}
        onChange={handleChange}
        data-cy="input-orderNote"
      />
    </div>
  );
}

export default NoteInput;