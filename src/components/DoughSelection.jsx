import React from 'react';

function DoughSelection({ dough, handleChange }) {
  return (
    <div>
      <label htmlFor="dough">Dough Thickness:</label>
      <select name="dough" id="dough" value={dough} onChange={handleChange}>
        <option value="thin" data-cy="input-dough">Thin</option>
        <option value="medium">Medium</option>
        <option value="thick">Thick</option>
      </select>
    </div>
  );
}

export default DoughSelection;